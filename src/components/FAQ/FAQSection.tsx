"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "How fast can I get a job?",
    answer:
      "Most of our graduates secure job offers within 8-16 weeks of completing our program, depending on your background, skills, and job market conditions.",
  },
  {
    question: "What if I don't get hired?",
    answer:
      "We offer a job guarantee program. If you don't secure a position within the expected timeframe, we continue to provide support and resources until you do, at no additional cost.",
  },
  {
    question: "Can I work remotely?",
    answer:
      "Yes, many of our graduates secure remote positions. We prepare you for both remote and in-office opportunities, and help you find the arrangement that works best for your situation.",
  },
  {
    question: "Who is this program for?",
    answer:
      "Our program is designed for motivated individuals looking to transition into high-paying careers. Whether you're a recent graduate, career changer, or looking to upskill, our personalized approach adapts to your background.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "No prior experience is required for many of our tracks. We have programs designed for beginners as well as those with some experience looking to advance their careers.",
  },
  {
    question: "What companies hire your graduates?",
    answer:
      "Our graduates have been hired by a wide range of companies, from startups to Fortune 500 corporations across various industries.",
  },
]

export default function FAQSection() {
  return (
    <section className="  w-full bg-accent py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 ">Got Questions? We&apos;ve Got Answers</h2>
          <p className="text-gray">Find answers to our most frequently asked questions</p>
        </div>

        <Accordion type="single" collapsible className="space-y-5 ">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-md bg-background shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left text-lg text-black">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-black">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-10">
          <p className="text-gray mb-4">Have more questions? Ask us during your FREE consultation!</p>
          <Link href="#consultation">
        <Button className="bg-primary rounded-full text-lg text-white font-medium hover:bg-blue-700 px-6 py-2">
            Book Free Consultation <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </Link>
        </div>
      </div>
    </section>
  )
}

