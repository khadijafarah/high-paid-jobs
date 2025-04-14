// app/components/JobPathSection.tsx
'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Briefcase, Building2, GraduationCap } from "lucide-react";
import Link from 'next/link';

const options = [
  {
    id: "assessment",
    label: "Job Assessment",
    icon: <Briefcase className="mr-2 h-5 w-5 text-blue-600" />,
    content: [
      "30 to 120 min interview",
      "40 to 70 local recruiter access",
      "Provided recording with details report",
      "Salary negotiation blueprint",
      "Probation period hacks",
      "Help revamp the resume and tailoring for each job needs",
    ],
  },
  {
    id: "placement",
    label: "Job Placement",
    icon: <Building2 className="mr-2 h-5 w-5 text-blue-600" />,
    content: [
      "Guaranteed interviews",
      "Exclusive partner companies",
      "Resume blast to hiring managers",
      "Personal career mentor",
    ],
  },
  {
    id: "prep",
    label: "Job Prep",
    icon: <GraduationCap className="mr-2 h-5 w-5 text-blue-600" />,
    content: [
      "Mock interviews with feedback",
      "Technical test prep",
      "Soft skills training",
      "LinkedIn optimization",
    ],
  },
];

export default function JobPathSection() {
  const [selected, setSelected] = useState("assessment");
  const activeOption = options.find(opt => opt.id === selected);

  return (
    <section className="py-12 bg-foreground ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Choose Your Path to Land Your Dream Job
          </h2>
          <p className="text-gray mt-2 max-w-2xl mx-auto">
            Select the career path that aligns with your goals and unlock your professional potential
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col space-y-4 w-full lg:w-1/3">
            {options.map(option => (
              <Card
                key={option.id}
                className={cn(
                  "cursor-pointer border hover:border-blue-600 transition",
                  selected === option.id && "border-blue-600 shadow-md"
                )}
                onClick={() => setSelected(option.id)}
              >
                <CardContent className="flex items-center p-4">
                  {option.icon}
                  <span className="font-medium text-black">{option.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="w-full lg:w-2/3">
            <CardContent className="p-6 space-y-4">
              {activeOption?.content.map((point, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <p className="text-gray">{point}</p>
                </div>
              ))}
              <div className='flex justify-center'>
             <Link href="#consultation">
             <Button className="mt-6 bg-primary text-white">Get Started</Button>
             </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
