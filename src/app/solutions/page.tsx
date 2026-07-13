'use client'

import Link from "next/link";
import { useState } from "react";
import StructuredData from "@/components/StructuredData";
import { createItemListSchema } from "@/lib/schema";

const SOLUTIONS = [
  {
    id: "power-line",
    title: "Power Line Inspection",
    description: "This solution employs the portable Spear 3TA drone, equipped with high-definition visible light and thermal imaging cameras, to conduct temperature measurement inspections of power lines. The Spear 350T drone, fitted with obstacle-clearing equipment, can directly remove foreign objects hanging on the lines.",
    image: "/images/solution-power.jpg",
    features: [
      "High-definition visible light and thermal imaging cameras",
      "Temperature measurement inspections",
      "Obstacle-clearing equipment for foreign object removal",
      "Real-time data transmission",
      "Automated flight path planning"
    ]
  },
  {
    id: "chemical-park",
    title: "Chemical Industry Park Security",
    description: "This solution employs the Spear 3TB drone to conduct all-weather, fully automated inspections of key areas within chemical industrial parks, including hazardous chemical storage tanks, reaction vessels, tower clusters, and chemical warehouses.",
    image: "/images/solution-chemical.jpg",
    features: [
      "All-weather monitoring capability",
      "Hazardous area inspection",
      "Storage tank and vessel monitoring",
      "Automated patrol scheduling",
      "Real-time threat detection"
    ]
  },
  {
    id: "forest-fire",
    title: "Forest Fire Suppression",
    description: "The solution employs the portable drone spear 3TC in conjunction with an automatic hangar for all-weather infrared reconnaissance, pinpointing fire source locations. It integrates and analyzes real-time infrared and visible light data to accelerate situational assessment, and utilizes the spear 4TB to deploy fire-extinguishing bombs, effectively halting the spread of flames.",
    image: "/images/solution-fire.jpg",
    features: [
      "All-weather infrared reconnaissance",
      "Fire source location pinpointing",
      "Real-time infrared and visible light data integration",
      "Fire-extinguishing bomb deployment",
      "Rapid deployment and round-the-clock operations"
    ]
  },
  {
    id: "border-patrol",
    title: "Border Counter-Terrorism Patrol",
    description: "This solution utilizes the Spear 3TB in conjunction with an automated hangar to achieve round-the-clock unmanned operation, enhancing patrol efficiency, and is supported by the Spear 3TD drone swarm. It enables \"one-click takeoff, rapid inspection, and precise landing.\"",
    image: "/images/solution-border.jpg",
    features: [
      "Round-the-clock unmanned operation",
      "Drone swarm technology",
      "One-click takeoff and precise landing",
      "Remote high-volume broadcasting",
      "Strong light interference capability",
      "Real-time video evidence collection"
    ]
  }
];

export default function SolutionPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const solutionsSchema = createItemListSchema(
    "AEROVA Drone Solutions",
    SOLUTIONS.map((s) => ({ url: `/solutions/${s.id}`, name: s.title })),
    "Comprehensive drone solutions for energy inspection, surveying, public safety, agriculture, and forest fire suppression."
  );

  return (
    <div className="bg-background min-h-screen font-sans pt-16">
      <StructuredData data={solutionsSchema} />
      <div className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Solution
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Committed to providing high-performance intelligent unmanned system solutions.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-8">
          {SOLUTIONS.map((solution) => (
            <div
              key={solution.id}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all duration-300"
              onMouseEnter={() => setHoveredId(solution.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-96 h-64 lg:h-80 bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-32 h-32 lg:w-40 lg:h-40 bg-surface rounded-lg flex items-center justify-center">
                    <svg
                      className="w-16 h-16 lg:w-20 lg:h-20 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-grow p-6 lg:p-8 flex flex-col justify-center">
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {solution.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 text-foreground/80 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5"></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href={`/solutions/${solution.id}`}
                      className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2.5 rounded font-medium text-sm hover:opacity-90 transition-opacity"
                    >
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 border border-border text-foreground/80 px-6 py-2.5 rounded font-medium text-sm hover:border-accent hover:text-accent transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-card rounded-lg p-10 border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact our team to discuss your specific requirements and find the perfect drone solution for your industry.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
