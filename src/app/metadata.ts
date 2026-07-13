export const metadata = {
  metadataBase: new URL("https://www.aerova.cc"),
  title: {
    default: "AEROVA - Industrial Drone Solutions | Enterprise UAV Platform",
    template: "%s | AEROVA",
  },
  description: "AEROVA provides enterprise-grade industrial drone platforms and integrated solutions for energy inspection, surveying, public safety, and agriculture. With 99.6% mission success rate and 1.2M+ safe flights.",
  keywords: ["industrial drone", "UAV", "drone inspection", "power line inspection", "agriculture drone", "surveying mapping", "enterprise drone", "low-altitude economy"],
  authors: [{ name: "AEROVA" }],
  publisher: "AEROVA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aerova.cc",
    title: "AEROVA - Industrial Drone Solutions",
    description: "Enterprise-grade industrial drone platforms and integrated solutions for energy inspection, surveying, public safety, and agriculture.",
    siteName: "AEROVA",
    images: [
      {
        url: "/images/homepage-drone.jpg",
        width: 1200,
        height: 630,
        alt: "AEROVA industrial drone hovering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AEROVA - Industrial Drone Solutions",
    description: "Enterprise-grade industrial drone platforms and integrated solutions.",
    images: ["/images/homepage-drone.jpg"],
  },
  alternates: {
    canonical: "https://www.aerova.cc",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
