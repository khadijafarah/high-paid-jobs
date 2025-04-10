"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Briefcase, Table2, GraduationCap } from "lucide-react"

export default function CareerPathSelection() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl text-gray-900 font-bold lg:text-5xl mb-3 md:text-4xl">
          Choose Your Path to Land Your Dream Job
        </h1>
        <p className="text-gray-500 max-w-3xl mx-auto">
          Select the career path that aligns with your goals and unlock your professional potential
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left column - Path options */}
        <div className="lg:col-span-1 space-y-4">
          {/* Option 1 */}
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm cursor-pointer hover:border-blue-500 hover:shadow-md transition-all">
            <div className="flex gap-3 items-center">
              <div className="text-blue-600">
                <Briefcase className="h-6 w-6" />
              </div>
              <span className="text-lg font-medium">Job Assessment</span>
            </div>
          </div>

          {/* Option 2 */}
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm cursor-pointer hover:border-blue-500 hover:shadow-md transition-all">
            <div className="flex gap-3 items-center">
              <div className="text-blue-600">
                <Table2 className="h-6 w-6" />
              </div>
              <span className="text-lg font-medium">Job Placement</span>
            </div>
          </div>

          {/* Option 3 - Selected */}
          <div className="bg-white border-2 border-blue-600 p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-all">
            <div className="flex gap-3 items-center">
              <div className="text-blue-600">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-lg font-medium">Job Prep</span>
            </div>
          </div>
        </div>

        {/* Right column - Benefits */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm md:p-8">
            <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2">
              <div className="flex gap-2 items-start">
                <Check className="flex-shrink-0 h-5 text-blue-600 w-5 mt-0.5" />
                <span>Everything in Job Assessment</span>
              </div>

              <div className="flex gap-2 items-start">
                <Check className="flex-shrink-0 h-5 text-blue-600 w-5 mt-0.5" />
                <span>Access to 500+ active recruiters</span>
              </div>

              <div className="flex gap-2 items-start">
                <Check className="flex-shrink-0 h-5 text-blue-600 w-5 mt-0.5" />
                <span>Sure job offer within 10 interviews</span>
              </div>

              <div className="flex gap-2 items-start">
                <Check className="flex-shrink-0 h-5 text-blue-600 w-5 mt-0.5" />
                <span>Help renegotiate salary by $10k</span>
              </div>

              <div className="flex gap-2 items-start">
                <Check className="flex-shrink-0 h-5 text-blue-600 w-5 mt-0.5" />
                <span>Lifetime access to materials</span>
              </div>

              <div className="flex gap-2 items-start">
                <Check className="flex-shrink-0 h-5 text-blue-600 w-5 mt-0.5" />
                <span>Complete support during interviews</span>
              </div>

              <div className="flex gap-2 items-start md:col-start-2 md:row-start-4">
                <Check className="flex-shrink-0 h-5 text-blue-600 w-5 mt-0.5" />
                <span>Complete support during probation period</span>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                Schedule Consultation <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

