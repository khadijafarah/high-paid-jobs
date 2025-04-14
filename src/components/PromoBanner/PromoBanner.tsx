import { ArrowRight} from "lucide-react"
import CtaLeft from "../../../public/cta-left.png"
import CtaRight from "../../../public/cta-right.png"
import Image from "next/image"

export default function PromoBanner() {
  return (
  <div className="bg-foreground pb-11">
      <div className="flex flex-col items-center  max-w-7xl mx-auto justify-center bg-primary text-white p-4 md:p-8 relative rounded-lg overflow-hidden">
       <Image src={CtaRight} alt='Image' className='absolute top-0 -right-1/8 rotate-180 animate-pulse w-lg hidden md:block ' />
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Secure Your $100K+ Future Today!</h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Spots are filling FAST! Join our next hiring wave and start your journey to a high-paying tech career.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-[#eaaa07] hover:bg-[#EAC807] text-black  p-3 rounded-full transition-colors"
          >
            Book a Free 15-Min Call <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-[#587BDE] text-white  p-3 rounded-full border border-blue-400 transition-colors"
          >
            Join Next Webinar <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="pt-8 flex items-center justify-center gap-2 text-sm md:text-base">
          <span> 🚀 HighPaidJobs.us – The Fastest Path to a $100K+ Career!</span>
        </div>
      </div>
      <Image src={CtaLeft} alt='Image' className='absolute top-0 -left-1/8 rotate-180 animate-pulse w-lg hidden md:block ' />
    </div>
  </div>
  )
}

