export async function generateMetadata() {
  return {
    title: "Drone Solutions | AEROVA Industrial Applications",
    description: "Discover AEROVA's drone solutions for energy inspection, surveying mapping, public safety, smart agriculture, forest fire suppression, and more.",
    keywords: ["drone solutions", "power line inspection", "surveying mapping", "public safety", "agriculture drone", "forest fire"],
    openGraph: {
      title: "AEROVA Drone Solutions",
      description: "Industrial drone solutions for energy, surveying, public safety, and agriculture applications.",
      images: [
        {
          url: "/images/solution-power.jpg",
          width: 1200,
          height: 630,
          alt: "Power line inspection drone solution",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "AEROVA Drone Solutions",
      description: "Industrial drone applications for energy inspection, surveying, and public safety.",
    },
  }
}
