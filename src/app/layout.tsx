import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

const baseUrl = "https://morizono-gardens.vercel.app";
export const metadata: Metadata = {
  title: "Morizono - Gardens",
  description: "Nikmati keindahan dan ketenangan di Morizono Gardens. Hunian modern dengan nuansa alam yang asri dan lokasi strategis.",
  icons: {
    icon: "/logo-morizono.png",
  },
  openGraph: {
      title: "Morizono - Gardens",
      description: "Morizono - Gardens",
      url: baseUrl,
      siteName: "Morizono - Gardens",
      images: [
        {
          url: `${baseUrl}/logo-morizono.png`, // ✅ must be PNG or JPG
          width: 1200,
          height: 630,
          alt: "Morizono - Gardens",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Morizono - Gardens",
      description: "Morizono - Gardens",
      images: [`${baseUrl}/logo-morizono.png`],
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
