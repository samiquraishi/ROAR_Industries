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
  title: "Roar Industries",
  description: "Created by Sami",
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
