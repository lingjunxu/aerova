import { PRODUCTS, SOLUTIONS } from "@/lib/content"
import { NEWS } from "@/lib/news"

export default function sitemap() {
  const baseUrl = "https://www.aerova.cc"
  const today = new Date().toISOString()

  const pages = [
    { url: "/", priority: 1.0 },
    { url: "/about", priority: 0.9 },
    { url: "/about/detail", priority: 0.8 },
    { url: "/products", priority: 1.0 },
    { url: "/solutions", priority: 1.0 },
    { url: "/news", priority: 0.9 },
    { url: "/contact", priority: 0.8 },
  ]

  const productUrls = PRODUCTS.map((product) => ({
    url: `/products/${encodeURIComponent(product.id)}`,
    priority: 0.9,
  }))

  const solutionUrls = SOLUTIONS.map((solution) => ({
    url: `/solutions/${solution.id}`,
    priority: 0.9,
  }))

  const newsUrls = NEWS.map((article) => ({
    url: `/news/${article.id}`,
    priority: 0.7,
  }))

  return [...pages, ...productUrls, ...solutionUrls, ...newsUrls].map((entry) => ({
    url: `${baseUrl}${entry.url}`,
    lastModified: (entry as any).lastmod || today,
    priority: entry.priority,
  }))
}
