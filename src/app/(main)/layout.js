import SecHero from "@/components/SecHero/SecHero";
import Location from "@/components/Location/Location";
import PricingServer from "@/components/Pricing/PricingServer";
import Faq from "@/components/Faq/Faq";

export default function MainLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <SecHero />
      <Location />
      <PricingServer />
      <Faq />
    </>
  );
}