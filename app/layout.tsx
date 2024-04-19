import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvast from "./components/main/StarBackgound";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfoliyo",
  description: "Portfoliyo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 overflow-y-scrol overflow-x-hidden`}>
      <StarCanvast/>
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
