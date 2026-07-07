'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { NAV_LINKS, BRAND } from "../lib/site"
import Logo from "./Logo"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${BRAND.name} home`}>
          <Logo className="h-7 w-7 text-accent" />
          <span className="flex items-baseline gap-2">
            <span className="text-base font-semibold tracking-[0.18em] text-foreground">{BRAND.name}</span>
            <span className="hidden text-xs tracking-wide text-muted-foreground sm:inline">{BRAND.nameZh}</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.to
            return (
              <li key={link.to}>
                <Link
                  href={link.to}
                  className={`relative px-4 py-2 text-sm transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-4 -bottom-px h-px bg-accent" aria-hidden="true" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Book a demo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.to
              return (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className={`block rounded-sm px-3 py-3 text-sm ${
                      isActive ? "bg-surface text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block rounded-sm bg-accent px-3 py-3 text-center text-sm font-medium text-accent-foreground"
              >
                Book a demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
