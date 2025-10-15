import type { Metadata } from "next";
import { Oooh_Baby } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

const oohBaby = Oooh_Baby({
  variable: "--font-oooh-baby",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Jardim Casa Xin | Espaço de Contemplação",
  description: "Jardim Casa Xin - Espaço de contemplação e eventos. Área verde exuberante para eventos, retiros e momentos de lazer em família.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11465030694"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11465030694');
          `}
        </Script>
      </head>
      <body className={`${oohBaby.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
