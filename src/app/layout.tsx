import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Knowsun Consulting — AI-First. Human-Centered. Built for Your Business.",
  description:
    "Knowsun is a boutique AI/ML consulting firm helping small and mid-sized businesses in Michigan and the Midwest build AI-first products and workflows. Led by Dr. Daniel Zhou, PhD Human-Centered AI, former Amazon AWS.",
  keywords: [
    "AI consulting",
    "ML consulting",
    "Michigan",
    "Midwest",
    "small business AI",
    "human-centered AI",
    "AWS",
  ],
  openGraph: {
    title: "Knowsun Consulting — AI-First Consulting for Small & Mid-Sized Businesses",
    description:
      "Boutique AI/ML consulting in Michigan. Led by Dr. Daniel Zhou, former Amazon AWS. We pass AI productivity gains directly to you.",
    url: "https://knowsun.com",
    siteName: "Knowsun Consulting",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
