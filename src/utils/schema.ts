import type { SiteConfig } from '../config';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateWebsiteSchema(siteConfig: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.title,
    "description": siteConfig.description,
    "url": siteConfig.site,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.site}api/search.json?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EduCentrals",
      "url": siteConfig.site
    }
  };
}

export function generateOrganizationSchema(siteConfig: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EduCentrals",
    "description": "Platform data pendidikan berbasis digital untuk mendukung kebijakan dan keputusan berbasis data",
    "url": siteConfig.site,
    "logo": `${siteConfig.site}favicon.ico`,
    "sameAs": [
      siteConfig.social.github,
      siteConfig.social.linkedin
    ].filter(Boolean),
    "contactPoint": {
      "@type": "ContactPoint",
      "email": siteConfig.social.email,
      "contactType": "customer service"
    }
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateArticleSchema(
  post: any,
  siteConfig: SiteConfig,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.data.title,
    "description": post.data.description,
    "image": post.data.image ? `${siteConfig.site.replace(/\/$/, '')}${post.data.image}` : undefined,
    "datePublished": post.data.date.toISOString(),
    "dateModified": post.data.date.toISOString(),
    "author": {
      "@type": "Person",
      "name": post.data.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "EduCentrals",
      "url": siteConfig.site,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.site}favicon.ico`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": post.data.tags?.join(", "),
    "articleSection": "Pendidikan",
    "inLanguage": "id-ID"
  };
}
