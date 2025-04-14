import Link from "next/link"
import Image from "next/image"
import { Star, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import FooterLogo from "../../../public/footerlogo.png"

export default function Footer() {
  return (
    <div className="bg-foreground">
      <footer className="bg-[#050A1C] text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-2">
            <Image src={FooterLogo} alt='logo' width={150} height={100} className='my-1'/>
              
            </div>
            <p className="text-sm mt-1 mx-4">Reach the Top 1%</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  How it works
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Term and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <Star className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer" />
            </div>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors">
                <a href="mailto:highpaidjobs.us@gmail.com">highpaidjobs.us@gmail.com</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="https://wa.me/15866653331">WhatsApp: +1 586-665-3331</a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center ">
          <p className="text-sm text-gray-500">© 2025 All rights reserved by HighPaidJobs</p>
        </div>
      </div>
    </footer>
    </div>
  )
}
