import { BRAND } from "./site";

const BASE_URL = "https://www.aerova.cc";

export type OrganizationSchema = {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  legalName?: string;
  description?: string;
  url: string;
  logo?: string;
  email?: string;
  telephone?: string;
  address?: {
    "@type": "PostalAddress";
    streetAddress?: string;
    addressLocality?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  contactPoint?: {
    "@type": "ContactPoint";
    telephone?: string;
    email?: string;
    contactType?: string;
    availableLanguage?: string[];
  };
  sameAs?: string[];
};

export type WebSiteSchema = {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    "@type": "SearchAction";
    target?: string;
    "query-input"?: string;
  };
};

export type ProductSchema = {
  "@context": "https://schema.org";
  "@type": "Product";
  name: string;
  description?: string;
  brand?: {
    "@type": "Brand";
    name: string;
  };
  image?: string | string[];
  category?: string;
  sku?: string;
  offers?: {
    "@type": "Offer";
    availability?: string;
    priceCurrency?: string;
  };
  url: string;
};

export type ArticleSchema = {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description?: string;
  image?: string | string[];
  author?: {
    "@type": "Organization";
    name: string;
  };
  publisher?: {
    "@type": "Organization";
    name: string;
    logo?: {
      "@type": "ImageObject";
      url: string;
    };
  };
  datePublished?: string;
  dateModified?: string;
  url: string;
  articleBody?: string;
};

export type ServiceSchema = {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description?: string;
  serviceType?: string;
  provider?: {
    "@type": "Organization";
    name: string;
  };
  url: string;
};

export type ItemListSchema = {
  "@context": "https://schema.org";
  "@type": "ItemList";
  name?: string;
  description?: string;
  numberOfItems?: number;
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    url: string;
    name?: string;
  }>;
};

export type ContactPointSchema = {
  "@context": "https://schema.org";
  "@type": "ContactPoint";
  telephone?: string;
  email?: string;
  contactType?: string;
  areaServed?: string | string[];
  availableLanguage?: string[];
};

export function createOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    legalName: "AEROVA Unmanned Systems",
    description:
      "AEROVA provides enterprise-grade industrial drone platforms and integrated solutions for energy inspection, surveying, public safety, and agriculture. With 99.6% mission success rate and 1.2M+ safe flights.",
    url: BASE_URL,
    logo: `${BASE_URL}/images/homepage-drone.jpg`,
    email: BRAND.email,
    telephone: BRAND.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address,
      addressLocality: "San Jose",
      postalCode: "SG",
      addressCountry: "SG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BRAND.phone,
      email: BRAND.email,
      contactType: "sales",
      availableLanguage: ["English", "Chinese"],
    },
    sameAs: [],
  };
}

export function createWebSiteSchema(): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND.name,
    url: BASE_URL,
    description:
      "AEROVA provides enterprise-grade industrial drone platforms and integrated solutions for energy inspection, surveying, public safety, and agriculture.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function createProductSchema(
  name: string,
  id: string,
  description: string,
  category: string,
  image: string
): ProductSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: {
      "@type": "Brand",
      name: BRAND.name,
    },
    image: `${BASE_URL}${image}`,
    category,
    sku: id,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
    url: `${BASE_URL}/products/${id}`,
  };
}

export function createArticleSchema(
  title: string,
  id: string,
  summary: string,
  content: string,
  image: string
): ArticleSchema {
  const today = new Date().toISOString();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: summary,
    image: `${BASE_URL}${image}`,
    author: {
      "@type": "Organization",
      name: BRAND.name,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/homepage-drone.jpg`,
      },
    },
    datePublished: today,
    dateModified: today,
    url: `${BASE_URL}/news/${id}`,
    articleBody: content,
  };
}

export function createServiceSchema(
  name: string,
  id: string,
  description: string
): ServiceSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "Drone Services",
    provider: {
      "@type": "Organization",
      name: BRAND.name,
    },
    url: `${BASE_URL}/solutions/${id}`,
  };
}

export function createItemListSchema(
  name: string,
  items: Array<{ url: string; name: string }>,
  description?: string
): ItemListSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${BASE_URL}${item.url}`,
      name: item.name,
    })),
  };
}

export function createContactPointSchema(): ContactPointSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    telephone: BRAND.phone,
    email: BRAND.email,
    contactType: "sales",
    areaServed: ["Singapore", "China", "Global"],
    availableLanguage: ["English", "Chinese"],
  };
}