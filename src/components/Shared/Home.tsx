import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, ChevronRight, SunMedium } from "lucide-react"
import { AnimatedGuarantee } from "@/components/AnimatedGuarantee/AnimatedGuarantee"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a44c2] text-white">
      {/* Navigation */}
      <header className="container mx-auto border-b border-white/10 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <Image src="/logo.svg" alt="High Paid Jobs Logo" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold">High Paid Jobs</h1>
              <p className="text-xs">Reach the Top 1%</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full text-white">
              <SunMedium className="h-5 w-5" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="default" className="rounded-full bg-white text-[#1a44c2] hover:bg-white/90">
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            {/* Guarantee Badge */}
            <AnimatedGuarantee />

            {/* Main Heading */}
            <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Get your Six-Figure job back in{" "}
              <span className="relative">
                <span className="relative z-10 text-yellow-300">8-16 Weeks</span>
                <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-yellow-400/50"></span>
              </span>{" "}
              with our proven techniques.
            </h2>

            {/* Subheading */}
            <p className="mb-8 text-lg text-white/80">
              Get access actively hiring 20+ premium recruiters today surrounding your location.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button className="rounded-full bg-yellow-400 text-[#1a44c2] hover:bg-yellow-300" size="lg">
                Book Free Consultation <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white"
                size="lg"
              >
                Join Next Webinar <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Video Thumbnail */}
          <div className="relative aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-lg shadow-lg lg:mt-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NavbarHeader.PNG-TgaeUjtcFAiGX7XMsQEllgyVuDO1Nv.png"
              alt="Video thumbnail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                <Play className="h-6 w-6 text-white" fill="white" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
