'use client'

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const PRODUCTS_DATA: Record<string, ProductData> = {
  "350a": {
    name: "LIKiu-Spear 350A",
    category: "Lightweight Drone",
    description: "The Likiu Spear 350A features lightweight design and excellent maneuverability for urban reconnaissance and security operations. Its compact size allows operation in confined spaces while maintaining high-performance capabilities.",
    features: [
      "Ultra-lightweight carbon fiber frame",
      "Advanced obstacle avoidance system",
      "Quick deployment capability",
      "High-definition imaging system",
      "Silent operation mode",
      "Multi-sensor integration"
    ],
    specifications: [
      {"label": "Storage method", "value": "Foldable arms"},
      {"label": "Flight modes", "value": "Manual, autonomous"},
      {"label": "Obstacle avoidance", "value": "Omnidirectional obstacle avoidance"},
      {"label": "Terrain-following flight", "value": "Supported"},
      {"label": "Swarm flight", "value": "Supported"},
      {"label": "Standard takeoff weight", "value": "7.2kg"},
      {"label": "Maximum payload", "value": "6kg"},
      {"label": "Maximum flight speed", "value": "23m/s"},
      {"label": "Endurance with standard load", "value": "60min"},
      {"label": "Endurance with 3 kg payload", "value": "30min"},
      {"label": "Positioning accuracy", "value": "+1.5m (GNSS) +0.02m (RTK)"},
      {"label": "Communication distance", "value": "≥10km"},
      {"label": "Wind resistance", "value": "Level 6"},
      {"label": "Ingress protection rating", "value": "IP54"},
      {"label": "Optical fiber tethered module", "value": "Optional"},
      {"label": "4G/5G communication module", "value": "Optional"},
      {"label": "High-precision RTK", "value": "Optional"},
      {"label": "Swarm combat system", "value": "Optional"},
      {"label": "Visible light camera", "value": "48MP"},
      {"label": "Thermal imaging resolution", "value": "640x512"},
      {"label": "Laser rangefinder range", "value": "1500m"}
    ],
    images: [
      { url: "/images/350af.jpg", title: "Scenario" }
    ]
  },
  "350b": {
    name: "LIKiu-Spear 350B",
    category: "Inspection Drone",
    description: "The Likiu Spear 350B is a high-performance reconnaissance and strike integrated drone system developed for modern battlefield and security operations. Equipped with advanced flight control system and multi-sensor payload integration capability.",
    features: [
      "High-performance reconnaissance and strike integration",
      "Advanced flight control system",
      "Multi-sensor payload integration",
      "Long endurance flight capability",
      "Real-time data transmission",
      "Precision strike capabilities"
    ],
    specifications: [
      {"label": "Wide-angle camera resolution", "value": "48MP"},
      {"label": "Fixed-focus camera resolution", "value": "48MP"},
      {"label": "Thermal imaging resolution", "value": "640×512"},
      {"label": "Laser ranging capability", "value": "automatically calculates target spatial coordinates"},
      {"label": "AI computing power", "value": "6 TOPS"},
      {"label": "Storage method", "value": "foldable arms"},
      {"label": "Flight modes", "value": "manual, autonomous"},
      {"label": "Obstacle avoidance capability", "value": "omnidirectional obstacle avoidance"},
      {"label": "Terrain-following flight", "value": "supported"},
      {"label": "Swarm flight", "value": "supported"},
      {"label": "Standard payload weight", "value": "7.2kg"},
      {"label": "Maximum payload", "value": "6kg"},
      {"label": "Maximum flight speed", "value": "23m/s"},
      {"label": "Endurance with standard payload", "value": "60min"},
      {"label": "Endurance with 3 kg payload", "value": "30min"},
      {"label": "Positioning accuracy", "value": "+1.5m (GNSS)、+0.02m (RTK)"},
      {"label": "Communication distance", "value": "≥10km"},
      {"label": "Wind resistance", "value": "Level 6"},
      {"label": "Ingress protection rating", "value": "IP54"},
      {"label": "Optical fiber tethered module", "value": "optional"},
      {"label": "4G/5G communication module", "value": "optional"},
      {"label": "High-precision RTK", "value": "optional"},
      {"label": "Swarm combat system", "value": "optional"}
    ],
    images: [
      { url: "/images/350bf.jpg", title: "Scenario" }
    ]
  },
  "3pro": {
    name: "LIKiu-Spear 3 Pro",
    category: "Professional Drone",
    description: "The Likiu Spear 3 Pro is upgraded with enhanced payload capacity and advanced flight performance. Designed for professional aerial photography, mapping and industrial inspection applications requiring superior image quality.",
    features: [
      "Enhanced payload capacity",
      "Professional-grade imaging system",
      "Advanced flight stability",
      "Extended flight range",
      "Intelligent flight modes",
      "Real-time 3D mapping"
    ],
    specifications: [
      {"label": "Fixed-focus camera resolution", "value": "48 MP"},
      {"label": "Wide-angle camera resolution", "value": "48 MP"},
      {"label": "Target recognition", "value": "AI automatic recognition and tracking"},
      {"label": "Endurance time", "value": "51 min"},
      {"label": "Basic weight", "value": "approx. 930 g"},
      {"label": "Maximum takeoff weight", "value": "approx. 1330 g"},
      {"label": "Maximum flight time (windless environment)", "value": "51min"},
      {"label": "Maximum hovering time (windless environment)", "value": "44min"},
      {"label": "Maximum rotation angular velocity", "value": "130°/s"},
      {"label": "Maximum horizontal flight speed", "value": "20m/s"},
      {"label": "Maximum tilt angle", "value": "30°"},
      {"label": "Maximum ascent speed", "value": "6m/s"},
      {"label": "Folded dimensions", "value": "222×97×91mm"},
      {"label": "Unfolded dimensions", "value": "348×284×108mm"},
      {"label": "Satellite navigation system", "value": "GPS+Galileo+BeiDou+GLONASS /Pure BeiDou"},
      {"label": "Ground station language", "value": "Chinese, English, Russian"},
      {"label": "Video transmission distance", "value": "1.5–3 km (strong interference), 3–6 km (medium interference), 6–10 km (weak interference)"}
    ],
    images: [
      { url: "/images/3prof.jpg", title: "Scenario" }
    ]
  },
  "3tc": {
    name: "LIKiu-Spear 3TC",
    category: "Cargo Drone",
    description: "The Likiu Spear 3TC is a specialized cargo transport drone designed for logistics and delivery operations. With robust payload capacity and reliable flight performance, it provides efficient aerial transport solutions.",
    features: [
      "Heavy payload transport capability",
      "Precision delivery system",
      "Weather-resistant design",
      "Autonomous flight mode",
      "Intelligent navigation system",
      "Secure cargo bay"
    ],
    specifications: [
      {"label": "Bare weight", "value": "approx. 930 g"},
      {"label": "Maximum take-off weight", "value": "approx. 1330 g"},
      {"label": "Maximum flight time (windless environment)", "value": "50min"},
      {"label": "Maximum hovering time (windless environment)", "value": "43min"},
      {"label": "Maximum rotation angular velocity", "value": "130°/s"},
      {"label": "Maximum horizontal flight speed", "value": "20m/s"},
      {"label": "Maximum tilt angle", "value": "30°"},
      {"label": "Maximum ascent speed", "value": "6m/s"},
      {"label": "Folded dimensions", "value": "222X97X91mm"},
      {"label": "Unfolded dimensions", "value": "348X284X108mm"},
      {"label": "Satellite navigation system", "value": "GPS+Galileo+BeiDou+GLONASS / Pure BeiDou"},
      {"label": "Image sensor", "value": "1/2-inch, 48 MP"},
      {"label": "Ground station languages", "value": "Chinese, English, Russian"},
      {"label": "Video transmission distance", "value": "1.5–3 km (strong interference);3–6 km (medium interference);6–10 km (weak interference)"},
      {"label": "Thermal Imaging Resolution", "value": "640X512"},
      {"label": "Laser Rangefinder Range", "value": "5 - 1500m"},
      {"label": "Laser Rangefinder Accuracy", "value": "±1m"},
      {"label": "Operating temperature", "value": "-20°C to 50°C"},
      {"label": "Protection rating", "value": "IP44"}
    ],
    images: [
      { url: "/images/3tcf.jpg", title: "Scenario" }
    ]
  },
  "3tb": {
    name: "LIKiu-Spear 3TB",
    category: "Tactical Drone",
    description: "The Likiu Spear 3TB is a tactical unmanned aerial system optimized for military and security applications. Featuring rugged design and advanced electronic warfare capabilities for demanding operational environments.",
    features: [
      "Military-grade rugged design",
      "Electronic warfare capabilities",
      "Stealth operation mode",
      "Night vision compatibility",
      "Secure communication link",
      "Rapid deployment system"
    ],
    specifications: [
      {"label": "Visible Light Camera Resolution", "value": "5.0 MP"},
      {"label": "Thermal Resolution", "value": "640×512"},
      {"label": "Laser Rangefinder", "value": "5–1000m, automated target spatial coordinate calculation"},
      {"label": "Endurance", "value": "51 minutes"},
      {"label": "Bare Weight", "value": "Approx. 920g"},
      {"label": "Max Takeoff Weight", "value": "Approx. 1320g"},
      {"label": "Max Flight Time (Zero Wind)", "value": "51min"},
      {"label": "Max Hovering Time (Zero Wind)", "value": "44min"},
      {"label": "Max Angular Velocity", "value": "130°/s"},
      {"label": "Max Flight Speed", "value": "20m/s"},
      {"label": "Max Tilt Angle", "value": "30°"},
      {"label": "Max Ascent Speed", "value": "6m/s"},
      {"label": "Folded Dimensions", "value": "222×97×91mm"},
      {"label": "Unfolded Dimensions", "value": "348×284×108mm"},
      {"label": "GNSS", "value": "GPS+Galileo+BeiDou+GLONASS /Pure BeiDou"},
      {"label": "Image Sensor", "value": "1/2-inch, 5.0 MP"},
      {"label": "GCS Languages", "value": "Chinese, English, Russian"},
      {"label": "Transmission Distance", "value": "1.5–3km (Strong Interference), 3–6km (Medium Interference), 6–10km (Weak Interference)"}
    ],
    images: [
      { url: "/images/3tbf.jpg", title: "Scenario" }
    ]
  },
  "3ta": {
    name: "LIKiu-Spear 3TA",
    category: "Autonomous Drone",
    description: "The Likiu Spear 3TA is an autonomous drone system with AI-powered navigation and mission planning capabilities. It can operate independently in complex environments with minimal human intervention.",
    features: [
      "AI-powered autonomous navigation",
      "Self-learning mission planning",
      "Adaptive obstacle avoidance",
      "Swarm operation capability",
      "Edge computing processing",
      "Multi-mission capability"
    ],
    specifications: [
      {"label": "Thermal Resolution", "value": "384×288"},
      {"label": "Visible Light Camera Resolution", "value": "5.0 MP"},
      {"label": "Endurance", "value": "55 min"},
      {"label": "Sensing System", "value": "Laser Obstacle Avoidance"},
      {"label": "Bare Weight", "value": "Approx. 870g"},
      {"label": "Max Flight Time (No Wind)", "value": "55min"},
      {"label": "Max Hovering Time (No Wind)", "value": "48min"},
      {"label": "Max Flight Range", "value": "35km"},
      {"label": "Max Angular Velocity", "value": "130°/s"},
      {"label": "Max Horizontal Speed", "value": "20m/s"},
      {"label": "Max Tilt Angle", "value": "30°"},
      {"label": "Max Ascent Speed", "value": "6m/s"},
      {"label": "Folded Dimensions", "value": "222×97×91mm"},
      {"label": "Unfolded Dimensions", "value": "348×284×108mm"},
      {"label": "GNSS", "value": "GPS+Galileo+BeiDou+GLONASS /Pure BeiDou"},
      {"label": "GCS Languages", "value": "Chinese, English, Russian"},
      {"label": "Transmission Distance", "value": "1.5–3 km (Strong Interference), 3–6 km (Medium Interference), 6–10 km (Weak Interference)"}
    ],
    images: [
      { url: "/images/3taf.jpg", title: "Scenario" }
    ]
  },
  "spear3t": {
    name: "Likiu Spear 3T",
    category: "Tactical Reconnaissance",
    description: "Likiu Spear 3T is a miniature reconnaissance and strike integrated drone engineered for efficient execution of complex missions. It ingeniously integrates a flagship triple-spectrum vision perception system and robust AI computing power into a compact airframe weighing merely about 930 grams.",
    features: [
      "All-Weather Triple-Spectrum Perception",
      "Tri-Light Pan-Tilt",
      "AI Object Recognition and Localization",
      "HD Daytime Reconnaissance",
      "Covert Night Search",
      "High-Dynamic Target Locking"
    ],
    specifications: [
      {"label": "Bare Weight", "value": "approx. 930 g"},
      {"label": "Maximum Takeoff Weight", "value": "approx. 1330 g"},
      {"label": "Maximum Flight Time (windless environment)", "value": "50 min"},
      {"label": "Maximum Hovering Time (windless environment)", "value": "43 min"},
      {"label": "Maximum rotation angular velocity", "value": "130°/s"},
      {"label": "Maximum horizontal flight speed", "value": "20m/s"},
      {"label": "Maximum tilt angle", "value": "30°"},
      {"label": "Maximum ascent speed", "value": "6m/s"},
      {"label": "Folded dimensions", "value": "222×97×91mm"},
      {"label": "Unfolded dimensions", "value": "348×284×108mm"},
      {"label": "Satellite navigation system", "value": "GPS+Galileo+BeiDou+GLONASS /Pure BeiDou"},
      {"label": "Ground station language", "value": "Chinese, English, Russian"},
      {"label": "Video transmission distance", "value": "1.5–3 km (strong interference), 3–6 km (medium interference), 6–10 km (weak interference)"},
      {"label": "Visible Light Camera Sensor", "value": "1/2-inch SONY CMOS, 48MP"},
      {"label": "Thermal Imaging Resolution", "value": "640X512"},
      {"label": "Laser Rangefinder Measuring Range", "value": "5 - 1500m"},
      {"label": "Laser Rangefinder Accuracy", "value": "±1m"}
    ],
    images: [
      { url: "/images/3pro.jpg", title: "Scenario" }
    ]
  },
  "s50": {
    name: "Likiu S-50",
    category: "Agricultural Drone",
    description: "The Likiu S-50 is a heavy-duty agricultural drone with a 50-kilogram class. It features an 18S (68.4V) high-voltage power system, achieving a maximum takeoff weight of 89 kg, delivering robust power and high redundancy. Features centrifugal nozzles for finer and more uniform atomization.",
    features: [
      "Heavy-duty agricultural design",
      "18S high-voltage power system",
      "Centrifugal nozzles for fine atomization",
      "Max flow rate 10L/min",
      "Spray width 6-9m",
      "Operational efficiency 1-3 hectares/hr"
    ],
    specifications: [
      {"label": "Bare weight", "value": "39KG"},
      {"label": "Rated Takeoff Weight", "value": "50KG"},
      {"label": "Max Takeoff Weight", "value": "89KG"},
      {"label": "Operating Voltage", "value": "68.4V (18S)"},
      {"label": "Flight Time", "value": "8-40Min"},
      {"label": "Spraying System", "value": "Centrifugal Nozzles"},
      {"label": "Max Flow Rate", "value": "10L/Min"},
      {"label": "Spray Width", "value": "6-9m"},
      {"label": "Operational Efficiency", "value": "1–3 hectares/hr"}
    ],
    images: [
      { url: "/images/s50f.jpg", title: "Scenario" }
    ]
  },
  "s30": {
    name: "Likiu S-30",
    category: "Agricultural Drone",
    description: "The Likiu S-30 is specifically designed for large-scale farmland operations. Features a 30L liquid tank and a 50L solid hopper, supporting both spraying and spreading functions. Spray width extended to 6-9 meters with operational efficiency of 10-14 hectares per hour.",
    features: [
      "30L liquid tank + 50L solid hopper",
      "Spraying and spreading functions",
      "Spray width 6-9 meters",
      "Operational efficiency 10-14 hectares/hr",
      "7200W fast-charging system",
      "Suitable for large-scale operations"
    ],
    specifications: [
      {"label": "Bare weight", "value": "32.7KG"},
      {"label": "Rated Takeoff Weight", "value": "62.7KG"},
      {"label": "Charging Time", "value": "14S 30000mAh"},
      {"label": "Charger Output Power", "value": "7200W"},
      {"label": "Hovering Time", "value": "8-25Min"},
      {"label": "Tank Capacity", "value": "30L"},
      {"label": "Hopper Capacity", "value": "50L"},
      {"label": "Max Flow Rate", "value": "7 L/Min"},
      {"label": "Max Flight Speed", "value": "3-10 m/s"},
      {"label": "Spray Width", "value": "6-9m"},
      {"label": "Operational Efficiency", "value": "10–14 hectares/hr"}
    ],
    images: [
      { url: "/images/s30f.jpg", title: "Scenario" }
    ]
  },
  "s20": {
    name: "Likiu S-20",
    category: "Agricultural Drone",
    description: "The Likiu S-20 is a 20-kilogram agricultural plant protection drone. Equipped with a 20L chemical tank, capable of a maximum spraying flow rate of 7L/min, achieving an effective spray width of 4-6 meters. Ideal for daily plant protection tasks in small to medium-sized farmlands.",
    features: [
      "20L chemical tank",
      "Max spraying flow rate 7L/min",
      "Spray width 4-6 meters",
      "Operational efficiency 4-9 hectares/hr",
      "Suitable for complex terrain",
      "Practical for daily farm management"
    ],
    specifications: [
      {"label": "Bare weight", "value": "22.7KG"},
      {"label": "Rated Takeoff Weight", "value": "44KG"},
      {"label": "Charging Time", "value": "14S 20000mAh"},
      {"label": "Charger Output Power", "value": "3000W"},
      {"label": "Hovering Time", "value": "10-25Min"},
      {"label": "Tank Capacity", "value": "20L"},
      {"label": "Max Flow Rate", "value": "7 L/Min"},
      {"label": "Max Flight Speed", "value": "11m/s"},
      {"label": "Spray Width", "value": "4-6m"},
      {"label": "Operational Efficiency", "value": "4–9 hectares/hr"}
    ],
    images: [
      { url: "/images/s20f.jpg", title: "Scenario" }
    ]
  },
  "c100": {
    name: "Likiu C100",
    category: "Industrial Multi-mission Drone",
    description: "The Likiu C100 is the heavy-duty flagship of the cleaning series, with a maximum takeoff weight of up to 110kg. Features a large wheelbase (1890mm) six-axis design, providing excellent flight stability and wind resistance. Maintains 40-65 minutes endurance while delivering 250Bar cleaning pressure.",
    features: [
      "Max takeoff weight 110kg",
      "Six-axis design with 1890mm wheelbase",
      "Excellent flight stability",
      "High-pressure cleaning 250Bar",
      "Industrial-grade cleaning capability",
      "Suitable for complex environments"
    ],
    specifications: [
      {"label": "Bare weight", "value": "50kg"},
      {"label": "Max Takeoff Weight", "value": "110kg"},
      {"label": "Wheelbase Distance", "value": "1890mm"},
      {"label": "Endurance", "value": "40-65min"},
      {"label": "Flight Range", "value": "1000m"},
      {"label": "Recommended Operating Altitude", "value": "0-150m"},
      {"label": "Max Flight Speed", "value": "11m/s"},
      {"label": "Operating Temperature", "value": "-20-40°C"},
      {"label": "Operating Humidity", "value": "0-90%"},
      {"label": "Water Pressure", "value": "0-250Bar"},
      {"label": "Cleaning Pump Pressure", "value": "0-3625PSI"},
      {"label": "Flow Rate", "value": "15-20L/min"},
      {"label": "Wind Resistance", "value": "10m/s"}
    ],
    images: [
      { url: "/images/c100f.jpg", title: "Scenario" }
    ]
  },
  "c50": {
    name: "Likiu C-50",
    category: "Industrial Multi-mission Drone",
    description: "The Likiu C-50 has been upgraded for higher-intensity operational scenarios. Maximum takeoff weight increased to 97.4kg with dual 18S battery system, significantly extending endurance to 40-65 minutes. Recommended operating altitude raised to 150 meters.",
    features: [
      "Max takeoff weight 97.4kg",
      "Dual 18S battery system",
      "Endurance 40-65 minutes",
      "Operating altitude 0-150m",
      "250Bar high-pressure cleaning",
      "Continuous cleaning capability"
    ],
    specifications: [
      {"label": "Bare weight", "value": "47.7kg"},
      {"label": "Max Takeoff Weight", "value": "97.4kg"},
      {"label": "Battery", "value": "18S 45000mahX2"},
      {"label": "Endurance", "value": "40-65min"},
      {"label": "Flight Range", "value": "1000m"},
      {"label": "Recommended Operating Altitude", "value": "0-150m"},
      {"label": "Max Flight Speed", "value": "11m/s"},
      {"label": "Operating Temperature", "value": "-20-40°C"},
      {"label": "Operating Humidity", "value": "0-90%"},
      {"label": "Water Pressure", "value": "0-250Bar"},
      {"label": "Cleaning Pump Pressure", "value": "0-3625PSI"},
      {"label": "Flow Rate", "value": "15-20L/min"},
      {"label": "Wind Resistance", "value": "10m/s"}
    ],
    images: [
      { url: "/images/c50f.jpg", title: "Scenario" }
    ]
  },
  "c30": {
    name: "Likiu C-30",
    category: "Industrial Multi-mission Drone",
    description: "The Likiu C-30 is a hexacopter cleaning drone with a maximum takeoff weight of 56.7 kg. Integrates an adjustable high-pressure cleaning system ranging from 0 to 250 Bar with a flow rate of 15-20 L/min. Suitable for routine cleaning of photovoltaic power stations or medium-rise building facades.",
    features: [
      "Hexacopter design",
      "Adjustable pressure 0-250Bar",
      "Flow rate 15-20 L/min",
      "Operating altitude up to 100m",
      "Endurance 30-40 minutes",
      "Suitable for solar panels and facades"
    ],
    specifications: [
      {"label": "Bare weight", "value": "26.7kg"},
      {"label": "Max Takeoff Weight", "value": "56.7kg"},
      {"label": "Battery", "value": "14S 45000mah"},
      {"label": "Endurance", "value": "30-40min"},
      {"label": "Flight Range", "value": "1000m"},
      {"label": "Recommended Operating Altitude", "value": "0-100m"},
      {"label": "Max Flight Speed", "value": "11m/s"},
      {"label": "Operating Temperature", "value": "-20-40°C"},
      {"label": "Operating Humidity", "value": "0-90%"},
      {"label": "Water Pressure", "value": "0-250Bar"},
      {"label": "Cleaning Pump Pressure", "value": "0-3625PSI"},
      {"label": "Flow Rate", "value": "15-20L/min"},
      {"label": "Wind Resistance", "value": "10m/s"}
    ],
    images: [
      { url: "/images/c30f.jpg", title: "Scenario" }
    ]
  },
  "c300": {
    name: "Likiu-C300",
    category: "Cargo Transport Drone",
    description: "The Likiu-C300 is a four-axis, eight-propeller heavy-duty transport drone. Features specialized cargo bays and airdrop devices. Maximum payload of 170kg and maximum takeoff weight of 300kg. Supports intelligent path planning and automatic obstacle avoidance.",
    features: [
      "Four-axis eight-propeller design",
      "Max payload 170kg",
      "Max takeoff weight 300kg",
      "GPS + Dual-band RTK positioning",
      "Positioning accuracy 0.5-20cm",
      "Intelligent path planning"
    ],
    specifications: [
      {"label": "Max Payload", "value": "170kg"},
      {"label": "Max Takeoff Weight", "value": "300kg"},
      {"label": "Positioning System", "value": "GPS + Dual-band RTK"},
      {"label": "Positioning Accuracy", "value": "0.5-20cm"},
      {"label": "Bare weight", "value": "90kg"},
      {"label": "Battery Weight", "value": "4 units * 44kg"},
      {"label": "Flight Range", "value": "5km"},
      {"label": "Flight Altitude", "value": "1km"},
      {"label": "Battery Capacity", "value": "18S 44000mah *4"},
      {"label": "Endurance (at 150kg Load)", "value": "15min"},
      {"label": "Charger Power", "value": "3000W"},
      {"label": "Charging Time", "value": "40 min"},
      {"label": "Operating Voltage", "value": "66V"}
    ],
    images: [
      { url: "/images/c300f.jpg", title: "Scenario" }
    ]
  },
  "d900": {
    name: "D-Series Quadcopter (900mm)",
    category: "Reconnaissance Drone",
    description: "D-series quadcopter small unmanned aerial vehicle. Features advantages such as compact size, low cost, simple structure, ease of use, low operational environment requirements, and strong survivability. Can also be used as an unmanned target drone.",
    features: [
      "Compact size design",
      "Low cost operation",
      "Simple structure",
      "Easy to use",
      "Low environment requirements",
      "Strong survivability"
    ],
    specifications: [
      {"label": "Bare weight", "value": "6kg (without battery)"},
      {"label": "Material", "value": "Aviation aluminum alloy, carbon fiber"},
      {"label": "Wheelbase", "value": "900mm"},
      {"label": "Max Payload", "value": "5KG"},
      {"label": "Max Ascent Speed", "value": "5m/s"},
      {"label": "Max Descent Speed", "value": "5m/s"},
      {"label": "Max Horizontal Flight Speed", "value": "20m/s"},
      {"label": "Max Wind Resistance", "value": "12m/s"},
      {"label": "No-load Flight Time", "value": "60min"},
      {"label": "Satellite Positioning Module", "value": "GPS/GLONASS/BDS/Galileo"},
      {"label": "Control Distance", "value": "10km (open area, no obstruction, no electromagnetic interference)"},
      {"label": "Camera", "value": "4K HD / 10x zoom"},
      {"label": "Operating Temperature", "value": "-20°C-60°C"}
    ],
    images: [
      { url: "/images/d900f.jpg", title: "Scenario" }
    ]
  },
  "d1200": {
    name: "D-Series Large Quadcopter (1200mm)",
    category: "Reconnaissance Drone",
    description: "D-series large quadcopter drone with large size for enhanced capabilities. Features ease of use, low operational environment requirements, low cost, simple structure, and strong survivability. Suitable for various mounting equipment.",
    features: [
      "Large size design",
      "Enhanced payload capacity",
      "Low operational costs",
      "Simple structure",
      "Strong survivability",
      "Multiple mounting options"
    ],
    specifications: [
      {"label": "Bare weight", "value": "10kg (without battery)"},
      {"label": "Material", "value": "Aviation aluminum alloy, carbon fiber"},
      {"label": "Wheelbase", "value": "900mm"},
      {"label": "Max Payload", "value": "10KG"},
      {"label": "Max Ascent Speed", "value": "5m/s"},
      {"label": "Max Descent Speed", "value": "5m/s"},
      {"label": "Max Horizontal Flight Speed", "value": "20m/s"},
      {"label": "Max Wind Resistance", "value": "Level 7"},
      {"label": "No-load Flight Time", "value": "60min"},
      {"label": "Satellite Positioning Module", "value": "GPS/GLONASS/BDS/Galileo"},
      {"label": "Control Distance", "value": "10km (open area, no obstruction, no electromagnetic interference)"},
      {"label": "Camera", "value": "4K HD / 10x zoom"},
      {"label": "Operating Temperature", "value": "-20°C-50°C"},
      {"label": "Waterproof Rating", "value": "Moderate rain resistant"},
      {"label": "Battery Capacity", "value": "30000mah"}
    ],
    images: [
      { url: "/images/d1200f.jpg", title: "Scenario" }
    ]
  },
  "d1800": {
    name: "D-Series Standard Quadcopter (1800mm)",
    category: "Reconnaissance Drone",
    description: "D-series large quadcopter drone with excellent performance and stability. Can be used as an unmanned target drone for various mounting equipment. Features multiple field applications including fire rescue, military reconnaissance, and police security.",
    features: [
      "Standard quadcopter design",
      "Excellent stability",
      "Target drone capability",
      "Multi-application support",
      "4K HD camera with 10x zoom",
      "All-weather operation"
    ],
    specifications: [
      {"label": "Bare weight", "value": "14kg (without battery)"},
      {"label": "Material", "value": "Aviation aluminum alloy, carbon fiber"},
      {"label": "Wheelbase", "value": "900mm"},
      {"label": "Max Payload", "value": "14KG"},
      {"label": "Max Ascent Speed", "value": "5m/s"},
      {"label": "Max Descent Speed", "value": "5m/s"},
      {"label": "Max Horizontal Flight Speed", "value": "20m/s"},
      {"label": "Max Wind Resistance", "value": "Level 7"},
      {"label": "No-load Flight Time", "value": "60min"},
      {"label": "Satellite Positioning Module", "value": "GPS/GLONASS/BDS/Galileo"},
      {"label": "Control Distance", "value": "10km (open area, no obstruction, no electromagnetic interference)"},
      {"label": "Camera", "value": "4K HD / 10x zoom"},
      {"label": "Operating Temperature", "value": "-20°C-50°C"},
      {"label": "Waterproof Rating", "value": "Moderate rain resistant"},
      {"label": "Battery Capacity", "value": "40000mah"}
    ],
    images: [
      { url: "/images/d1800f.jpg", title: "Scenario" }
    ]
  },
  "d2000": {
    name: "D-Series Standard Quadcopter (2000mm)",
    category: "Reconnaissance Drone",
    description: "D-series large quadcopter drone with excellent performance and stability. Can be used as an unmanned target drone for various mounting equipment. Features multiple field applications including fire rescue, military reconnaissance, and police security.",
    features: [
      "Standard quadcopter design",
      "Moderate size for versatility",
      "Stronger power output",
      "Higher stability",
      "Easy to operate",
      "Multiple application support"
    ],
    specifications: [
      {"label": "Bare weight", "value": "35kg (without battery)"},
      {"label": "Material", "value": "Aviation aluminum alloy, carbon fiber"},
      {"label": "Wheelbase", "value": "1800mm"},
      {"label": "Max Payload", "value": "30KG"},
      {"label": "Max Ascent Speed", "value": "5m/s"},
      {"label": "Max Descent Speed", "value": "5m/s"},
      {"label": "Max Horizontal Flight Speed", "value": "20m/s"},
      {"label": "Max Wind Resistance", "value": "Level 7"},
      {"label": "No-load Flight Time", "value": "60min"},
      {"label": "Satellite Positioning Module", "value": "GPS/GLONASS/BDS/Galileo"},
      {"label": "Control Distance", "value": "10km (open area, no obstruction, no electromagnetic interference)"},
      {"label": "Camera", "value": "4K HD / 10x zoom"},
      {"label": "Operating Temperature", "value": "-20°C-50°C"},
      {"label": "Waterproof Rating", "value": "Moderate rain resistant"},
      {"label": "Battery Capacity", "value": "40000mah"}
    ],
    images: [
      { url: "/images/d2000f.jpg", title: "Scenario" }
    ]
  },
  "f1200": {
    name: "F-Series Six-Rotor (1200mm)",
    category: "Reconnaissance Drone",
    description: "F-series six-rotor medium-sized drone with larger size and stronger power. Features advantages such as higher stability and stronger survivability. Suitable for various mounting equipment and multiple fields including fire rescue, military reconnaissance, and police security.",
    features: [
      "Large six-rotor design",
      "Enhanced power capacity",
      "Superior stability",
      "Rugged survivability",
      "Extended payload capability",
      "Heavy-duty applications"
    ],
    specifications: [
      {"label": "Dimensions", "value": "1380x1190x620mm"},
      {"label": "Folded Size", "value": "500x440x620mm"},
      {"label": "Wheelbase", "value": "1300mm"},
      {"label": "Material", "value": "Aviation aluminum alloy, carbon fiber"},
      {"label": "Airframe Weight", "value": "8KG"},
      {"label": "Max Takeoff Weight", "value": "24kg (near sea level)"},
      {"label": "Max Payload", "value": "10KG"},
      {"label": "Max Ascent Speed", "value": "5m/s"},
      {"label": "Max Descent Speed", "value": "5m/s"},
      {"label": "Max Wind Resistance", "value": "Level 7"},
      {"label": "Max Flight Altitude", "value": "5000m"},
      {"label": "Max Flight Speed", "value": "20m/s (no wind)"},
      {"label": "Max Flight Time", "value": "30-70min"},
      {"label": "Max Control Distance", "value": "10km (open area, no obstruction, no electromagnetic interference)"},
      {"label": "Max Climbing Altitude", "value": "1000m"},
      {"label": "Hovering Accuracy", "value": "Vertical ±0.5m, Horizontal ±1m (with normal GPS)"},
      {"label": "Satellite Positioning Module", "value": "GPS/GLONASS/BDS/Galileo"},
      {"label": "Camera", "value": "4K HD with 10x/30x zoom"},
      {"label": "Propulsion System", "value": "Integrated FOC power system"},
      {"label": "Operating Temperature", "value": "-30°C-60°C"},
      {"label": "Waterproof Rating", "value": "Moderate rain resistant, body washable"},
      {"label": "Battery Capacity", "value": "30000mah"}
    ],
    images: [
      { url: "/images/f1200f.jpg", title: "Scenario" }
    ]
  },
  "f1800": {
    name: "F-Series Six-Rotor (1800mm)",
    category: "Reconnaissance Drone",
    description: "F-series six-rotor medium-sized drone with larger size and stronger power. Features advantages such as higher stability and stronger survivability. Suitable for various mounting equipment and multiple fields including fire rescue, military reconnaissance, and police security.",
    features: [
      "Large six-rotor design",
      "Enhanced power capacity",
      "Superior stability",
      "Rugged survivability",
      "Extended payload capability",
      "Heavy-duty applications"
    ],
    specifications: [
      {"label": "Dimensions", "value": "1720x1500x740mm"},
      {"label": "Folded Size", "value": "660x580x740mm"},
      {"label": "Wheelbase", "value": "1620mm"},
      {"label": "Material", "value": "Aviation aluminum alloy, carbon fiber"},
      {"label": "Airframe Weight", "value": "15KG"},
      {"label": "Max Takeoff Weight", "value": "46kg (near sea level)"},
      {"label": "Max Payload", "value": "20kg"},
      {"label": "Max Ascent Speed", "value": "5m/s"},
      {"label": "Max Descent Speed", "value": "5m/s"},
      {"label": "Max Wind Resistance", "value": "level 7"},
      {"label": "Max Flight Altitude", "value": "5000m"},
      {"label": "Max Flight Speed", "value": "20m/s (no wind)"},
      {"label": "No-load Flight Time", "value": "70min"},
      {"label": "Max Control Distance", "value": "10km (open area, No electromagnetic interference)"},
      {"label": "Max Climbing Altitude", "value": "1000m"},
      {"label": "Hovering Accuracy", "value": "Vertical ±0.5m, Horizontal ±1m (with normal GPS)"},
      {"label": "Satellite Positioning Module", "value": "GPS/GLONASS/BDS/Galileo"},
      {"label": "Camera", "value": "4K HD with 10x/30x zoom"},
      {"label": "Propulsion System", "value": "Integrated FOC power system"},
      {"label": "Operating Temperature", "value": "-30°C-60°C"},
      {"label": "Waterproof Rating", "value": "Moderate rain resistant, body washable"},
      {"label": "Battery Capacity", "value": "40000mah"}
    ],
    images: [
      { url: "/images/f1800f.jpg", title: "Scenario" }
    ]
  }
};

interface ProductData {
  name: string;
  category: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  images: { url: string; title: string }[];
}

const NAV_ITEMS = [
  { name: "Specifications" }
];

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const [activeNav, setActiveNav] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const productKey = params.id?.toLowerCase() || "350b";
  const product = PRODUCTS_DATA[productKey] || PRODUCTS_DATA["350b"];

  return (
    <div className="bg-background min-h-screen font-sans pt-16">
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-3 lg:px-8">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Link href="/products" className="hover:text-accent transition-colors">Products</Link>
            <span>&gt;</span>
            <span className="text-foreground/80">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="flex gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative bg-card rounded-lg overflow-hidden">
              <img
                src={product.images[activeImage].url}
                alt={product.images[activeImage].title}
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded text-foreground text-xs">
                {product.images[activeImage].title}
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              {product.images.map((img: { url: string; title: string }, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-16 rounded overflow-hidden border-2 transition-colors ${
                    activeImage === index ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <span className="text-accent text-xs font-mono uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="mt-2 text-3xl lg:text-4xl font-bold text-foreground">
                {product.name}
              </h1>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="text-foreground font-semibold mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 text-foreground/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Get Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-border text-foreground/80 px-6 py-3 rounded font-medium text-sm hover:border-accent hover:text-accent transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex border-b border-border mb-8">
            {NAV_ITEMS.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveNav(index)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeNav === index
                    ? "text-accent border-accent"
                    : "text-muted-foreground border-transparent hover:text-foreground/80"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="bg-card rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {product.specifications.map((spec: { label: string; value: string }, index: number) => (
                  <tr
                    key={index}
                    className={`border-b border-border last:border-b-0 ${
                      index % 2 === 0 ? "bg-surface/50" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-muted-foreground text-sm">{spec.label}</td>
                    <td className="px-6 py-4 text-foreground font-medium text-sm">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Interested in the {product.name}?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact our sales team to learn more about specifications, pricing and availability.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:opacity-90 transition-opacity"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
