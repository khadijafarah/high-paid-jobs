import { ModeToggle } from '@/components/Toggle/ModeToggle'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import CompanyLogo from "../../../public/highpaidlogo.png"


const Navbar = () => {
  return (
   <div className='bg-primary w-full'>
     <div className='max-w-7xl mx-auto flex justify-between'>
      <div>
      <Image src={CompanyLogo} alt='logo' width={250} height={200} className='my-8'/>
      </div>
      <div className=' flex gap-4 mt-15 '>
      <ModeToggle/>
       <Link href="#consultation">
       <Button className='flex items-center justify-between rounded-full bg-[white] hover:bg-gray-100 text-slate-900 px-3 md:px-5 py-1.5 cursor-pointer text-sm md:text-base whitespace-normal lg:text-nowrap md:break-words w-[80px] lg:w-[150]'>Get Started
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 h-4 w-4"><path d="m9 18 6-6-6-6"></path></svg>
        
        </Button>
       </Link>
      </div>
    </div>
  
   </div>
  )
}

export default Navbar