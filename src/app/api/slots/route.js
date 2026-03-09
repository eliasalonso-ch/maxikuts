export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const eventTypeId = searchParams.get("eventTypeId");
  const date = searchParams.get("date");
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  const startParam = start ?? date;
  const endParam = end ?? date;

  const res = await fetch(
    `https://api.cal.com/v2/slots?eventTypeId=${eventTypeId}&start=${startParam}&end=${endParam}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.CAL_API_KEY}`,
        "cal-api-version": "2024-09-04",
      },
    }
  );

  const data = await res.json();
  return Response.json(data);
}