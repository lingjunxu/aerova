export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-accent">
        {align === "center" && <span className="h-px w-6 bg-accent" aria-hidden="true" />}
        {eyebrow}
        {align === "center" && <span className="h-px w-6 bg-accent" aria-hidden="true" />}
      </p>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
