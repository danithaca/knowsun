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
    "Ann Arbor",
    "Midwest",
    "small business AI",
    "human-centered AI",
    "AWS",
    "Ann Arbor consulting",
    "Michigan AI consulting",
  ],
  metadataBase: new URL("https://knowsun.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Knowsun Consulting — AI-First Consulting for Small & Mid-Sized Businesses",
    description:
      "Boutique AI/ML consulting in Michigan. Led by Dr. Daniel Zhou, former Amazon AWS. We pass AI productivity gains directly to you.",
    url: "https://knowsun.com",
    siteName: "Knowsun Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowsun Consulting — AI-First. Human-Centered. Built for Your Business.",
    description:
      "Boutique AI/ML consulting in Michigan & the Midwest. Led by Dr. Daniel Zhou, former Amazon AWS.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://knowsun.com/#organization",
      name: "Knowsun Consulting",
      url: "https://knowsun.com",
      logo: "https://knowsun.com/favicon.svg",
      description:
        "Boutique AI/ML consulting firm helping small and mid-sized businesses in Michigan and the Midwest build AI-first products and workflows.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ann Arbor",
        addressRegion: "MI",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "State", name: "Michigan" },
        { "@type": "AdministrativeArea", name: "Midwest" },
      ],
      serviceType: "AI Consulting",
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "AI Strategy",
        "AWS",
        "Human-Centered AI",
      ],
      founder: {
        "@type": "Person",
        name: "Dr. Daniel Zhou",
        jobTitle: "Founder & Principal AI Consultant",
        alumniOf: "Amazon AWS",
      },
      sameAs: ["https://knowsun.com"],
    },
    {
      "@type": "WebSite",
      "@id": "https://knowsun.com/#website",
      url: "https://knowsun.com",
      name: "Knowsun Consulting",
      publisher: { "@id": "https://knowsun.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
