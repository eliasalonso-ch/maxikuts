import styles from "@/app/page.module.css";

export const metadata = {
  title: "Política de Privacidad — MAXIKUTS",
};

export default function PrivacyPolicy() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Política de Privacidad</h1>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2 className={styles.heading}>1. Responsable del Tratamiento de Datos</h2>
          <p>El responsable del tratamiento de los datos personales recopilados a través de este sitio web es:</p>
          <p>Nombre: Maximiliano Monsalves<br />RUT: [RUT]<br />Dirección: Yobilo 877, Coronel, Bío Bío, Chile<br />Correo electrónico: eliasalonso4real@gmail.com<br />Sitio web: tudominio.cl</p>
          <p>Esta Política de Privacidad se rige por la Ley N.° 19.628 sobre Protección de la Vida Privada de Chile y sus modificaciones vigentes.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>2. Datos Personales que Recopilamos</h2>
          <p>Al utilizar el formulario de reserva en línea, recopilamos únicamente los siguientes datos personales:</p>
          <ul className={styles.list}>
            <li>Nombre completo</li>
            <li>Dirección de correo electrónico</li>
          </ul>
          <p>No recopilamos números de teléfono, datos de pago, datos sensibles ni ninguna otra información personal adicional.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>3. Finalidad del Tratamiento</h2>
          <p>Los datos personales recopilados se utilizan exclusivamente para:</p>
          <ul className={styles.list}>
            <li>Gestionar y confirmar reservas de servicios de barbería.</li>
            <li>Enviar confirmaciones, recordatorios o notificaciones relacionadas con la reserva por correo electrónico.</li>
            <li>Responder a consultas enviadas a través del formulario de contacto.</li>
          </ul>
          <p>No utilizamos sus datos para fines de marketing, publicidad ni elaboración de perfiles.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>4. Base Legal para el Tratamiento</h2>
          <p>De conformidad con la Ley N.° 19.628, el tratamiento de sus datos personales se basa en:</p>
          <ul className={styles.list}>
            <li>Su consentimiento expreso al completar y enviar el formulario de reserva.</li>
            <li>La ejecución de una relación contractual o de servicio (la reserva de hora).</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>5. Comunicación de Datos a Terceros</h2>
          <p>Sus datos personales no son compartidos, vendidos ni cedidos a terceros con fines comerciales.</p>
          <p>Para gestionar las reservas y el envío de correos electrónicos de confirmación, sus datos son procesados por las siguientes plataformas tecnológicas en calidad de encargados de tratamiento:</p>
          <ul className={styles.list}>
            <li>Cal.com — plataforma de gestión de reservas (cal.com). Sus servidores pueden estar ubicados fuera de Chile.</li>
            <li>Resend — servicio de envío de correos electrónicos transaccionales (resend.com). Sus servidores pueden estar ubicados fuera de Chile.</li>
          </ul>
          <p>Ambas plataformas actúan bajo nuestras instrucciones y no están autorizadas a utilizar sus datos para sus propios fines.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>6. Transferencia Internacional de Datos</h2>
          <p>Dado que Cal.com y Resend operan con infraestructura ubicada fuera de Chile, sus datos pueden ser transferidos internacionalmente. Estas transferencias se realizan con las garantías adecuadas conforme a los estándares aplicables y únicamente para los fines descritos en esta política.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>7. Plazo de Conservación</h2>
          <p>Sus datos personales se conservan únicamente durante el tiempo necesario para gestionar su reserva y cumplir con las obligaciones legales aplicables. Una vez finalizada la relación de servicio, los datos serán eliminados de forma segura.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>8. Derechos del Titular</h2>
          <p>De acuerdo con la Ley N.° 19.628, usted tiene los siguientes derechos respecto de sus datos personales:</p>
          <ul className={styles.list}>
            <li>Derecho de acceso: conocer qué datos suyos están siendo tratados.</li>
            <li>Derecho de rectificación: solicitar la corrección de datos inexactos.</li>
            <li>Derecho de cancelación: solicitar la eliminación de sus datos.</li>
            <li>Derecho de oposición: oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
          </ul>
          <p>Para ejercer cualquiera de estos derechos, puede contactarnos a: eliasalonso4real@gmail.com. Responderemos a su solicitud en un plazo razonable conforme a la normativa vigente.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>9. Seguridad de los Datos</h2>
          <p>Adoptamos medidas técnicas y organizativas razonables para proteger sus datos personales contra accesos no autorizados, pérdida, alteración o divulgación. Sin embargo, ningún sistema de transmisión por Internet es completamente seguro.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>10. Cookies y Tecnologías de Seguimiento</h2>
          <p>Este sitio web no utiliza cookies propias de seguimiento, herramientas de analítica web (como Google Analytics) ni tecnologías de rastreo de terceros.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>11. Modificaciones a esta Política</h2>
          <p>Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Las modificaciones serán publicadas en esta misma página con la fecha de última actualización. Le recomendamos revisarla periódicamente.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>12. Contacto</h2>
          <p>Si tiene dudas o consultas sobre esta Política de Privacidad, puede contactarnos a:<br />Correo electrónico: eliasalonso4real@gmail.com<br />Dirección: Yobilo 877, Coronel, Bío Bío, Chile</p>
        </section>

      </div>
    </main>
  );
}