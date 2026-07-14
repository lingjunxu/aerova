'use client'

import Link from "next/link";
import { useParams } from "next/navigation";
import StructuredData from "@/components/StructuredData";
import { createServiceSchema } from "@/lib/schema";

const SOLUTIONS_DETAIL: Record<string, {
  title: string;
  subtitle: string;
  overview: string;
  image: string;
  painPoints: { title: string; description: string }[];
  businessValue: { title: string; description: string }[];
  relatedProducts: { name: string; description: string; image: string; path: string }[];
}> = {
  "power-line": {
    title: "Power Line Inspection",
    subtitle: "Solution",
    overview: "The solution employs the portable Spear 3TA drone, equipped with high-definition visible light and thermal imaging cameras, to conduct temperature measurement inspections of power lines. The Spear 350T drone, fitted with obstacle-clearing equipment, can directly remove debris hanging on the lines.",
    image: "/images/solution-power.jpg",
    painPoints: [
      { title: "High risk and great difficulty", description: "The line spans a vast area with complex terrain, making it extremely difficult for personnel to reach the site on foot." },
      { title: "High risk, low efficiency", description: "Working at heights poses a threat to personal safety, and traditional inspection methods are costly and slow." },
      { title: "Scattered records, difficult to predict", description: "Paper-based data is fragmented and lacks digital support, making it difficult to scientifically predict potential failures." }
    ],
    businessValue: [
      { title: "Cost reduction and efficiency improvement", description: "Drones replace manual high-altitude operations, significantly enhancing inspection speed and safety." },
      { title: "AI Empowers Precise Identification", description: "Using AI algorithms to automatically detect defects such as broken strands and damage, effectively reducing manual oversight and improving the detection rate of potential hazards." },
      { title: "Fully autonomous, closed-loop troubleshooting", description: "Achieve unmanned operations from collection to analysis, ensuring more comprehensive and efficient identification of hidden risks in the power grid." }
    ],
    relatedProducts: [
      { name: "LiKiu-Spear 3 Pro", description: "The LiKiu Spear 3 Pro drone is equipped with a dual 48-megapixel super-sensing gimbal camera, designed as a high-altitude observation platform specifically for professional scenarios such as power inspection and long-distance reconnaissance.", image: "/images/3pro.jpg", path: "/products/3pro" },
      { name: "LiKiu-Spear 3TA", description: "The LiKiu lightweight industrial application drone 3T series offers multiple advantages, including portability, rapid deployment, and simple operation.", image: "/images/3ta.jpg", path: "/products/3ta" },
      { name: "LiKiu-Spear 3TB", description: "The LiKiu 3TB drone boasts multiple advantages, including lightweight portability, rapid deployment, and simple operation.", image: "/images/3tb.jpg", path: "/products/3tb" },
      { name: "LiKiu-Spear 3TC", description: "The LiKiu 3TC drone boasts multiple advantages, including lightweight portability, rapid deployment, and simple operation.", image: "/images/3tc.jpg", path: "/products/3tc" }
    ]
  },
  "chemical-park": {
    title: "Chemical Industry Park Security",
    subtitle: "Solution",
    overview: "The plan employs the Spear 3TB drone to conduct all-weather, fully-automated inspections of key areas within the chemical industrial park, including hazardous chemical storage tanks, reaction vessels, tower clusters, and chemical warehouses.",
    image: "/images/solution-chemical.jpg",
    painPoints: [
      { title: "Gas leak detection is difficult", description: "Early stage colorless and odorless, manual oversight leads to minor leaks." },
      { title: "Chain reaction cut off slowly", description: "High concentration of hazards makes point-based inspections insufficient to prevent incidents." },
      { title: "There are many blind spots in high-altitude inspection", description: "Towering and interwoven structures restrict the human line of sight." }
    ],
    businessValue: [
      { title: "Gas Temperature Sensing", description: "Equipped with a gas detector, it quantifies gas concentrations in real-time and displays temperature fluctuations, making invisible hazards visible." },
      { title: "Panoramic Intelligent Monitoring", description: "Drones achieve panoramic surveillance of the park, immediately triggering AI alerts upon detecting anomalies, thereby securing valuable time for shutting off valves and evacuating personnel." },
      { title: "Full-space, all-domain scanning", description: "Equipped with omnidirectional obstacle avoidance and positioning capabilities, it can navigate through complex structural installations, enabling comprehensive scanning from the ground to high altitudes." }
    ],
    relatedProducts: [
      { name: "LiKiu-Spear 3 Pro", description: "The LiKiu Spear 3 Pro drone is equipped with a dual 48-megapixel super-sensing gimbal camera.", image: "/images/3pro.jpg", path: "/products/3pro" },
      { name: "LiKiu-Spear 3TA", description: "The LiKiu lightweight industrial application drone 3T series offers multiple advantages.", image: "/images/3ta.jpg", path: "/products/3ta" },
      { name: "LiKiu-Spear 3TB", description: "The LiKiu 3TB drone boasts multiple advantages, including lightweight portability, rapid deployment, and simple operation.", image: "/images/3tb.jpg", path: "/products/3tb" },
      { name: "LiKiu-Spear 3TC", description: "The LiKiu 3TC drone boasts multiple advantages, including lightweight portability, rapid deployment, and simple operation.", image: "/images/3tc.jpg", path: "/products/3tc" }
    ]
  },
  "forest-fire": {
    title: "Forest Fire Suppression",
    subtitle: "Solution",
    overview: "The solution utilizes the portable drone spear 3TC in conjunction with an automatic hangar for all-weather infrared reconnaissance, locking onto the fire source location. It integrates and analyzes real-time infrared and visible light data to accelerate situational assessment, and employs the spear 4TB to deploy fire extinguishing bombs, effectively halting the spread of the fire.",
    image: "/images/solution-fire.jpg",
    painPoints: [
      { title: "Many blind spots, difficult to detect", description: "Vision obstructed, fire hard to locate." },
      { title: "The terrain is treacherous and difficult to traverse", description: "Roads are cut off, equipment is hard to reach." },
      { title: "Weak signals make command difficult", description: "Communication breakdown, decision-making errors." }
    ],
    businessValue: [
      { title: "Penetrate the smoke to locate the fire source", description: "Infrared cameras penetrate deep forest smoke, leaving no blind spots in perception, enabling preemptive judgment and targeting before the fire spreads." },
      { title: "Precision strike", description: "Firefighting payloads that cannot be carried and deployed by individual soldiers are delivered through precise aerial strikes by drones." },
      { title: "Real-time transmission of fire points", description: "Utilizing the aerial perspective and infrared detection capabilities of drones, quickly locate fire points and transmit real-time on-site conditions." }
    ],
    relatedProducts: [
      { name: "LiKiu-Spear 3 Pro", description: "The LiKiu Spear 3 Pro drone is equipped with a dual 48-megapixel super-sensing gimbal camera.", image: "/images/3pro.jpg", path: "/products/3pro" },
      { name: "LiKiu-Spear 3TA", description: "The LiKiu lightweight industrial application drone 3T series offers multiple advantages.", image: "/images/3ta.jpg", path: "/products/3ta" },
      { name: "LiKiu-Spear 3TB", description: "The LiKiu 3TB drone boasts multiple advantages, including lightweight portability, rapid deployment, and simple operation.", image: "/images/3tb.jpg", path: "/products/3tb" },
      { name: "LiKiu-Spear 3TC", description: "The LiKiu 3TC drone boasts multiple advantages, including lightweight portability, rapid deployment, and simple operation.", image: "/images/3tc.jpg", path: "/products/3tc" }
    ]
  },
  "border-patrol": {
    title: "Border Counter-Terrorism Patrol",
    subtitle: "Solution",
    overview: "The plan utilizes the Spear 3TB in conjunction with an automated hangar to achieve round-the-clock unmanned operation, enhancing patrol efficiency, and coordinates with the Spear 3TD drone swarm for support. It enables \"one-click takeoff, rapid inspection, and precise landing.\"",
    image: "/images/solution-border.jpg",
    painPoints: [
      { title: "Blind Spots at Borders Hard to Guard", description: "The terrain is complex, making it impossible to monitor continuously." },
      { title: "Delayed emergency response", description: "Road conditions are restricted, missing the golden window." },
      { title: "Disjointed Coordination Hard to Prevent", description: "Data is not accessible, vulnerabilities are easily exploited." }
    ],
    businessValue: [
      { title: "High-altitude high-frequency cruise", description: "Drones provide an aerial perspective from above, filling in the blind spots of ground surveillance. Combined with automated route planning, they enable standardized, routine, and high-frequency patrols." },
      { title: "Second-level response to drive away", description: "Upon arrival at the scene, you can immediately use voice commands to deter, capture video evidence, and employ counter-UAV equipment to drive away illegally operating drones." },
      { title: "High-definition real-time transmission", description: "High-definition images are transmitted in real-time to the command center, enabling synchronized information sharing and leaving no room for vulnerabilities to hide." }
    ],
    relatedProducts: [
      { name: "LiKiu-Spear 3 Pro", description: "The LiKiu Spear 3 Pro drone is equipped with a dual 48-megapixel super-sensing gimbal camera.", image: "/images/3pro.jpg", path: "/products/3pro" },
      { name: "LiKiu-Spear 3TA", description: "The LiKiu lightweight industrial application drone 3T series offers multiple advantages.", image: "/images/3ta.jpg", path: "/products/3ta" },
      { name: "LiKiu-Spear 3TB", description: "The LiKiu 3TB drone boasts multiple advantages, including lightweight portability, rapid deployment, and simple operation.", image: "/images/3tb.jpg", path: "/products/3tb" },
      { name: "LiKiu-Spear 3TC", description: "The LiKiu 3TC drone boasts multiple advantages, including lightweight portability, rapid deployment, and simple operation.", image: "/images/3tc.jpg", path: "/products/3tc" }
    ]
  }
};

export default function SolutionDetailPage() {
  const params = useParams<{ id: string }>();
  const solutionId = params.id || "";
  const solution = SOLUTIONS_DETAIL[solutionId];

  if (!solution) {
    return (
      <div className="bg-background min-h-screen font-sans pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Solution Not Found</h1>
          <Link href="/solutions" className="text-accent hover:underline">
            Back to Solutions
          </Link>
        </div>
      </div>
    );
  }

  const serviceSchema = createServiceSchema(
    solution.title,
    solutionId,
    solution.overview
  );

  return (
    <div className="bg-background min-h-screen font-sans pt-16">
      <StructuredData data={serviceSchema} />
      <nav className="bg-surface border-b border-border" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-5 py-4 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/solutions" className="hover:text-accent transition-colors">Solutions</Link>
            </li>
            <li>/</li>
            <li className="text-foreground">{solution.title}</li>
          </ol>
        </div>
      </nav>

      <header className="bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:flex lg:items-center lg:gap-12">
          <div className="flex-grow">
            <p className="text-accent text-sm font-medium mb-2">{solution.subtitle}</p>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{solution.title}</h1>
            <p className="text-muted-foreground max-w-3xl leading-relaxed">{solution.overview}</p>
          </div>
          <div className="mt-6 lg:mt-0 lg:w-96 flex-shrink-0">
            <figure>
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </figure>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Business Pain Points</h2>
            <div className="space-y-4">
              {solution.painPoints.map((point, index) => (
                <article key={index} className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{point.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Business Value</h2>
            <div className="space-y-4">
              {solution.businessValue.map((value, index) => (
                <article key={index} className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Portfolio of Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.relatedProducts.map((product, index) => (
              <article key={index}>
                <Link
                  href={product.path}
                  className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all group block"
                >
                  <figure className="aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </figure>
                  <div className="p-4">
                    <h3 className="text-foreground font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">{product.description}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <aside className="mt-16 text-center bg-card rounded-lg p-10 border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact our team to discuss how our drone solutions can address your specific industry challenges.
          </p>
          <nav>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </nav>
        </aside>
      </div>
    </div>
  );
}
