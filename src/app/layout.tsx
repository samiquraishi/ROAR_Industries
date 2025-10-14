import type { Metadata } from "next";
import {Raleway} from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: "variable",
})

export const metadata: Metadata = {
  title: "ROAR Industries - Your Complete Business Growth Partner",
  description: "Every great brand starts with a ROAR. We're your complete business growth partner, providing an integrated ecosystem of expertise that transforms visions into victories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-stone-200 text-stone-900 ${raleway.variable} font-sans`}>{children}</body>
    </html>
  );
}
