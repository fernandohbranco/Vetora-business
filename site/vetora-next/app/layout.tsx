import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/ui/Cursor";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VETORA — Estratégia, marca e tecnologia na direção certa",
  description:
    "Estúdio estratégico de branding, sites e IA para profissionais e empresas que entregam mais do que o mercado consegue perceber.",
  openGraph: {
    title: "VETORA — Estratégia, marca e tecnologia na direção certa",
    description:
      "Transformamos o que você entrega em algo que o mercado consegue ver, entender e escolher.",
    url: "https://vetora.com.br",
    siteName: "VETORA",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  metadataBase: new URL("https://vetora.com.br"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable}`}>
      <body className="antialiased bg-deep">
        <Cursor />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
