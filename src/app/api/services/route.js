import { getServices } from "@/sanity/lib/queries";

export async function GET() {
  const services = await getServices();
  return Response.json(services);
}
