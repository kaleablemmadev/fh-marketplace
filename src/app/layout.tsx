// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "fh-marketplace - Community Jobs and Talent Registry for Ethiopia",
  description: "Connect Ethiopian organizations and talent through a clean, simple dashboard. Discover organizations, find talented people, and manage submissions.",
  keywords: "Ethiopia, jobs, talent, marketplace, community, organizations, employment",
  authors: [{ name: "fh-marketplace" }],
  openGraph: {
    title: "fh-marketplace - Community Jobs and Talent Registry for Ethiopia",
    description: "Connect Ethiopian organizations and talent through a clean, simple dashboard.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "fh-marketplace - Community Jobs and Talent Registry for Ethiopia",
    description: "Connect Ethiopian organizations and talent through a clean, simple dashboard.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}