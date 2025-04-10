"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle} from "lucide-react"

export default function CareerPath() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold lg:text-5xl mb-2 md:text-4xl">Your path to a High-Paying career</h1>
        <p className="text-gray-500">Follow our proven step-by-step process to land your dream job</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Timeline Section - Takes 2/3 of the space on large screens */}
        <div className="lg:col-span-2">
          <div className="relative">
            {/* Vertical dotted line */}
            <div className="border-dashed border-l border-slate-200 absolute bottom-10 hidden left-6 sm:block top-10"></div>

            {/* Timeline items */}
            <div className="flex flex-col mb-12 relative sm:flex-row">
              <div className="flex-shrink-0 mb-4 sm:mb-0">
                <div className="flex bg-blue-50 h-12 justify-center rounded-full text-blue-600 w-12 font-semibold items-center relative z-10">
                  01
                </div>
              </div>
              <div className="sm:ml-8">
                <h3 className="text-xl font-bold mb-2">Pick Your Plan</h3>
                <p className="text-gray-500">
                  Find out options among them: Placement, assessment, guidance, technical coaching, quick refine and
                  placement.
                </p>
              </div>
            </div>

            <div className="flex flex-col mb-12 relative sm:flex-row">
              <div className="flex-shrink-0 mb-4 sm:mb-0">
                <div className="flex bg-blue-50 h-12 justify-center rounded-full text-blue-600 w-12 font-semibold items-center relative z-10">
                  02
                </div>
              </div>
              <div className="sm:ml-8">
                <h3 className="text-xl font-bold mb-2">Your Career Assessment</h3>
                <p className="text-gray-500">
                  Get one-on-one coaching and assessment until your placement in confirmed in 8 to 12 weeks.
                </p>
              </div>
            </div>

            <div className="flex flex-col mb-12 relative sm:flex-row">
              <div className="flex-shrink-0 mb-4 sm:mb-0">
                <div className="flex bg-blue-50 h-12 justify-center rounded-full text-blue-600 w-12 font-semibold items-center relative z-10">
                  03
                </div>
              </div>
              <div className="sm:ml-8">
                <h3 className="text-xl font-bold mb-2">Access 500+ Active Recruiters</h3>
                <p className="text-gray-500">
                  We&apos;ll review your resume, connect you with recruiters, and prepare you for interviews.
                </p>
              </div>
            </div>

            <div className="flex flex-col mb-12 relative sm:flex-row">
              <div className="flex-shrink-0 mb-4 sm:mb-0">
                <div className="flex bg-blue-50 h-12 justify-center rounded-full text-blue-600 w-12 font-semibold items-center relative z-10">
                  04
                </div>
              </div>
              <div className="sm:ml-8">
                <h3 className="text-xl font-bold mb-2">Ready Job Offer within 10 Interviews</h3>
                <p className="text-gray-500">
                  Our 500+ active recruiters will help you land multiple job offers within the first 10 interviews.
                </p>
              </div>
            </div>

            <div className="flex flex-col mb-12 relative sm:flex-row">
              <div className="flex-shrink-0 mb-4 sm:mb-0">
                <div className="flex bg-blue-50 h-12 justify-center rounded-full text-blue-600 w-12 font-semibold items-center relative z-10">
                  05
                </div>
              </div>
              <div className="sm:ml-8">
                <h3 className="text-xl font-bold mb-2">Renegotiation for Extra $10k</h3>
                <p className="text-gray-500">
                  When your final salary is decided, we will step in to renegotiate get you extra $10k
                </p>
              </div>
            </div>

            <div className="flex flex-col mb-12 relative sm:flex-row">
              <div className="flex-shrink-0 mb-4 sm:mb-0">
                <div className="flex bg-blue-50 h-12 justify-center rounded-full text-blue-600 w-12 font-semibold items-center relative z-10">
                  06
                </div>
              </div>
              <div className="sm:ml-8">
                <h3 className="text-xl font-bold mb-2">Support During Probation Period</h3>
                <p className="text-gray-500">
                  Receive full support during your probation period to ensure your success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Job Tracks Section - Takes 1/3 of the space on large screens */}
        <div className="lg:col-span-1">
          {/* Custom card using div instead of Card component */}
          <div className="border h-full rounded-lg shadow-sm overflow-hidden">
            {/* Card header */}
            <div className="bg-blue-600 p-4 text-white md:p-6">
              <h3 className="text-xl font-semibold">Job Prep Tracks</h3>
            </div>

            {/* Card content */}
            <div className="p-4 md:p-6 pt-6">
              <div className="space-y-4">
                <div className="flex items-start">
                <div className="flex bg-green-100 border-2 border-primary h-6 justify-center rounded-full text-primary w-6 items-center z-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 lucide lucide-check"><path d="M20 6 9 17l-5-5"></path></svg></div>
                  <span>CloudOps/DevOps (AWS)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 text-blue-600 w-5 mr-2" />
                  <span>Full-Stack Web/Mobile (MERN)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 text-blue-600 w-5 mr-2" />
                  <span>Project/Product Management</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 text-blue-600 w-5 mr-2" />
                  <span>SQA Engineering</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 text-blue-600 w-5 mr-2" />
                  <span>Front-End Developer</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 text-blue-600 w-5 mr-2" />
                  <span>Back-End Developer</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 text-blue-600 w-5 mr-2" />
                  <span>Software Engineer</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 text-blue-600 w-5 mr-2" />
                  <span>AI Engineer</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 text-blue-600 w-5 mr-2" />
                  <span>More</span>
                </div>
              </div>

              <div className="text-center text-gray-500 text-sm mt-6">
                All tracks include job placement 99.99% guarantee to follow our techniques.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
          <Button className="bg-blue-600 rounded-full text-lg text-white font-medium hover:bg-blue-700 px-6 py-2">
            Book Free Consultation <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
    </div>
  )
}

