'use client'

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className || "h-7 w-7"}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 3 L28 26 L16 20 L4 26 Z" />
      <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}
