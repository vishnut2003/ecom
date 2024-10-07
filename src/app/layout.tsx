import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const rubik = localFont({
  src: "./fonts/rubik/Rubik-VariableFont.ttf",
  variable: "--font-rubik",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: "eCom",
  description: "eCommerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased bg-slate-100`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
