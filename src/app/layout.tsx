// ============================================================================
// Root Layout — App shell with fonts, metadata, and global providers
// ============================================================================

import type { Metadata, Viewport } from "next";
import { michroma, inter, jetbrainsMono, spaceGrotesk } from "@/styles/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
  metadataBase: new URL(BRAND.url),
  keywords: [
    "Simplicion",
    "Artificial Intelligence",
    "Engineering",
    "Research",
    "Cloud Infrastructure",
    "Enterprise Software",
    "Intelligent Systems",
    "Robotics",
    "Technology Company",
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
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-inter)]">
        {/* Accessibility: Skip to content */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />

        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Simplicion",
              url: BRAND.url,
              logo: `${BRAND.url}/logo.png`,
              description: BRAND.description,
              foundingDate: BRAND.founded,
              sameAs: [
                "https://linkedin.com/company/simplicion",
                "https://github.com/simplicion",
                "https://x.com/simplicion",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                url: `${BRAND.url}/contact`,
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
