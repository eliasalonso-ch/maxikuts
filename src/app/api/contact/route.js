import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

function formatDate(iso) {
  return new Date(iso).toLocaleString('es-CL', {
    timeZone: 'America/Santiago',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function emailTemplate({ title, rows, cta }) {
  const rowsHtml = rows
    .map(
      ({ label, value }) => `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid rgba(0,0,0,0.06);">
            <p style="margin:0 0 3px;font-size:10px;text-transform:uppercase;letter-spacing:3px;color:#999;font-family:Arial,sans-serif;">${label}</p>
            <p style="margin:0;font-size:16px;color:#0d0d0d;line-height:1.6;">${value}</p>
          </td>
        </tr>
      `
    )
    .join('');

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body style="margin:0;padding:0;background:#f4f4f4;font-family:Georgia,serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
        <tr>
          <td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background:#ffffff;border:1px solid rgba(0,0,0,0.08);border-radius:12px;overflow:hidden;">

              <!-- Header -->
              <tr>
                <td style="background:#0d0d0d;padding:36px 40px;text-align:center;">
                  <p style="margin:0 0 8px;color:rgba(255,255,255,0.4);font-size:10px;letter-spacing:6px;text-transform:uppercase;font-family:Arial,sans-serif;">Barbería</p>
                  <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.02em;">${title}</h1>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:36px 40px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    ${rowsHtml}
                  </table>

                  ${cta ? `
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                    <tr>
                      <td>
                        ${cta.cancel ? `
                        <a href="${cta.cancel}"
                          style="display:inline-block;background:#ffffff;color:#0d0d0d;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:12px;font-family:Arial,sans-serif;letter-spacing:0.08em;text-transform:uppercase;font-weight:600;border:1px solid rgba(0,0,0,0.15);margin-right:10px;">
                          Cancelar cita
                        </a>` : ''}
                        ${cta.reschedule ? `
                        <a href="${cta.reschedule}"
                          style="display:inline-block;background:#0d0d0d;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:12px;font-family:Arial,sans-serif;letter-spacing:0.08em;text-transform:uppercase;font-weight:600;">
                          Reagendar cita →
                        </a>` : ''}
                        ${cta.book ? `
                        <a href="${cta.book}"
                          style="display:inline-block;background:#0d0d0d;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:12px;font-family:Arial,sans-serif;letter-spacing:0.08em;text-transform:uppercase;font-weight:600;">
                          Reservar nueva hora →
                        </a>` : ''}
                      </td>
                    </tr>
                  </table>` : ''}
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:20px 40px;border-top:1px solid rgba(0,0,0,0.06);text-align:center;">
                  <p style="margin:0;font-size:11px;color:#bbb;font-family:Arial,sans-serif;">
                    Este correo fue enviado automáticamente por el sistema de reservas de Maxikuts.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

export async function POST(request) {
  try {
    const event = await request.json();
    const { triggerEvent, payload } = event;
    const attendee = payload?.attendees?.[0];

    if (!attendee) return NextResponse.json({ received: true });

    // Booking requested — pending barber approval
    if (triggerEvent === 'BOOKING_REQUESTED') {
      await resend.emails.send({
        from: 'Maxikuts <onboarding@resend.dev>',
        to: [attendee.email],
        replyTo: 'eliasalonso4real@gmail.com',
        subject: 'Tu reserva está pendiente de confirmación — Maxikuts',
        html: emailTemplate({
          title: 'Reserva Pendiente de Confirmación',
          rows: [
            { label: 'Nombre', value: attendee.name },
            { label: 'Servicio', value: payload.title },
            { label: 'Fecha y hora', value: formatDate(payload.startTime) },
            { label: 'Estado', value: 'Pendiente — te avisaremos cuando el barbero confirme tu hora.' },
          ],
          cta: {
            cancel: payload.cancelLink,
            reschedule: payload.rescheduleLink,
          },
        }),
      });
    }

    // Booking confirmed — barber accepted
    if (triggerEvent === 'BOOKING_CONFIRMED') {
      await resend.emails.send({
        from: 'Maxikuts <onboarding@resend.dev>',
        to: [attendee.email],
        replyTo: 'eliasalonso4real@gmail.com',
        subject: '¡Tu reserva está confirmada! ✂️ — Maxikuts',
        html: emailTemplate({
          title: '¡Reserva Confirmada!',
          rows: [
            { label: 'Nombre', value: attendee.name },
            { label: 'Servicio', value: payload.title },
            { label: 'Fecha y hora', value: formatDate(payload.startTime) },
            { label: 'Dirección', value: 'Yobilo 870, Coronel, Bío Bío' },
            { label: 'Estado', value: '✅ Confirmada' },
          ],
          cta: {
            cancel: payload.cancelLink,
            reschedule: payload.rescheduleLink,
          },
        }),
      });
    }

    // Booking cancelled
    if (triggerEvent === 'BOOKING_CANCELLED') {
      await resend.emails.send({
        from: 'Maxikuts <onboarding@resend.dev>',
        to: [attendee.email],
        replyTo: 'eliasalonso4real@gmail.com',
        subject: 'Tu reserva ha sido cancelada — Maxikuts',
        html: emailTemplate({
          title: 'Reserva Cancelada',
          rows: [
            { label: 'Nombre', value: attendee.name },
            { label: 'Servicio', value: payload.title },
            { label: 'Fecha y hora', value: formatDate(payload.startTime) },
            { label: 'Estado', value: '❌ Cancelada' },
          ],
          cta: {
            book: 'https://tudominio.cl/booking',
          },
        }),
      });
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('Webhook error:', err);
    return NextResponse.json({ error: 'Error interno.' }, { status: 500 });
  }
}