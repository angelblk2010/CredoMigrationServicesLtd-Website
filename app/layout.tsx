import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Credo Migration Services Ltd | Licensed Immigration Advisers for NZ & Australia",
  description: "Professional immigration advisory services for New Zealand and Australia. Licensed experts helping skilled professionals, families, students, and investors achieve their migration goals.",
  keywords: "immigration, New Zealand visa, Australia visa, migration services, licensed immigration adviser, IAA, MARA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
