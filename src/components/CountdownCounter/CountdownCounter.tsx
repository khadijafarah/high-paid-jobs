"use client"

import { useEffect, useState } from "react"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 3,
    hours: 3,
    minutes: 35,
    seconds: 36,
  })

  useEffect(() => {
    // Set the target date (3 days, 3 hours, 35 minutes, and 36 seconds from now)
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 3)
    targetDate.setHours(targetDate.getHours() + 3)
    targetDate.setMinutes(targetDate.getMinutes() + 35)
    targetDate.setSeconds(targetDate.getSeconds() + 36)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-center">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        Door Closes for FREE Career Auditing
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
        <TimeBox value={timeLeft.days.toString().padStart(2, "0")} label="Days" />
        <TimeBox value={timeLeft.hours.toString().padStart(2, "0")} label="Hours" />
        <TimeBox value={timeLeft.minutes.toString().padStart(2, "0")} label="Minutes" />
        <TimeBox value={timeLeft.seconds.toString().padStart(2, "0")} label="Seconds" />
      </div>
    </div>
  )
}

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex h-20 w-20 flex-col items-center justify-center rounded-md bg-red-600 text-white sm:h-24 sm:w-24 md:h-28 md:w-28">
      <span className="text-3xl font-bold sm:text-4xl md:text-5xl">{value}</span>
      <span className="text-xs sm:text-sm">{label}</span>
    </div>
  )
}
