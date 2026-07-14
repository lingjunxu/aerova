'use client'

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Target, Layers, ShieldCheck, Cpu, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import PageHeader from "@/components/PageHeader"
import Reveal from "@/components/Reveal"
import SectionHeading from "@/components/SectionHeading"
import { METRICS } from "@/lib/content"
import StructuredData from "@/components/StructuredData"
import { createAboutPageSchema } from "@/lib/schema"

const VALUES = [
  { icon: Target, title: "Pragmatic Engineering", desc: "Driven by deliverable outcomes rather than spec sheets — technology that genuinely serves the field." },
  { icon: Layers, title: "Full-Stack R&D", desc: "Flight control, sensing, docks and the data platform are all built in-house for a consistent, controllable pipeline." },
  { icon: ShieldCheck, title: "Safety First", desc: "Redundant design and multi-layer fail-safes run through our R&D to keep flight risk to a minimum." },
  { icon: Cpu, title: "Constant Evolution", desc: "Algorithms and platforms iterate quickly, so device capabilities grow with evolving operational needs." },
]

const TIMELINE = [
  { year: "2017", text: "Company founded; first multirotor flight-control prototype validated." },
  { year: "2019", text: "Launched the VTOL long-endurance platform and entered power inspection." },
  { year: "2021", text: "Autonomous docks and cloud scheduling deployed at scale." },
  { year: "2023", text: "Industry data platform launched, connecting capture to decision end to end." },
  { year: "2025", text: "Surpassed one million safe flights, serving customers across multiple states." },
]

const TESTIMONIALS = [
  {
    quote: "We have worked with this company for three years, and what impresses me most is their 'transparency.' In the past, I always worried about parts being swapped, but they proactively provide flight controller logs and battery internal resistance test reports for every batch. This willingness to show their cards to the client gives me absolute peace of mind.",
    author: "CEO, a European agricultural solutions provider",
  },
  {
    quote: "For our security projects, late delivery is our biggest fear. Not only did they deliver a full week early, but they even pre-set interference-avoidance parameters for our specific region before shipping. This level of professionalism goes far beyond a simple buyer-seller relationship – it's a true technical partnership.",
    author: "Procurement Director, a well-known domestic system integrator",
  },
  {
    quote: "As a startup brand, we don't need aloof giants – we need battle buddies willing to refine details with us. The portable drone dock solution they helped us optimize became our bestseller this year. 'Reliable' is the simplest and most accurate word we have for them.",
    author: "Co-founder, a Southeast Asian drone brand",
  },
  {
    quote: "Efficiency is everything in our business. What used to take us three days of manual flight planning and data stitching now takes just half a day with their integrated system. The workflow from mission dispatch to final report generation is so streamlined that we've doubled our project throughput without adding a single pilot. That's the kind of efficiency that directly impacts our bottom line.",
    author: "Operations Director, a Middle Eastern surveying and mapping firm",
  },
  {
    quote: "We operate in some of the most challenging environments on the planet – high-altitude terrain, unpredictable weather, and dense urban canyons. We've had other suppliers promise solutions and then disappear when things got tough. This team, however, thrives on complexity. They didn't just sell us a drone; they spent weeks on-site with our engineers, iterating on flight parameters and payload configurations until the system performed flawlessly in our specific conditions. When we say 'mission-ready,' we mean it – because they made it possible.",
    author: "Head of Field Operations, a Latin American infrastructure inspection company",
  },
  {
    quote: "The hardware is impressive, but what truly sets them apart is how seamlessly it all works together. We used to juggle three separate software platforms – one for flight control, one for data processing, and another for fleet management. Their integrated ecosystem brought everything under one roof. Our pilots spend less time troubleshooting and more time flying. Our analysts get clean, structured data instead of raw chaos. This isn't just a product upgrade; it's a complete operational transformation.",
    author: "CTO, a North American public safety technology provider",
  },
]

export default function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <>
      <StructuredData data={createAboutPageSchema()} />
      <PageHeader
        eyebrow="About Us"
        title="Connecting the physical world to digital decisions through trusted flight"
        description="AEROVA Unmanned Systems is a technology company focused on industrial drones, helping customers complete aerial operations more safely and efficiently with autonomous flight platforms and data capabilities."
        cta={{ text: "Read more", href: "/about/detail" }}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <figure className="overflow-hidden rounded-md border border-border">
            <img src="/images/facility.png" alt="AEROVA R&D and manufacturing facility" className="w-full object-cover" />
          </figure>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading eyebrow="Who We Are" title="Turning complex flight into a single, simple mission" />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            We believe the value of a drone lies not just in flying, but in completing missions
            reliably and delivering data dependably. Around this goal, our team has built a complete
            technology stack spanning flight control, autonomous sensing, swarm cooperation and data analysis.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From frontline inspection to emergency response, we refine every operational workflow
            alongside our customers, so unmanned systems truly become part of production — a trusted
            form of aerial productivity.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Core Values" title="Four principles behind how we work" align="center" />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="rounded-md border border-border bg-card p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-accent">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-medium text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-border lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06} className="bg-card px-6 py-10 text-center">
              <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {m.value}
                <span className="ml-1 text-base font-normal text-accent">{m.unit}</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Milestones" title="Scaling trusted flight, step by step" />
          </Reveal>
          <div className="mt-14 border-l border-border">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                <p className="font-mono text-sm text-accent">{t.year}</p>
                <p className="mt-1 max-w-xl leading-relaxed text-foreground/85">{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Testimonials" title="What Our Industry Clients Say" align="center" />
          </Reveal>

          <div className="relative mt-14">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid grid-cols-1 gap-6 lg:grid-cols-2"
                >
                  <article className="flex flex-col rounded-md border border-border bg-card p-8">
                    <Quote className="h-8 w-8 text-accent" />
                    <blockquote className="mt-5 flex-1 leading-relaxed text-foreground/85">
                      {TESTIMONIALS[activeTestimonial].quote}
                    </blockquote>
                    <cite className="mt-6 text-sm font-medium text-accent not-italic">
                      – {TESTIMONIALS[activeTestimonial].author}
                    </cite>
                  </article>
                  <article className="hidden lg:flex flex-col rounded-md border border-border bg-card p-8">
                    <Quote className="h-8 w-8 text-accent" />
                    <blockquote className="mt-5 flex-1 leading-relaxed text-foreground/85">
                      {TESTIMONIALS[(activeTestimonial + 1) % TESTIMONIALS.length].quote}
                    </blockquote>
                    <cite className="mt-6 text-sm font-medium text-accent not-italic">
                      – {TESTIMONIALS[(activeTestimonial + 1) % TESTIMONIALS.length].author}
                    </cite>
                  </article>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="absolute -left-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent lg:-left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="absolute -right-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent lg:-right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  activeTestimonial === i
                    ? "w-8 bg-accent"
                    : "w-2 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-16 sm:flex-row sm:items-center lg:px-8">
          <p className="max-w-xl text-pretty text-lg text-foreground">Want to learn more about our technology and team?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
