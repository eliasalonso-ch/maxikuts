import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Loader from "@/components/Loader/Loader";
import { Romanesco, Source_Code_Pro } from "next/font/google";
import { headers } from "next/headers";

const romanesco = Romanesco({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-accent",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Maxikuts — Barberia y Peluquería",
  description: "Premium cuts and grooming in style.",
  authors: [{ name: "Elías Alonso", url: "https://github.com/eliasalonso-ch" }],
};

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const pathname = headersList.get("x-invoke-path") || "";
  const isStudio = pathname.startsWith("/studio");

  return (
    <html
      className={`${romanesco.variable} ${sourceCodePro.variable}`}
      lang="en"
    >
      <body>
        {!isStudio && <Loader />}
        {!isStudio && <Navbar />}
        {children}
        {!isStudio && <Footer />}
      </body>
    </html>
  );
}