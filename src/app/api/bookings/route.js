export async function POST(request) {
  const body = await request.json()
  const { eventTypeId, start, name, email, notes } = body

  const res = await fetch('https://api.cal.com/v2/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CAL_API_KEY}`,
      'cal-api-version': '2024-08-13'
    },
    body: JSON.stringify({
      eventTypeId,
      start,
      attendee: {
        name,
        email,
        timeZone: 'America/Santiago',
        language: 'en'
      },
      metadata: { notes }
    })
  })

  const data = await res.json()
  console.log('Booking response:', JSON.stringify(data))
  return Response.json(data)
}