'use client'

import { motion } from "framer-motion"
import Link from "next/link"

export default function PageHeader({
  eyebrow,
  title,
  description,
  cta,
}: {
  eyebrow: string
  title: string
  description?: string
  cta?: { text: string; href: string }
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 tech-grid opacity-25" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-32 lg:px-8 lg:pb-20 lg:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.25em] text-accent"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground"
          >
            {description}
          </motion.p>
        )}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6"
          >
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              {cta.text}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
