import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "./layout-client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morizono - Gardens",
  description:
    "Nikmati keindahan dan ketenangan di Morizono Gardens. Hunian modern dengan nuansa alam yang asri dan lokasi strategis.",
  metadataBase: new URL("https://morizono-gardens.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo-morizono.png",
  },
  other: {
    "google-site-verification": "google6ca93d94da500ac9.html", // paste your code here
  },
  openGraph: {
    title: "Morizono - Gardens",
    description:
      "Nikmati keindahan dan ketenangan di Morizono Gardens. Hunian modern dengan nuansa alam yang asri dan lokasi strategis.",
    url: "https://morizono-gardens.vercel.app",
    siteName: "Morizono - Gardens",
    images: [
      {
        url: "https://morizono-gardens.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Morizono Gardens",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morizono - Gardens",
    description:
      "Nikmati keindahan dan ketenangan di Morizono Gardens. Hunian modern dengan nuansa alam yang asri dan lokasi strategis.",
    images: ["https://morizono-gardens.vercel.app/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Morizono Gardens",
    description:
      "Nikmati keindahan dan ketenangan di Morizono Gardens. Hunian modern dengan nuansa alam yang asri dan lokasi strategis.",
    url: "https://morizono-gardens.vercel.app",
    logo: "https://morizono-gardens.vercel.app/logo-morizono.png",
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}