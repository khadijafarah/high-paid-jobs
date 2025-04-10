import Link from "next/link"
import { Star, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#050A1C] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-2">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M22 20C24.2 20 26 18.2 26 16C26 13.8 24.2 12 22 12C19.8 12 18 13.8 18 16C18 18.2 19.8 20 22 20Z"
                  fill="white"
                />
                <path
                  d="M38 20C40.2 20 42 18.2 42 16C42 13.8 40.2 12 38 12C35.8 12 34 13.8 34 16C34 18.2 35.8 20 38 20Z"
                  fill="white"
                />
                <path
                  d="M18 30C18 36.6 23.4 42 30 42C36.6 42 42 36.6 42 30"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M30 30V48" stroke="white" strokeWidth="2" />
              </svg>
              <div>
                <h2 className="text-xl font-bold">High Paid Jobs</h2>
                <p className="text-xs text-gray-400">REACH THE TOP 1%</p>
              </div>
            </div>
            <p className="text-sm mt-2">Reach the Top 1%</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  How it works
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Term and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <Star className="text-white h-5 w-5" />
            </div>
            <ul className="space-y-2 mb-4">
              <li className="text-gray-400">highpaidjobs.us@gmail.com</li>
              <li className="text-gray-400">WhatsApp: +1 586-665-3331</li>
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
        <div className="border-t border-gray-800 mt-8 pt-6 text-center md:text-left">
          <p className="text-sm text-gray-400">© 2025 All rights reserved by HighPaidJobs</p>
        </div>
      </div>
    </footer>
  )
}

