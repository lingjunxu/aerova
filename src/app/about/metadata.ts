export async function generateMetadata() {
  return {
    title: "About AEROVA | Industrial Drone Leader",
    description: "Learn about AEROVA's mission, values, and expertise in providing enterprise-grade industrial drone solutions. 99.6% mission success rate, 1.2M+ safe flights.",
    keywords: ["about aerova", "industrial drone company", "UAV manufacturer", "drone technology", "enterprise drone"],
    openGraph: {
      title: "About AEROVA",
      description: "Learn about AEROVA's mission, values, and expertise in industrial drone solutions.",
      images: [
        {
          url: "/images/homepage-drone.jpg",
          width: 1200,
          height: 630,
          alt: "AEROVA industrial drone",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "About AEROVA",
      description: "Enterprise-grade industrial drone solutions provider.",
    },
  }
}
