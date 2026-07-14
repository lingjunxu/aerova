'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import Reveal from "@/components/Reveal"
import SectionHeading from "@/components/SectionHeading"

export default function AboutDetailPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 tech-grid opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-32 lg:px-8 lg:pb-20 lg:pt-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xs font-medium uppercase tracking-[0.25em] text-accent"
              >
                About Us
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
              >
                More Than a Distributor – Your Drone Business Industrial Backend Engine
              </motion.h1>
            </motion.div>
            <motion.figure
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden rounded-md border border-border"
            >
              <img
                src="/images/aboutusdetail.jpg"
                alt="AEROVA Industrial Backend"
                className="w-full h-auto object-cover"
              />
            </motion.figure>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Problem" title="The Core Problem We Solve" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            The biggest frustration in the drone industry is rarely a single technological bottleneck – it's the disconnect between front-end hardware, mission execution, and back-end management. You may own high-performance drones, yet remain constrained by cumbersome manual controls and data silos. You might land complex orders requiring multi-aircraft coordination, only to find yourself scrambling without a unified dispatch platform. You want to integrate flight data with business management, but end up toggling endlessly between multiple software systems.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our reason for being is to equip global system integrators, industry end-users, and brand owners with a "One-Network Command" capability. Powered by our deep roots in China's drone industrial cluster, we deliver more than high-performance front-end hardware – from multi-rotors to VTOL fixed-wing aircraft, covering full-spectrum payloads including visible light, infrared, and multi-spectral sensors. We also deeply integrate the mission execution layer (intelligent route planning, automated obstacle avoidance, multi-aircraft coordinated operations, and real-time video distribution), along with back-end management software (cloud-based dock dispatch, flight data visualization, AI-powered recognition analytics, and full lifecycle equipment maintenance). Through this tightly coupled hardware-software closed-loop ecosystem, we upgrade your scattered "flying machines" into turnkey "industry solutions." Whether it's rapid emergency response, automated energy inspection archiving, or digital agricultural mapping, all you need is to issue a mission from your back-end – from takeoff to final data report generation, everything is visible, controllable, and manageable. We take on the complexity of "triple-layer integration" and hand you the simplicity of "One-Network Command."
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <SectionHeading eyebrow="Standards" title="Deep Industrial Heritage & Rigorous Service Standards" />
        </Reveal>
        
        <Reveal delay={0.25}>
          <h3 className="mt-8 text-xl font-medium text-foreground">Industry Experience & Professional Expertise</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Our core team brings over 10 years of deep cultivation across the drone upstream and downstream value chain. From the early RC hobby era to today's enterprise-grade applications, we have witnessed every technological wave. This enables us not only to understand hardware specifications but also to master scenario-based deployment. We maintain deep, synergistic partnerships with dozens of core component manufacturers and solution providers within the industrial cluster, allowing us to anticipate technology trends up to six months in advance – ensuring that the solutions we offer are not "clearing old inventory," but "future-ready configurations."
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <h3 className="mt-8 text-xl font-medium text-foreground">Quality Control & Production Standards</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            We firmly believe that "quality is the lifeline of a distributor." We implement a full-process visualized quality control system – from battery cell pairing and flight controller calibration to complete aircraft aging tests – all in strict compliance with ISO 9001 and military-grade testing standards. Every unit shipped comes with a detailed actual test data report. We do not practice "batch sampling"; we perform 100% full inspection, ensuring that even for thousand-unit bulk orders, we deliver a 99.7%+ out-of-box pass rate.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <h3 className="mt-8 text-xl font-medium text-foreground">Service Capability & Response Speed</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Whenever you need us, we are online. We commit to "2-hour rapid quotation" and "48-hour emergency spare parts response." No matter which time zone you are in, our technical engineering team provides 24/7 remote support. We are not just your supplier; we are your on-call "virtual production department."
          </p>
        </Reveal>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-16 sm:flex-row sm:items-center lg:px-8">
          <p className="max-w-xl text-pretty text-lg text-foreground">Want to learn more about our technology and team?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
