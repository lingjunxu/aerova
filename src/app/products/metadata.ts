export async function generateMetadata() {
  return {
    title: "Industrial Drone Products | AEROVA Enterprise UAV Platforms",
    description: "Explore AEROVA's industrial drone product lineup including inspection drones, agriculture drones, and multi-mission platforms with specifications, features, and pricing.",
    keywords: ["industrial drone", "UAV products", "inspection drone", "agriculture drone", "enterprise drone", "drone specifications"],
    openGraph: {
      title: "AEROVA Industrial Drone Products",
      description: "Explore enterprise-grade industrial drone platforms for inspection, agriculture, and multi-mission applications.",
      images: [
        {
          url: "/images/350b.jpg",
          width: 1200,
          height: 630,
          alt: "AEROVA Spear 350B inspection drone",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "AEROVA Industrial Drone Products",
      description: "Enterprise drone platforms for inspection, agriculture, and multi-mission applications.",
    },
  }
}
