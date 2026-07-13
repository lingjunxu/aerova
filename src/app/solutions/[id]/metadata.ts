export async function generateMetadata({ params }: { params: { id: string } }) {
  const solutionId = params.id
  const SOLUTIONS_META: Record<string, { title: string; description: string; image: string }> = {
    "power-line": { title: "Power Line Inspection Solution", description: "Drone-based power line inspection with thermal imaging and obstacle-clearing capabilities.", image: "/images/solution-power.jpg" },
    "chemical": { title: "Chemical Industry Park Security", description: "Autonomous inspection of transmission lines, wind turbines and solar arrays with AI defect detection.", image: "/images/solution-power.jpg" },
    "border": { title: "Border Counter Terrorism Patrol", description: "Centimeter-level aerial survey and orthophoto production for digital twin construction.", image: "/images/solution-power.jpg" },
    "forest-fire": { title: "Forest Fire Suppression", description: "Early detection and suppression of forest fires using drone technology.", image: "/images/solution-power.jpg" },
  }
  
  const solution = SOLUTIONS_META[solutionId] || { title: "AEROVA Drone Solution", description: "Industrial drone application solution.", image: "/images/homepage-drone.jpg" }
  
  return {
    title: `${solution.title} | AEROVA`,
    description: `${solution.title} - ${solution.description}`,
    keywords: ["drone solution", solution.title.toLowerCase().replace(/&/g, ""), "industrial drone", "UAV"],
    openGraph: {
      title: `${solution.title} | AEROVA`,
      description: solution.description,
      images: [
        {
          url: solution.image,
          width: 1200,
          height: 630,
          alt: solution.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.title} | AEROVA`,
      description: solution.description,
    },
  }
}
