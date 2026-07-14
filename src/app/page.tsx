'use client'

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import Reveal from "@/components/Reveal"
import SectionHeading from "@/components/SectionHeading"
import StructuredData from "@/components/StructuredData"
import { CAPABILITIES, METRICS, SOLUTIONS, PRODUCTS } from "@/lib/content"
import { createOrganizationSchema, createWebSiteSchema } from "@/lib/schema"

export default function HomePage() {
  const capabilitiesRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const slidesPerPage = 2
  const totalPages = Math.ceil(CAPABILITIES.length / slidesPerPage)

  const goToSlide = (pageIndex: number) => {
    const container = capabilitiesRef.current
    if (!container) return
    const scrollAmount = container.clientWidth
    container.scrollTo({
      left: pageIndex * scrollAmount,
      behavior: "smooth",
    })
    setActiveSlide(pageIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (activeSlide + 1) % totalPages
      goToSlide(next)
    }, 4000)
    return () => clearInterval(interval)
  }, [activeSlide, totalPages])

  const handleScroll = () => {
    const container = capabilitiesRef.current
    if (!container) return
    const pageWidth = container.clientWidth
    const index = Math.round(container.scrollLeft / pageWidth)
    setActiveSlide(Math.min(index, totalPages - 1))
  }

  return (
    <>
      <StructuredData data={createOrganizationSchema()} />
      <StructuredData data={createWebSiteSchema()} />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-[0.35]" aria-hidden="true" />
        <div
          className="absolute -top-40 right-0 h-[480px] w-[480px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, color-mix(in oklch, var(--color-accent) 22%, transparent), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-28 lg:pt-40">
          <header>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs tracking-wide text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Industrial-grade aerial systems · Full-stack in-house R&D
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Turning every flight into
              <br />
              trusted <span className="text-accent">aerial productivity</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground"
            >
              AEROVA Unmanned Systems specializes in flight platforms, autonomous sensing and data
              infrastructure for industrial drones, delivering end-to-end aerial operations — from
              capture to decision — for energy, surveying, public safety and more.
            </motion.p>
            <motion.nav
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Explore products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Book a demo
              </Link>
            </motion.nav>
          </header>

          <motion.figure
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative overflow-hidden rounded-md border border-border bg-surface/40"
          >
            <img
              src="/images/homepage-drone.jpg"
              alt="AEROVA industrial drone hovering"
              className="aspect-[2287/1280] w-full object-cover animate-float"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/10 to-transparent animate-scan" aria-hidden="true" />
            <aside className="absolute -bottom-4 -left-4 hidden rounded-md border border-border bg-background/90 px-4 py-3 backdrop-blur sm:block">
              <p className="font-mono text-xs text-muted-foreground">Live telemetry</p>
              <p className="font-mono text-sm text-accent">ALT 142m · SPD 16m/s · GPS 21</p>
            </aside>
          </motion.figure>
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <header>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              Our Advantages
            </p>
          </header>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
            {METRICS.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08} className="bg-surface/40 px-6 py-10 text-center">
                <dt className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {m.value}
                  <span className="ml-1 text-base font-normal text-accent">{m.unit}</span>
                </dt>
                <dd className="mt-2 text-sm text-muted-foreground">{m.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <header>
          <Reveal>
            <SectionHeading
              eyebrow="Core Capabilities"
              title="Full-stack engineering for a reliable flight foundation"
              description="From flight-control algorithms to a closed-loop data pipeline, four capability modules work together to keep flight stable, controllable and deliverable in complex environments."
            />
          </Reveal>
        </header>
        <div
          ref={capabilitiesRef}
          onScroll={handleScroll}
          className="mt-14 flex snap-x snap-mandatory gap-0 overflow-x-hidden"
        >
          <section className="flex w-full shrink-0 snap-center gap-6">
            {CAPABILITIES.slice(0, 2).map((c, i) => (
              <article
                key={c.title}
                data-card
                className="group relative h-[520px] w-1/2 shrink-0 overflow-hidden rounded-md border border-border bg-surface"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-background/80 p-7 backdrop-blur-sm">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <h3 className="mt-4 text-lg font-medium text-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </article>
            ))}
          </section>
          <section className="flex w-full shrink-0 snap-center gap-6">
            {CAPABILITIES.slice(2, 4).map((c, i) => (
              <article
                key={c.title}
                data-card
                className="group relative h-[520px] w-1/2 shrink-0 overflow-hidden rounded-md border border-border bg-surface"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-background/80 p-7 backdrop-blur-sm">
                  <span className="font-mono text-xs text-accent">0{i + 3}</span>
                  <h3 className="mt-4 text-lg font-medium text-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </article>
            ))}
          </section>
        </div>
        <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Carousel navigation">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === activeSlide ? "w-8 bg-accent" : "w-2 bg-border hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </nav>
      </section>

      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <header>
            <Reveal>
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                <SectionHeading
                  eyebrow="Products"
                  title="Drones matrix for industrial applications"
                />
                <Link href="/products" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
                  View all products <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </header>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                <article>
                  <Link
                    href="/products"
                    className="group block overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-accent/60"
                  >
                    <figure className="aspect-[4/3] overflow-hidden bg-surface">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </figure>
                    <div className="p-6">
                      <p className="font-mono text-xs text-accent">{p.series}</p>
                      <h3 className="mt-2 text-lg font-medium text-foreground">{p.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <header>
          <Reveal>
            <SectionHeading
              eyebrow="Solutions"
              title="Aerial digitalization tailored to your industry"
            />
          </Reveal>
        </header>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}>
              <article>
                <Link
                  href="/solutions"
                  className="group relative flex flex-col overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-accent/60"
                >
                  <figure className="aspect-[4/3] overflow-hidden bg-surface">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </figure>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-base font-medium text-foreground">{s.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="relative mx-auto max-w-7xl overflow-hidden px-5 py-20 lg:px-8">
          <div className="absolute inset-0 tech-grid opacity-20" aria-hidden="true" />
          <aside className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s tailor an aerial solution for your operations
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Tell us your industry and requirements, and our solutions team will support airframe
              selection, data-link design and flight-test validation.
            </p>
            <nav>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Contact us <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </aside>
        </div>
      </section>
    </>
  )
}
