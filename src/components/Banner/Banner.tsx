"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from 'next/image'
import MaskGroup from "../../../public/corner.png"
import { Button } from "../ui/button";
// import Arrow from "../../../public/arrow.svg"
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "../Shared/Navbar";

const Banner = () => {
  return (
    <div className="relative">
      <div className="relative md:h-[750px]  bg-primary">
        <Image src={MaskGroup} alt='Image' className='absolute top-0 right-0 animate-pulse z-10 w-sm' />
        <Navbar/>
        <div className="max-w-7xl mx-auto">
          <Separator className="my-2 bg-gray-400" />
          <div className="hidden md:flex w-fit m-4 p-3 items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border text-white border-white/20 animate-pulse">
            <span className="text-warn animate-in">🔥</span>99.99% GUARANTEED to
            get back your job!
          </div>

          <div className="grid  grid-cols-1 lg:grid-cols-2 justify-between items-center md:items-start h-auto md:h-[300px] p-2">
            <div>
              <h2 className="text-4xl md:text-5.5xl text-center md:text-left leading-relaxed font-extrabold  tracking-wide text-[white] m-6">
                Get your Six-Figure <br /> job back in <br />
                <span className="relative text-yellow-500">
                  8-16 Weeks
                  <svg
                    className="absolute left-0 w-full -bottom-3"
                    height="20"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q50 0, 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-warn"
                    ></path>
                  </svg>
                </span>{" "}
                <br />
                with our proven <br /> techniques.
              </h2>
              <p className=" m-4 text-white font-sans">
                Get access actively hiring 20+ premium recruiters today
                surrounding your location.
              </p>
            </div>
            <div className="w-full md:w-[600px] flex justify-center">
              <iframe
                src="https://player.vimeo.com/video/1065695538?h=2a872c4ae3&amp;autoplay=1"
                title="High Paid Jobs"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full md:w-[600px] h-[250px] md:h-[400px] rounded-lg"
              ></iframe>
            </div>

            <div className="flex justify-start gap-4 lg:gap-4 lg:m-4 mt-4 mb-4">
              <Link href="#consultation">
                <Button className="btn bg-[#eaa207] hover:bg-[#F5DE4D] rounded-full text-gray tracking-wider flex items-center lg:font-medium font-semibold lg:text-nowrap whitespace-normal md:break-words p-6 w-[150px] lg:w-[230px]">
                  Book Free Consultation
                 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button className="btn bg-white/10 rounded-full text-white tracking-wider flex items-center lg:text-nowrap whitespace-normal md:break-words p-6 font-semibold w-[150px] lg:w-[200px]">
                Join Next Webinar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <Image src={MaskGroup} alt='Image 2' className='absolute bottom-0 left-0 rotate-180 animate-pulse z-10 w-sm' />
      </div>
    </div>
  );
};

export default Banner;
