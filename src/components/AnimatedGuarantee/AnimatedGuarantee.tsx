"use client"

import { Star } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function AnimatedGuarantee() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Start animation after a short delay
    const initialTimeout = setTimeout(() => {
      setIsAnimating(true)
    }, 1000)

    // Set up interval for periodic animation
    const interval = setInterval(() => {
      setIsAnimating(true)

      // Reset animation after it completes
      setTimeout(() => {
        setIsAnimating(false)
      }, 2000)
    }, 5000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      className={cn(
        "mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm transition-transform duration-700",
        isAnimating && "scale-110",
      )}
    >
      <Star className="h-5 w-5 text-yellow-300" fill="currentColor" />
      <span>99.99% GUARANTEED to Reach the Top 1%</span>
    </div>
  )
}
