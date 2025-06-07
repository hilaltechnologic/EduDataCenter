import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /
Allow: /blog/
Disallow: /tags/
Disallow: /archives/

Sitemap: https://data.educentrals.com/sitemap-0.xml
Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  console.log('sitemapURL = ', sitemapURL);
  return new Response(getRobotsTxt(sitemapURL));
};
