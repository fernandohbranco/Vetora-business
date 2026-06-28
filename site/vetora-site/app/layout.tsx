import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const description =
  "Transformamos negócios reais em ativos digitais de valor — corrigindo o desalinhamento entre o que você entrega e o que o mercado consegue perceber.";

export const metadata: Metadata = {
  title: "VETORA — Estúdio Estratégico de Branding, Sites e IA",
  description,
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "VETORA — Estúdio Estratégico de Branding, Sites e IA",
    description,
    siteName: "VETORA",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VETORA — Estúdio Estratégico de Branding, Sites e IA",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
