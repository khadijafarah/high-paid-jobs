"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Shield, Monitor, Users, UserCheck, FileText, ShieldCheck } from "lucide-react"
import { ArrowRight } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="h-10 text-cyan-500 w-10" />,
      title: "Guaranteed Job Placement",
      description: "We guarantee you'll get hired or we keep working with you for free",
      highlight: "99.99% success rate within 8-16 weeks",
    },
    {
      icon: <Monitor className="h-10 text-cyan-500 w-10" />,
      title: "Hyper Personalized Coaching",
      description: "One-on-one instruction tailored to your learning style",
      highlight: "Dedicated mentor throughout your journey",
    },
    {
      icon: <Users className="h-10 text-cyan-500 w-10" />,
      title: "Interview Support",
      description: "Expert guidance during the entire interview process",
      highlight: "We join your interviews to help you succeed",
    },
    {
      icon: <UserCheck className="h-10 text-cyan-500 w-10" />,
      title: "Post-Hire Support",
      description: "Continued assistance after you land your job",
      highlight: "Full support during probation period to help your job sustain",
    },
    {
      icon: <FileText className="h-10 text-cyan-500 w-10" />,
      title: "Decided Salary Renegotiation",
      description: "Expert techniques to maximize your compensation",
      highlight: "Average $5-10k increase in offers",
    },
    {
      icon: <ShieldCheck className="h-10 text-cyan-500 w-10" />,
      title: "100% Money-Back Guarantee",
      description: "15 day money back guarantee, a risk-free investment!",
      highlight: "15-day unconditional guarantee",
    },
  ]

  return (
    <section className="bg-gray-50 px-4 py-16">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 font-bold mb-3 md:text-4xl">Why Choose Us Over Others?</h2>
          <p className="text-gray-600">See how our program delivers results where others fall short</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-gray-900 text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>

              {/* Comparison */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex bg-gray-100 justify-center p-3 rounded items-center">
                  <span className="text-sm font-medium">HighPaidJobs</span>
                </div>
                <div className="flex bg-gray-100 justify-center p-3 rounded items-center">
                  <span className="text-sm font-medium">Others</span>
                </div>
                <div className="flex bg-gray-100 justify-center p-3 rounded items-center">
                  <CheckCircle className="h-5 text-blue-600 w-5" />
                </div>
                <div className="flex bg-gray-100 justify-center p-3 rounded items-center">
                  <XCircle className="h-5 text-red-500 w-5" />
                </div>
              </div>

              {/* Highlight */}
              <div className="bg-blue-50 p-3 rounded text-blue-700 text-sm">{feature.highlight}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">Ready to experience the HighPaidJobs difference?</h3>
          <Button className="bg-blue-600 hover:bg-blue-700 px-6">
            Book Free Consultation <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

