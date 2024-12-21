import type { Metadata } from "next";
import Navbar from "./components/navbar/NavBar";
import { geistSans, geistMono } from "./fonts/fonts";
import "./globals.css";
import Footer from "./components/footer/page";

export const metadata: Metadata = {
  title: "BuyAll",
  description: "You can buy all the things here",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
