export const PRODUCTS = [
  {
    id: "Inspection",
    name: "Inspection Drones",
    series: "Long-Endurance Series",
    image: "/images/350b.jpg",
    summary:
      "Combines vertical take-off with fixed-wing cruise for flexible deployment and extended range — designed specifically for inspection in complex environments.",
    specs: [
      { label: "Max Endurance", value: "60 min" },
      { label: "Cruise Radius", value: "10 km" },
      { label: "Payload", value: "7.8 kg" },
      { label: "Wind Resistance", value: "Level 6" },
    ],
  },
  {
    id: "Agriculture",
    name: "Agriculture Drones",
    series: "Heavy-Lift Series",
    image: "/images/s50.jpg",
    summary:
      "High-payload architecture meets extended endurance and raw power — purpose-built to cover more acres, spray more crops, and work longer hours without skipping a beat.",
    specs: [
      { label: "Max Payload", value: "89 kg" },
      { label: "Endurance", value: "60 min" },
      { label: "Spraying System", value: "Centrifugal Nozzles" },
      { label: "Ingress Rating", value: "IP55" },
    ],
  },
  {
    id: "Industrial Multi-mission",
    name: "Industrial Multi-mission Drones",
    series: "Unattended Series",
    image: "/images/c300.jpg",
    summary:
      "Engineered with high-load capacity, multi-layered redundancy, and uncompromising stability — powered by a propulsion system built for the toughest industrial missions.",
    specs: [
      { label: "Endurance", value: "60 min" },
      { label: "Operating Temp", value: "-20–55°C" },
      { label: "Deployment", value: "Fixed / Mobile" },
      { label: "Wind Resistance", value: "10m/s" },
    ],
  },
]

export const SOLUTIONS = [
  {
    id: "energy",
    title: "Energy & Power Inspection",
    desc: "Recurring autonomous inspection of transmission lines, wind turbines and solar arrays, with AI defect detection replacing high-risk manual climbing.",
    points: ["3D corridor modeling", "Infrared thermography", "Automatic defect grading & alerts"],
  },
  {
    id: "survey",
    title: "Surveying & Mapping",
    desc: "Centimeter-level aerial survey and orthophoto production, rapidly building a wide-area digital twin and shortening field cycles.",
    points: ["RTK survey without GCPs", "Real-scene 3D reconstruction", "DOM / DSM deliverables"],
  },
  {
    id: "security",
    title: "Public Safety & Emergency",
    desc: "Pre-positioned docks enable one-tap launch on incident, delivering a real-time aerial view and on-scene situational awareness.",
    points: ["Second-level response", "Day/night dual-sensor detection", "Live command link relay"],
  },
  {
    id: "agri",
    title: "Smart Agriculture & Forestry",
    desc: "Multispectral remote sensing monitors crop health and forestry resources, supporting precise management decisions through a data platform.",
    points: ["Multispectral health analysis", "Forest resource survey", "Disease zone early warning"],
  },
]

export const CAPABILITIES = [
  {
    title: "Flight Platforms",
    desc: "In-house flight control and redundant propulsion across VTOL, multirotor and other airframes.",
  },
  {
    title: "Autonomous Sensing",
    desc: "Multi-sensor fusion positioning and omnidirectional obstacle avoidance for stable flight in weak-signal environments.",
  },
  {
    title: "Fleet Scheduling",
    desc: "Docks and cloud scheduling work together to support swarm formations and unattended recurring missions.",
  },
  {
    title: "Data Platform",
    desc: "An integrated pipeline from capture to AI analysis, delivering decision-ready industry results.",
  },
]

export const METRICS = [
  { value: "240", unit: "min", label: "Longest single-flight endurance" },
  { value: "32", unit: "states", label: "Project delivery coverage" },
  { value: "1.2M", unit: "+", label: "Cumulative safe flights" },
  { value: "99.6", unit: "%", label: "Mission success rate" },
]
