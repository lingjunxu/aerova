'use client'

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={containerRef} className="fixed right-4 z-50 top-1/2 -translate-y-1/2 lg:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 20, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-3 rounded-lg border border-border bg-surface/95 p-3 shadow-xl backdrop-blur"
          >
            <motion.div
              className="aspect-square w-48 overflow-hidden rounded-md"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/images/whatsapp-qr.jpg"
                alt="WhatsApp QR Code"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <p className="mt-2 text-center text-xs text-muted-foreground">Get a Quote</p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:shadow-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <MessageCircle className="h-5 w-5" />
      </motion.button>
    </div>
  )
}
