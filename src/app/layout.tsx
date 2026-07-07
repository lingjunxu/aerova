import type { ReactNode } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton"
import "./globals.css"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
        </div>
      </body>
    </html>
  )
}
