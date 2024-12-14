import type { Metadata } from "next";
import Navbar from "./components/navbar/NavBar";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer/page";

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
  title: "BuyAll",
  description: "You can buy all the things here",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "public/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "public/favicon-16x16.png", sizes: "16x16", type: "image/png" },
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
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
