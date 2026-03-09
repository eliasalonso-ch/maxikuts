export async function POST(request) {
  const event = await request.json()

  if (event.triggerEvent === 'BOOKING_CREATED') {
    console.log('New booking:', event.payload)
  }

  return Response.json({ received: true })
}