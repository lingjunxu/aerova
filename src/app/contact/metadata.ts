export async function generateMetadata() {
  return {
    title: "Contact AEROVA | Industrial Drone Solutions",
    description: "Contact AEROVA's team for drone solution inquiries, product quotes, and technical support. Get in touch with our experts today.",
    keywords: ["contact aerova", "drone inquiry", "product quote", "technical support", "enterprise drone"],
    openGraph: {
      title: "Contact AEROVA",
      description: "Get in touch with AEROVA's team for industrial drone solutions.",
      images: [
        {
          url: "/images/homepage-drone.jpg",
          width: 1200,
          height: 630,
          alt: "AEROVA contact",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact AEROVA",
      description: "Get in touch with our drone solutions team.",
    },
  }
}
