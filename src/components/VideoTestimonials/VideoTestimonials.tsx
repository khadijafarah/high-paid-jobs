"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, MoreVertical, Play } from "lucide-react"
import { useState, useRef } from "react"
import Image from "next/image"

type VideoId = "1" | "2" | "3" | "4"

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<VideoId | null>(null)

  // Properly type the videoRefs object
  const videoRefs = {
    "1": useRef<HTMLVideoElement>(null),
    "2": useRef<HTMLVideoElement>(null),
    "3": useRef<HTMLVideoElement>(null),
    "4": useRef<HTMLVideoElement>(null),
  }

  const handlePlayVideo = (id: VideoId) => {
    // If there's already an active video, pause it
    if (activeVideo && activeVideo !== id) {
      const currentVideoRef = videoRefs[activeVideo]
      if (currentVideoRef.current) {
        currentVideoRef.current.pause()
      }
    }

    // Toggle the clicked video
    if (id === activeVideo) {
      const videoRef = videoRefs[id]
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play()
        } else {
          videoRef.current.pause()
        }
      }
    } else {
      setActiveVideo(id)
      // Play the new video after a short delay to allow the UI to update
      setTimeout(() => {
        const videoRef = videoRefs[id]
        if (videoRef.current) {
          videoRef.current.play()
        }
      }, 100)
    }
  }

  return (
    <section className="bg-[#0f1729] px-4 py-16">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-300 text-sm mb-2 tracking-wider uppercase">REAL STORIES</p>
          <h2 className="text-3xl text-white font-bold mb-3 md:text-4xl">Success Stories</h2>
          <p className="text-gray-300 mb-4">Hear from people who transformed their careers with our program</p>
          <div className="flex justify-center items-center">
            <span className="bg-red-500 h-2 rounded-full w-2 inline-block mr-2"></span>
            <span className="text-red-500 text-sm font-medium">LIVE TESTIMONIAL</span>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Video 1 - Alex P. */}
          <div className="bg-[#1a2235] rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              {activeVideo === "1" ? (
                <div className="w-full aspect-[9/16] max-h-[400px] relative">
                  <video
                    ref={videoRefs["1"]}
                    className="h-full w-full object-cover"
                    controls
                    poster="/placeholder.svg?height=600&width=400"
                  >
                    <source
                      src="blob:https://player.vimeo.com/c6b30f4a-8073-4c05-8bbf-40cf9443e410"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="w-full aspect-[9/16] max-h-[400px] relative">
                  <div className="h-full w-full relative">
                    <Image
                      src="/placeholder.svg?height=600&width=400"
                      alt="Alex P. testimonial"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <button
                    onClick={() => handlePlayVideo("1")}
                    className="bg-black bg-opacity-50 p-3 rounded-full -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 transform"
                  >
                    <Play className="h-6 text-white w-6" fill="white" />
                  </button>
                  <button className="bg-black bg-opacity-50 p-1 rounded-full absolute right-2 top-2">
                    <MoreVertical className="h-5 text-white w-5" />
                  </button>
                  <button className="bg-black bg-opacity-50 p-1 rounded-full absolute bottom-2 right-2">
                    <ChevronLeft className="h-5 text-white w-5" />
                  </button>
                  <div className="bg-yellow-400 text-black text-xs absolute bottom-4 font-bold left-4 px-2 py-1">
                    HIGH-PAYING
                  </div>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="flex bg-emerald-500 h-10 justify-center rounded-full text-white w-10 font-medium items-center mr-3">
                  A
                </div>
                <div>
                  <h3 className="text-white font-medium">Alex P.</h3>
                  <p className="text-gray-400 text-sm">Hired @ Fortune 100 – $108K</p>
                </div>
              </div>
              <p className="text-white mb-4">I got two offers within 3 months!</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 text-yellow-400 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Video 2 - Maria S. */}
          <div className="bg-[#1a2235] rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              {activeVideo === "2" ? (
                <div className="w-full aspect-[9/16] max-h-[400px] relative">
                  <video
                    ref={videoRefs["2"]}
                    className="h-full w-full object-cover"
                    controls
                    poster="/placeholder.svg?height=600&width=400"
                  >
                    <source
                      src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="w-full aspect-[9/16] max-h-[400px] relative">
                  <div className="h-full w-full relative">
                    <Image
                      src="/placeholder.svg?height=600&width=400"
                      alt="Maria S. testimonial"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <button
                    onClick={() => handlePlayVideo("2")}
                    className="bg-black bg-opacity-50 p-3 rounded-full -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 transform"
                  >
                    <Play className="h-6 text-white w-6" fill="white" />
                  </button>
                  <button className="bg-black bg-opacity-50 p-1 rounded-full absolute right-2 top-2">
                    <MoreVertical className="h-5 text-white w-5" />
                  </button>
                  <button className="bg-black bg-opacity-50 p-1 rounded-full absolute bottom-2 right-2">
                    <ChevronLeft className="h-5 text-white w-5" />
                  </button>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="flex bg-emerald-500 h-10 justify-center rounded-full text-white w-10 font-medium items-center mr-3">
                  M
                </div>
                <div>
                  <h3 className="text-white font-medium">Maria S.</h3>
                  <p className="text-gray-400 text-sm">Hired @ FAANG – $130K</p>
                </div>
              </div>
              <p className="text-white mb-4">They helped me to get extra $8k!</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 text-yellow-400 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Video 3 - Jamal R. */}
          <div className="bg-[#1a2235] rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              {activeVideo === "3" ? (
                <div className="w-full aspect-[9/16] max-h-[400px] relative">
                  <video
                    ref={videoRefs["3"]}
                    className="h-full w-full object-cover"
                    controls
                    poster="/placeholder.svg?height=600&width=400"
                  >
                    <source
                      src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="w-full aspect-[9/16] max-h-[400px] relative">
                  <div className="h-full w-full relative">
                    <Image
                      src="/placeholder.svg?height=600&width=400"
                      alt="Jamal R. testimonial"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <button
                    onClick={() => handlePlayVideo("3")}
                    className="bg-black bg-opacity-50 p-3 rounded-full -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 transform"
                  >
                    <Play className="h-6 text-white w-6" fill="white" />
                  </button>
                  <button className="bg-black bg-opacity-50 p-1 rounded-full absolute right-2 top-2">
                    <MoreVertical className="h-5 text-white w-5" />
                  </button>
                  <button className="bg-black bg-opacity-50 p-1 rounded-full absolute bottom-2 right-2">
                    <ChevronLeft className="h-5 text-white w-5" />
                  </button>
                  <div className="bg-white text-black text-center text-xs absolute bottom-4 font-bold left-4 max-w-[180px] px-2 py-1">
                    NEGOTIATIONS WITH EXPERT GUIDANCE
                  </div>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="flex bg-emerald-500 h-10 justify-center rounded-full text-white w-10 font-medium items-center mr-3">
                  J
                </div>
                <div>
                  <h3 className="text-white font-medium">Jamal R.</h3>
                  <p className="text-gray-400 text-sm">Hired @ Federal Job – $115K</p>
                </div>
              </div>
              <p className="text-white mb-4">
                The interview prep was incredible, and they even helped me get the permanent offer!
              </p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 text-yellow-400 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Video 4 - Sarah M. */}
          <div className="bg-[#1a2235] rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              {activeVideo === "4" ? (
                <div className="w-full aspect-[9/16] max-h-[400px] relative">
                  <video
                    ref={videoRefs["4"]}
                    className="h-full w-full object-cover"
                    controls
                    poster="/placeholder.svg?height=600&width=400"
                  >
                    <source
                      src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="w-full aspect-[9/16] max-h-[400px] relative">
                  <div className="h-full w-full relative">
                    <Image
                      src="/placeholder.svg?height=600&width=400"
                      alt="Sarah M. testimonial"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <button
                    onClick={() => handlePlayVideo("4")}
                    className="bg-black bg-opacity-50 p-3 rounded-full -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 transform"
                  >
                    <Play className="h-6 text-white w-6" fill="white" />
                  </button>
                  <button className="bg-black bg-opacity-50 p-1 rounded-full absolute right-2 top-2">
                    <MoreVertical className="h-5 text-white w-5" />
                  </button>
                  <button className="bg-black bg-opacity-50 p-1 rounded-full absolute bottom-2 right-2">
                    <ChevronLeft className="h-5 text-white w-5" />
                  </button>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="flex bg-emerald-500 h-10 justify-center rounded-full text-white w-10 font-medium items-center mr-3">
                  S
                </div>
                <div>
                  <h3 className="text-white font-medium">Sarah M.</h3>
                  <p className="text-gray-400 text-sm">Hired @ Tech Startup – $120K</p>
                </div>
              </div>
              <p className="text-white mb-4">They gave me access to the 500+ active recruiters hungry for talents!</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 text-yellow-400 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button className="bg-yellow-400 h-auto rounded-full text-black font-medium hover:bg-yellow-500 px-6 py-6">
            Book Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

