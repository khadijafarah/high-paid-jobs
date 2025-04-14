"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Define the form data type
interface FormData {
  name: string;
  mobile: string;
  email: string;
  employed: string;
  jobSwitch: string;
}

export default function CareerConsultationForm() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Add the date to the form data
    const formData = {
      ...data,
      consultationDate: selectedDate ? format(selectedDate, "PPP") : null,
    };
    
    // Log the form data to the console
    console.log("Form submission data:", formData);
    
    // Show success dialog
    setShowSuccessDialog(true);
    
    // Reset the form
    reset();
    setSelectedDate(undefined);
  };

  return (
    <>
      <div className="bg-foreground w-full lg:px-8 md:px-6 px-4 py-16 ">
      <Card className="max-w-7xl mx-auto" id="consultation">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-black">Book a FREE Career Consultation</CardTitle>
          <p className="text-sm text-gray">
            Please fill out the form below to schedule a 15-minute career auditing session
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 text-black">
                <Label htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message?.toString()}</p>
                )}
              </div>
              
              <div className="space-y-2 text-black">
                <Label htmlFor="mobile">
                  Mobile <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="mobile"
                  placeholder="Enter your mobile number"
                  {...register("mobile", { required: "Mobile number is required" })}
                  className={errors.mobile ? "border-red-500" : ""}
                />
                {errors.mobile && (
                  <p className="text-sm text-red-500">{errors.mobile.message?.toString()}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2 text-black">
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message?.toString()}</p>
              )}
            </div>
            
            <div className="space-y-2 text-black">
              <Label>
                What is the best time for a 15-minute career auditing session? <span className="text-red-500">*</span>
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !selectedDate && "text-gray-400"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Select date and time"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single" 
                    selected={selectedDate}
                    onSelect={(date) => setSelectedDate(date)}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
              <p className="text-sm text-gray">Select your preferred date and time for the meeting.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 text-black">
                <Label>
                  Are you currently employed? <span className="text-red-500">*</span>
                </Label>
                <RadioGroup>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="employed-yes" {...register("employed", { required: "Please select an option" })} />
                    <Label htmlFor="employed-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="employed-no" {...register("employed", { required: "Please select an option" })} />
                    <Label htmlFor="employed-no">No</Label>
                  </div>
                </RadioGroup>
                {errors.employed && (
                  <p className="text-sm text-red-500">{errors.employed.message?.toString()}</p>
                )}
              </div>
              
              <div className="space-y-2 text-black">
                <Label>
                  Are you looking for job switch? <span className="text-red-500">*</span>
                </Label>
                <RadioGroup>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="switch-yes" {...register("jobSwitch", { required: "Please select an option" })} />
                    <Label htmlFor="switch-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="switch-no" {...register("jobSwitch", { required: "Please select an option" })} />
                    <Label htmlFor="switch-no">No</Label>
                  </div>
                </RadioGroup>
                {errors.jobSwitch && (
                  <p className="text-sm text-red-500">{errors.jobSwitch.message?.toString()}</p>
                )}
              </div>
            </div>
            
          <div className="flex justify-center mt-10">
          <Button type="submit" className="w-24 text-white">Submit</Button>
          </div>
          </form>
        </CardContent>
      </Card>
      
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-black">Consultation Booked!</DialogTitle>
            <DialogDescription>
              Thank you for booking a career consultation. We will contact you shortly to confirm your appointment.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Button onClick={() => setShowSuccessDialog(false)} className="text-white">Close</Button>
          </div>
        </DialogContent>
      </Dialog>
      </div>
    </>
  );
}