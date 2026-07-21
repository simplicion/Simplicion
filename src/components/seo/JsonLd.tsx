"use client";

import React from "react";
import { BRAND, PRODUCTS, LAB_PROJECTS } from "@/constants";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Simplicion Private Limited",
    alternateName: "Simplicion",
    url: BRAND.url,
    logo: `${BRAND.url}/og-image.png`, // Assuming og-image is used as logo fallback
    description: BRAND.description,
    foundingDate: "2026",
    sameAs: [
      "https://twitter.com/simplicion",
      "https://linkedin.com/company/simplicion",
      "https://github.com/simplicion",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Simplicion Private Limited",
    url: BRAND.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BRAND.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // Build software application schemas for products
  const productSchemas = [...PRODUCTS, ...LAB_PROJECTS].map((product) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    operatingSystem: "Web",
    applicationCategory: "BusinessApplication",
    description: product.description,
    url: 'href' in product && product.href
      ? (product.href.startsWith("http") ? product.href : `${BRAND.url}${product.href}`)
      : `${BRAND.url}/labs/${product.id}`,
    provider: {
      "@type": "Organization",
      name: "Simplicion Private Limited",
    },
  }));

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema, ...productSchemas],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
    />
  );
}
