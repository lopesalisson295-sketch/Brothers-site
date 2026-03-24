import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Os Brothers Pizzaria & Esfiharia | Pizza Artesanal Premium em Fortaleza",
  description:
    "A melhor pizza artesanal de Fortaleza, CE. Massa artesanal, ingredientes selecionados e forno a lenha. Pizzas, esfihas e combos irresistíveis. Peça agora pelo WhatsApp!",
  keywords: [
    "pizzaria fortaleza",
    "pizza artesanal fortaleza",
    "esfiha fortaleza",
    "delivery pizza fortaleza",
    "os brothers pizzaria",
    "pizza premium fortaleza ceará",
    "forno a lenha fortaleza",
    "melhor pizza fortaleza",
  ],
  openGraph: {
    title: "Os Brothers Pizzaria & Esfiharia",
    description:
      "A verdadeira experiência premium em pizza artesanal. Massa feita à mão, ingredientes selecionados e assada no forno a lenha.",
    locale: "pt_BR",
    type: "website",
    siteName: "Os Brothers Pizzaria & Esfiharia",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
