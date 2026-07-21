import { MetadataRoute } from 'next';
import { BRAND, PRODUCTS, LAB_PROJECTS } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BRAND.url;

  // Static routes
  const staticRoutes = [
    '',
    '/products',
    '/labs',
    '/company',
    '/careers',
    '/contact',
    '/privacy',
    '/terms',
    '/security'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic project/product routes
  const projectRoutes = [...PRODUCTS, ...LAB_PROJECTS]
    .filter(p => 'href' in p ? p.href.startsWith('/') : true) // All LAB_PROJECTS are internal (/labs/[id])
    .map((product) => ({
      url: `${baseUrl}${'href' in product ? product.href : `/labs/${product.id}`}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
