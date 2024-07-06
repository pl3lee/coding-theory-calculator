import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coding Theory Calculator - Hamming Code, Syndrome, C24 Decoding",
  description:
    "Solve coding theory problems with our calculator. Calculate Hamming distance, decode Hamming codes, C24 codes, and syndrome codes. Find weight and more.",
  keywords:
    "coding theory, calculator, hamming code, syndrome decoding, c24 decoding, hamming distance, weight calculator, CO331, co331, University of Waterloo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className="w-full flex flex-col lg:flex-row">
          <Navbar />
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
