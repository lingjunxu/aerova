'use client'

import { useState, type FormEvent } from "react"
import { Mail, Phone, MapPin, Check } from "lucide-react"
import PageHeader from "@/components/PageHeader"
import Reveal from "@/components/Reveal"
import StructuredData from "@/components/StructuredData"
import { BRAND } from "@/lib/site"
import { createContactPointSchema, createOrganizationSchema } from "@/lib/schema"

const INDUSTRIES = ["Energy & Power", "Surveying & GIS", "Public Safety", "Agriculture & Forestry", "Other"]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <StructuredData data={createContactPointSchema()} />
      <StructuredData data={createOrganizationSchema()} />
      <PageHeader
        eyebrow="Contact"
        title="Start a conversation about aerial operations"
        description="Share your requirements and our solutions team will reach out within one business day with airframe selection and flight-test validation advice."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-5 lg:px-8">
        <Reveal className="lg:col-span-2">
          <h2 className="text-xl font-medium text-foreground">Get in touch</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Reach us through any of the channels below, or simply fill out the form.
          </p>
          <address className="mt-8 flex flex-col gap-5 not-italic">
            <div className="flex items-start gap-3.5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border text-accent">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="mt-0.5 text-foreground">{BRAND.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border text-accent">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="mt-0.5 text-foreground">{BRAND.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border text-accent">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Address</p>
                <p className="mt-0.5 text-foreground">{BRAND.address}</p>
              </div>
            </div>
          </address>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="rounded-md border border-border bg-card p-7 sm:p-9">
            {submitted ? (
              <article className="flex flex-col items-center justify-center py-16 text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-accent text-accent">
                  <Check className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-medium text-foreground">Submitted successfully</h3>
                <p className="mt-2 max-w-sm leading-relaxed text-muted-foreground">
                  Thank you for reaching out. We've received your message and will be in touch soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-accent hover:underline"
                >
                  Submit another
                </button>
              </article>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input id="name" name="name" required className={inputClass} placeholder="Your name" />
                  </Field>
                  <Field label="Company / Organization" htmlFor="company">
                    <input id="company" name="company" className={inputClass} placeholder="Your organization" />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone" htmlFor="phone">
                    <input id="phone" name="phone" required className={inputClass} placeholder="Best number to reach you" />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input id="email" name="email" type="email" className={inputClass} placeholder="name@example.com" />
                  </Field>
                </div>
                <Field label="Industry" htmlFor="industry">
                  <select id="industry" name="industry" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Please select
                    </option>
                    {INDUSTRIES.map((it) => (
                      <option key={it} value={it}>
                        {it}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Project Details" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={`${inputClass} resize-none`}
                    placeholder="Briefly describe your operational scenario and goals"
                  />
                </Field>
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Submit inquiry
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </>
  )
}

const inputClass =
  "w-full rounded-sm border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent"

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-xs font-medium text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
