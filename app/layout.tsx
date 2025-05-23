import type { Metadata } from "next";
import { Oooh_Baby } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <body className={`${oohBaby.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
