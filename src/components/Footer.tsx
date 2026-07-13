'use client'

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { NAV_LINKS, BRAND } from "../lib/site"
import Logo from "./Logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Logo className="h-7 w-7 text-accent" />
              <span className="text-base font-semibold tracking-[0.18em] text-foreground">{BRAND.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Focused on industrial aerial platforms and autonomous sensing, delivering reliable
              aerial digitalization for energy, surveying, public safety and beyond.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Navigation</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Capabilities</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-foreground/80">
              <li>Flight platform R&D</li>
              <li>Autonomous sensing & avoidance</li>
              <li>Swarm cooperation</li>
              <li>Industry data platform</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Contact</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-foreground/80">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{BRAND.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{BRAND.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{BRAND.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {currentYear} {BRAND.name} {BRAND.nameZh}. All rights reserved.</p>
          <p className="font-mono tracking-wide">Controllable flight · Trusted data · Reachable operations</p>
        </div>
      </div>
    </footer>
  )
}
