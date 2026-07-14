'use client'

import { useState } from "react";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { createItemListSchema } from "@/lib/schema";

const INSPECTION_DRONES = [
  {
    id: "350b",
    name: "Likiu Spear 350B",
    description: "The Likiu Spear 350B is a high-performance reconnaissance and strike integrated drone equipped with dual 48-megapixel wide-angle/zoom cameras, a 640×512 resolution thermal imaging device, a 1,200-meter laser rangefinder, and 6T AI computing power. With a standard payload of 7.2 kg, it offers an endurance of up to 60 minutes and a maximum payload capacity of 6 kg.",
    image: "/images/350b.jpg",
    specs: [
      { label: "Standard Payload", value: "7.2 kg" },
      { label: "Endurance", value: "Up to 60 min" },
      { label: "Max Payload", value: "6 kg" },
      { label: "Wide-angle Camera", value: "48MP" },
      { label: "Thermal Imaging", value: "640×512" },
      { label: "Laser Rangefinder", value: "1,200m" },
      { label: "AI Computing", value: "6T" }
    ]
  },
  {
    id: "350a",
    name: "Likiu Spear 350A",
    description: "The Likiu-Spear-350A is a high-performance multi-rotor reconnaissance and strike integrated UAV specifically designed for complex battlefield environments. It integrates a 48-megapixel visible light camera and a 640×512 resolution thermal imaging device, enabling all-weather precision reconnaissance.",
    image: "/images/350a.jpg",
    specs: [
      { label: "Standard Payload", value: "7.2 kg" },
      { label: "Endurance", value: "Up to 60 min" },
      { label: "Max Payload", value: "6 kg" },
      { label: "Wind Resistance", value: "Level 6" },
      { label: "Protection Rating", value: "IP54" },
      { label: "Camera", value: "48MP + Thermal" },
      { label: "Features", value: "Swarm Flight, RTK" }
    ]
  },
  {
    id: "3pro",
    name: "Likiu Spear 3 Pro",
    description: "The LiKiu Spear 3 Pro drone is equipped with a dual 48-megapixel super-sensing gimbal camera, designed as a high-altitude observation platform specifically for professional scenarios such as power inspection and long-distance reconnaissance.",
    image: "/images/3pro.jpg",
    specs: [
      { label: "Camera", value: "Dual 48MP" },
      { label: "Protection", value: "IP44" },
      { label: "Environment", value: "Rain, Fog, Sandstorm" },
      { label: "Zoom", value: "Dual-lens Relay" },
      { label: "Application", value: "Power, Forestry, Security" }
    ]
  },
  {
    id: "3tc",
    name: "Likiu Spear 3TC",
    description: "The LiKiu 3T series drone is an aerial combat and sensing platform designed for professional fields such as public safety, energy inspection, and emergency management. This drone is equipped with all-weather adaptability to complex environments.",
    image: "/images/3tc.jpg",
    specs: [
      { label: "Application", value: "Public Safety, Inspection" },
      { label: "Environment", value: "All-weather" },
      { label: "Awareness", value: "Robust Situational" },
      { label: "Collaboration", value: "Efficient" }
    ]
  },
  {
    id: "3tb",
    name: "Likiu Spear 3TB",
    description: "The LiKiu 3TB drone boasts multiple advantages, including lightweight portability, rapid deployment, and simple operation. Its AI target recognition feature enables effortless automatic identification and map positioning.",
    image: "/images/3tb.jpg",
    specs: [
      { label: "Gimbal", value: "Triple-Sensor" },
      { label: "Camera", value: "Wide-angle + Infrared" },
      { label: "Rangefinder", value: "Laser" },
      { label: "Obstacle Avoidance", value: "4-directional Laser" },
      { label: "Application", value: "Public Safety, Inspection" }
    ]
  },
  {
    id: "3ta",
    name: "Likiu Spear 3TA",
    description: "The LiKiu lightweight industrial application drone 3T series offers multiple advantages, including portability, rapid deployment, and simple operation. With AI target recognition, it effortlessly enables automatic identification.",
    image: "/images/3ta.jpg",
    specs: [
      { label: "Gimbal", value: "Dual-Gimbal" },
      { label: "Camera", value: "Visible + Thermal" },
      { label: "Obstacle Avoidance", value: "4-directional Laser" },
      { label: "Deployment", value: "Single-person" },
      { label: "Application", value: "Public Safety, Emergency" }
    ]
  },
  {
    id: "spear3t",
    name: "Likiu Spear 3T",
    description: "LiKiu-Spear-3T is a miniature reconnaissance and strike integrated drone engineered for efficient execution of complex missions. It ingeniously integrates a flagship triple-spectrum vision perception system and robust AI computing power into a compact airframe weighing merely about 930 grams.",
    image: "/images/3pro.jpg",
    specs: [
      { label: "Weight", value: "930g" },
      { label: "Vision System", value: "Triple-Spectrum" },
      { label: "AI Computing", value: "Built-in" },
      { label: "Day Reconnaissance", value: "HD" },
      { label: "Night Search", value: "Covert" },
      { label: "Target Locking", value: "High-dynamic" }
    ]
  }
];

const AGRICULTURAL_DRONES = [
  {
    id: "s50",
    name: "Likiu S-50",
    description: "The Likiu S-50 is a heavy-duty agricultural drone with a 50-kilogram class (estimated based on maximum takeoff weight). It features an 18S (68.4V) high-voltage power system, achieving a maximum takeoff weight of 89 kg, delivering robust power and high redundancy.",
    image: "/images/s50.jpg",
    specs: [
      { label: "Bare Weight", value: "39KG" },
      { label: "Rated Takeoff Weight", value: "50KG" },
      { label: "Max Takeoff Weight", value: "89KG" },
      { label: "Operating Voltage", value: "68.4V (18S)" },
      { label: "Flight Time", value: "8-40Min" },
      { label: "Spraying System", value: "Centrifugal Nozzles" },
      { label: "Max Flow Rate", value: "10L/Min" },
      { label: "Operational Efficiency", value: "1-3 hectares/hr" }
    ]
  },
  {
    id: "s30",
    name: "Likiu S-30",
    description: "The Likiu S-30 is specifically designed for large-scale farmland operations. It features a larger 30L liquid tank and a 50L solid hopper, supporting both spraying and spreading functions. Its spray width is extended to 6-9 meters, significantly boosting operational efficiency.",
    image: "/images/s30.jpg",
    specs: [
      { label: "Bare Weight", value: "32.7KG" },
      { label: "Rated Takeoff Weight", value: "62.7KG" },
      { label: "Tank Capacity", value: "30L" },
      { label: "Hopper Capacity", value: "50L" },
      { label: "Charger Output Power", value: "7200W" },
      { label: "Hovering Time", value: "8-25Min" },
      { label: "Max Flow Rate", value: "7 L/Min" },
      { label: "Operational Efficiency", value: "10-14 hectares/hr" }
    ]
  },
  {
    id: "s20",
    name: "Likiu S-20",
    description: "The Likiu S-20 is a 20-kilogram agricultural plant protection drone. Equipped with a 20L chemical tank, capable of a maximum spraying flow rate of 7L/min, achieving an effective spray width of 4-6 meters.",
    image: "/images/s20.jpg",
    specs: [
      { label: "Bare Weight", value: "22.7KG" },
      { label: "Rated Takeoff Weight", value: "44KG" },
      { label: "Tank Capacity", value: "20L" },
      { label: "Max Flow Rate", value: "7 L/Min" },
      { label: "Charger Output Power", value: "3000W" },
      { label: "Hovering Time", value: "10-25Min" },
      { label: "Spray Width", value: "4-6m" },
      { label: "Operational Efficiency", value: "4-9 hectares/hr" }
    ]
  }
];

const CLEANING_DRONES = [
  {
    id: "c100",
    name: "Likiu C100",
    description: "The Likiu C100 is the heavy-duty flagship of this series, with a maximum takeoff weight of up to 110kg. It features a large wheelbase (1890mm) six-axis design, providing excellent flight stability and wind resistance.",
    image: "/images/c100.jpg",
    specs: [
      { label: "Bare Weight", value: "50kg" },
      { label: "Max Takeoff Weight", value: "110kg" },
      { label: "Wheelbase Distance", value: "1890mm" },
      { label: "Endurance", value: "40-65min" },
      { label: "Flight Range", value: "1000m" },
      { label: "Max Flight Speed", value: "11m/s" },
      { label: "Water Pressure", value: "0-250Bar" },
      { label: "Flow Rate", value: "15-20 L/min" }
    ]
  },
  {
    id: "c50",
    name: "Likiu C-50",
    description: "The Likiu C-50 has been upgraded for higher-intensity operational scenarios. Its maximum takeoff weight has been increased to 97.4kg, equipped with a dual 18S battery system, significantly extending its endurance.",
    image: "/images/c50.jpg",
    specs: [
      { label: "Bare Weight", value: "47.7kg" },
      { label: "Max Takeoff Weight", value: "97.4kg" },
      { label: "Battery", value: "18S 45000mahX2" },
      { label: "Endurance", value: "40-65min" },
      { label: "Operating Altitude", value: "0-150m" },
      { label: "Max Flight Speed", value: "11m/s" },
      { label: "Water Pressure", value: "0-250Bar" },
      { label: "Wind Resistance", value: "10m/s" }
    ]
  },
  {
    id: "c30",
    name: "Likiu C-30",
    description: "The Likiu C-30 is a hexacopter cleaning drone with a maximum takeoff weight of 56.7 kg. It integrates an adjustable high-pressure cleaning system ranging from 0 to 250 Bar.",
    image: "/images/c30.jpg",
    specs: [
      { label: "Bare Weight", value: "26.7kg" },
      { label: "Max Takeoff Weight", value: "56.7kg" },
      { label: "Battery", value: "14S 45000mah" },
      { label: "Endurance", value: "30-40min" },
      { label: "Operating Altitude", value: "0-100m" },
      { label: "Max Flight Speed", value: "11m/s" },
      { label: "Water Pressure", value: "0-250Bar" },
      { label: "Flow Rate", value: "15-20 L/min" }
    ]
  }
];

const CARGO_DRONES = [
  {
    id: "c300",
    name: "Likiu-C300",
    description: "The Likiu-C300 is a four-axis, eight-propeller heavy-duty transport drone, centered around specialized cargo bays, airdrop devices, and other mounting systems. With a maximum payload of 170kg and a maximum takeoff weight of 300kg.",
    image: "/images/c300.jpg",
    specs: [
      { label: "Max Payload", value: "170kg" },
      { label: "Max Takeoff Weight", value: "300kg" },
      { label: "Positioning System", value: "GPS + Dual-band RTK" },
      { label: "Positioning Accuracy", value: "0.5-20cm" },
      { label: "Bare Weight", value: "90kg" },
      { label: "Flight Range", value: "5km" },
      { label: "Flight Altitude", value: "1km" },
      { label: "Endurance (150kg Load)", value: "15min" }
    ]
  }
];

const TACTICAL_DRONES = [
  {
    id: "spear3t-tactical",
    name: "Likiu Spear 3T",
    description: "Likiu Spear 3T is a miniature reconnaissance and strike integrated drone engineered for efficient execution of complex missions. It ingeniously integrates a flagship triple-spectrum vision perception system and robust AI computing power into a compact airframe weighing merely about 930 grams.",
    image: "/images/3ta.jpg",
    specs: [
      { label: "Weight", value: "930g" },
      { label: "Vision System", value: "Triple-Spectrum" },
      { label: "AI Computing", value: "Built-in" },
      { label: "Daytime Recon", value: "HD Quality" },
      { label: "Night Search", value: "Covert Mode" },
      { label: "Target Lock", value: "High-Dynamic" },
      { label: "Maneuverability", value: "Excellent" },
      { label: "Environmental Adaptability", value: "All-Weather" }
    ]
  }
];

const RECON_DRONES = [
  {
    id: "d900",
    name: "D-Series Quadcopter (900mm)",
    description: "D-series quadcopter small unmanned aerial vehicle. Features advantages such as compact size, low cost, simple structure, ease of use, low operational environment requirements, and strong survivability.",
    image: "/images/d900.png",
    specs: [
      { label: "Bare Weight", value: "6kg" },
      { label: "Material", value: "Aluminum alloy, carbon fiber" },
      { label: "Wheelbase", value: "900mm" },
      { label: "Max Payload", value: "5KG" },
      { label: "Max Flight Time", value: "60min" },
      { label: "Control Distance", value: "10km" },
      { label: "Max Speed", value: "20m/s" },
      { label: "Wind Resistance", value: "12m/s" }
    ]
  },
  {
    id: "d1200",
    name: "D-Series Large Quadcopter (1200mm)",
    description: "D-series quadrotor medium-sized drone. It features moderate size, ease of use, low operational environment requirements, low cost, simple structure, and strong survivability. It is suitable for various applications, including reconnaissance, monitoring, and delivery.",
    image: "/images/d1200.png",
    specs: [
      { label: "Bare Weight", value: "35kg" },
      { label: "Material", value: "Aluminum alloy, carbon fiber" },
      { label: "Wheelbase", value: "1200mm" },
      { label: "Max Payload", value: "30KG" },
      { label: "Max Flight Time", value: "60min" },
      { label: "Control Distance", value: "10km" },
      { label: "Max Speed", value: "20m/s" },
      { label: "Battery Capacity", value: "40000mah" }
    ]
  },
  {
    id: "d1800",
    name: "D-Series Large Quadcopter (1800mm)",
    description: "D-series large quadcopter drone with excellent performance and stability. Can be used as an unmanned target drone for various mounting equipment.",
    image: "/images/d1800.png",
    specs: [
      { label: "Bare Weight", value: "14kg" },
      { label: "Material", value: "Aluminum alloy, carbon fiber" },
      { label: "Wheelbase", value: "1800mm" },
      { label: "Max Payload", value: "14KG" },
      { label: "Max Flight Time", value: "60min" },
      { label: "Control Distance", value: "10km" },
      { label: "Max Speed", value: "20m/s" },
      { label: "Wind Resistance", value: "Level 7" }
    ]
  },
  {
    id: "d2000",
    name: "D-Series Large Quadcopter (2000mm)",
    description: "D-series large quadcopter drone with excellent performance and stability. Can be used as an unmanned target drone for various mounting equipment.",
    image: "/images/d2000.jpg",
    specs: [
      { label: "Bare Weight", value: "14kg" },
      { label: "Material", value: "Aluminum alloy, carbon fiber" },
      { label: "Wheelbase", value: "2000mm" },
      { label: "Max Payload", value: "14KG" },
      { label: "Max Flight Time", value: "60min" },
      { label: "Control Distance", value: "10km" },
      { label: "Max Speed", value: "20m/s" },
      { label: "Wind Resistance", value: "Level 7" }
    ]
  },
  {
    id: "f1200",
    name: "F-Series Six-Rotor (1200mm)",
    description: "F-series six-rotor medium-sized drone. Features moderate size, stronger power, higher stability, ease of use, and strong survivability.",
    image: "/images/f1200.jpg",
    specs: [
      { label: "Dimensions", value: "1380x1190x620mm" },
      { label: "Wheelbase", value: "1200mm" },
      { label: "Airframe Weight", value: "8KG" },
      { label: "Max Takeoff Weight", value: "24kg" },
      { label: "Max Payload", value: "10KG" },
      { label: "Max Flight Time", value: "30-70min" },
      { label: "Control Distance", value: "10km" },
      { label: "Battery Capacity", value: "30000mah" }
    ]
  },
  {
    id: "f1800",
    name: "F-Series Six-Rotor (1800mm)",
    description: "F-series six-rotor drone with larger size and stronger power. Features advantages such as higher stability and stronger survivability.",
    image: "/images/f1800.jpg",
    specs: [
      { label: "Dimensions", value: "1720x1500x740mm" },
      { label: "Wheelbase", value: "1800mm" },
      { label: "Airframe Weight", value: "15KG" },
      { label: "Max Takeoff Weight", value: "46kg" },
      { label: "Max Payload", value: "20kg" },
      { label: "Max Flight Time", value: "70min" },
      { label: "Control Distance", value: "10km" },
      { label: "Battery Capacity", value: "40000mah" }
    ]
  }
];

type CategoryType = "all" | "inspection" | "agricultural" | "cleaning" | "cargo" | "tactical" | "recon";

const CATEGORIES: { id: CategoryType; name: string }[] = [
  { id: "all", name: "All Products" },
  { id: "inspection", name: "Inspection" },
  { id: "agricultural", name: "Agricultural" },
  { id: "cleaning", name: "Industrial Multi-mission" },
  { id: "cargo", name: "Logistics" },
  { id: "tactical", name: "Tactical" },
  { id: "recon", name: "Reconnaissance" }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const getProducts = () => {
    switch (activeCategory) {
      case "inspection":
        return INSPECTION_DRONES;
      case "agricultural":
        return AGRICULTURAL_DRONES;
      case "cleaning":
        return CLEANING_DRONES;
      case "cargo":
        return CARGO_DRONES;
      case "tactical":
        return TACTICAL_DRONES;
      case "recon":
        return RECON_DRONES;
      default:
        return [...INSPECTION_DRONES, ...AGRICULTURAL_DRONES, ...CLEANING_DRONES, ...CARGO_DRONES, ...TACTICAL_DRONES, ...RECON_DRONES];
    }
  };

  const products = getProducts();

  const allProducts = [...INSPECTION_DRONES, ...AGRICULTURAL_DRONES, ...CLEANING_DRONES, ...CARGO_DRONES, ...TACTICAL_DRONES, ...RECON_DRONES];
  const productsSchema = createItemListSchema(
    "AEROVA Industrial Drone Products",
    allProducts.map((p) => ({ url: `/products/${p.id}`, name: p.name })),
    "Comprehensive industrial drone solutions for inspection, agriculture, cleaning, logistics, and reconnaissance applications."
  );

  return (
    <div className="bg-background min-h-screen font-sans pt-16">
      <StructuredData data={productsSchema} />
      <header className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Industry Solutions
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive drone solutions for various industries including agriculture, industrial multi-mission, logistics, and security applications.
          </p>
        </div>
      </header>

      <nav className="border-b border-border bg-card" aria-label="Product categories">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap gap-2 py-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-card rounded-lg overflow-hidden border border-border"
            >
              <div
                className="p-6 cursor-pointer hover:bg-surface/50 transition-colors"
                onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <figure className="w-full lg:w-56 h-40 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </figure>

                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <button
                      className={`w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-colors ${
                        expandedProduct === product.id ? "rotate-180" : ""
                      }`}
                      aria-label={expandedProduct === product.id ? "Collapse details" : "Expand details"}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {expandedProduct === product.id && (
                <section className="border-t border-border p-6 bg-surface/50">
                  <h4 className="text-foreground font-semibold mb-4">Key Specifications</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {product.specs.map((spec, index) => (
                      <div key={index} className="bg-card p-4 rounded">
                        <dt className="text-muted-foreground/70 text-xs mb-1">{spec.label}</dt>
                        <dd className="text-foreground font-medium">{spec.value}</dd>
                      </div>
                    ))}
                  </div>
                  <nav className="mt-6 flex gap-4">
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded font-medium text-sm hover:opacity-90 transition-opacity"
                    >
                      View Details
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 border border-border text-foreground/80 px-6 py-3 rounded font-medium text-sm hover:border-accent hover:text-accent transition-colors"
                    >
                      Get Quote
                    </Link>
                  </nav>
                </section>
              )}
            </article>
          ))}
        </div>

        <aside className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact our team to discuss your specific requirements and find the perfect drone solution for your industry.
          </p>
          <nav>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </nav>
        </aside>
      </div>
    </div>
  );
}
