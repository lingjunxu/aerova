export async function generateMetadata({ params }: { params: { id: string } }) {
  const productId = params.id
  const PRODUCTS_DATA: Record<string, { name: string; description: string; images: { url: string; title: string }[] }> = {
    "350a": { name: "LIKiu-Spear 350A", description: "Lightweight design with excellent maneuverability for urban reconnaissance and security operations.", images: [{ url: "/images/350af.jpg", title: "350A" }] },
    "350b": { name: "Likiu Spear 350B", description: "High-performance reconnaissance and strike integrated drone with dual 48-megapixel cameras.", images: [{ url: "/images/350bf.jpg", title: "350B" }] },
    "3pro": { name: "LiKiu-Spear 3 Pro", description: "Equipped with dual 48-megapixel super-sensing gimbal camera for professional inspection.", images: [{ url: "/images/3prof.jpg", title: "3 Pro" }] },
    "3ta": { name: "LiKiu-Spear 3TA", description: "Lightweight industrial application drone with multiple advantages for rapid deployment.", images: [{ url: "/images/3taf.jpg", title: "3TA" }] },
    "3tb": { name: "LiKiu-Spear 3TB", description: "Lightweight portable drone with rapid deployment and simple operation.", images: [{ url: "/images/3tbf.jpg", title: "3TB" }] },
    "3tc": { name: "LiKiu-Spear 3TC", description: "Lightweight industrial drone with excellent performance for various applications.", images: [{ url: "/images/3tcf.jpg", title: "3TC" }] },
    "f1800": { name: "LiKiu-F1800", description: "Heavy-lift industrial drone with 60kg payload capacity for extreme operations.", images: [{ url: "/images/f1800f.jpg", title: "F1800" }] },
  }
  
  const product = PRODUCTS_DATA[productId]
  
  if (!product) {
    return {
      title: "Product Not Found | AEROVA",
      description: "The product you are looking for does not exist.",
    }
  }
  
  return {
    title: `${product.name} | AEROVA Industrial Drone`,
    description: `${product.name} - ${product.description} Specifications, features, and technical details.`,
    keywords: ["industrial drone", product.name, "UAV", "drone inspection", "enterprise drone"],
    openGraph: {
      title: `${product.name} | AEROVA`,
      description: product.description,
      images: [
        {
          url: product.images[0]?.url || "/images/homepage-drone.jpg",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | AEROVA`,
      description: product.description,
    },
  }
}
