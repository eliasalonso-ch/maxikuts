import { getServices } from "@/sanity/lib/queries";
import Pricing from "./Pricing";

export default async function PricingServer() {
  const cards = await getServices();
  return <Pricing cards={cards} />;
}