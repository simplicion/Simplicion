// ============================================================================
// Simplicion — Metadata Helpers
// ============================================================================

import type { Metadata } from "next";
import { BRAND } from "@/constants";

interface MetadataOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Generate consistent page metadata with OG tags, Twitter cards, and canonical URLs.
 */
export function generateMetadata({
  title,
  description,
  path = "",
  ogImage = "/og-image.png",
  noIndex = false,
}: MetadataOptions): Metadata {
  const url = `${BRAND.url}${path}`;

  return {
    title: `${title} | ${BRAND.name}`,
    description,
    metadataBase: new URL(BRAND.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${BRAND.name}`,
      description,
      url,
      siteName: BRAND.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${BRAND.name} — ${title}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BRAND.name}`,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
