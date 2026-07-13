export async function generateMetadata() {
  return {
    title: "Industry News | AEROVA Drone Technology",
    description: "Latest news and insights on drone technology, low-altitude economy, industrial applications, and industry developments from AEROVA.",
    keywords: ["drone news", "UAV technology", "low-altitude economy", "industrial drone", "drone industry", "aerova news"],
    openGraph: {
      title: "AEROVA Industry News",
      description: "Latest news and insights on drone technology and industrial applications.",
      images: [
        {
          url: "/images/drone_news.jpg",
          width: 1200,
          height: 630,
          alt: "AEROVA industry news",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "AEROVA Industry News",
      description: "Latest news on drone technology and industrial applications.",
    },
  }
}
