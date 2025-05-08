import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nakai Sushi - Sushi Artesanal, Fresco e Inesquecível",
  description:
    "Descubra o sabor autêntico do Japão no Nakai Sushi. Ingredientes frescos, cortes precisos e uma experiência gastronômica inesquecível.",
  openGraph: {
    title: "Nakai Sushi - Sushi Artesanal, Fresco e Inesquecível",
    description:
      "Descubra o sabor autêntico do Japão no Nakai Sushi. Ingredientes frescos, cortes precisos e uma experiência gastronômica inesquecível.",
    type: "website",
    url: "https://www.nakaisushi.com", 
    images: [
      {
        url: "/images/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Nakai Sushi - Experiência Gastronômica Japonesa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nakai Sushi - Sushi Artesanal, Fresco e Inesquecível",
    description:
      "Explore o sabor do Japão com nossos sushis artesanais e ingredientes frescos. Visite o Nakai Sushi!",
    images: ["/hero-background.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
