// ============================================================================
// Root Layout — App shell with fonts, metadata, and global providers
// ============================================================================

import type { Metadata, Viewport } from "next";
import { michroma, inter, jetbrainsMono, spaceGrotesk } from "@/styles/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { BRAND } from "@/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
  metadataBase: new URL(BRAND.url),
  alternates: {
    canonical: '/',
  },
  keywords: [
    "Simplicion Private Limited",
    "Simplicion",
    "Artificial Intelligence",
    "Engineering",
    "Research",
    "Cloud Infrastructure",
    "Enterprise Software",
    "Intelligent Systems",
    "Robotics",
    "Technology Company",
    "Business Operating System",
    "Startup Growth",
    "Founder Networking",
    "Pitchin180",
  ],
  authors: [{ name: BRAND.name, url: BRAND.url }],
  creator: BRAND.name,
  publisher: BRAND.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BRAND.url,
    siteName: BRAND.name,
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: BRAND.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.description,
    images: ["/og-image.png"],
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
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${michroma.variable}
        ${inter.variable}
        ${jetbrainsMono.variable}
        ${spaceGrotesk.variable}
        antialiased
      `}
    >
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-inter)] overflow-x-hidden">
        {/* Accessibility: Skip to content */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <JsonLd />

        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />


      </body>
    </html>
  );
}
