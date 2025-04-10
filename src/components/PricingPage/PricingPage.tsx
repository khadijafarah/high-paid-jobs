import { Check, ArrowRight } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Unlock Your Career Freedom!</h1>
        <p className="text-lg text-gray-600">
          Choose the assessment plan that works best for you with our flexible payment options
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden border border-gray-100 flex flex-col h-full">
          <div className="p-6 flex-grow">
            <h2 className="text-xl font-semibold text-gray-900">Plan: Starter</h2>
            <p className="text-gray-600 mb-6">Quick 30 min interview</p>

            <div className="mb-6">
              <p className="text-sm text-gray-600">Starting from</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">$49.99</span>
              </div>
              <p className="text-sm text-gray-600">One time payment</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600">30 Min Interview.</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Provide Recording.</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Interview Assessment.</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Delivery: 1 to 3 days.</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Receive: details report and next action plan.</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600">
                  Provide 30 Local recruiter (small to large companies for open position)
                </span>
              </li>
            </ul>
          </div>
          <div className="px-6 pb-6 mt-auto">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium flex items-center justify-center">
              Pay Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Essential Plan */}
        <div className="bg-blue-600 rounded-lg shadow-lg overflow-hidden relative flex flex-col h-full">
          <div className="absolute right-6 top-6">
            <span className="bg-amber-400 text-amber-900 text-xs font-medium px-2.5 py-1 rounded">Most Popular</span>
          </div>
          <div className="p-6 flex-grow">
            <h2 className="text-xl font-semibold text-white">Plan: Essential</h2>
            <p className="text-blue-100 mb-6">60 min technical interview and resume assessment</p>

            <div className="mb-6">
              <p className="text-sm text-blue-100">Starting From</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-white">$99.99</span>
              </div>
              <p className="text-sm text-blue-100">Upfront deposit, $99.99 installment for 24 months: Interest FREE</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <span className="text-blue-100">60 min interview.</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <span className="text-blue-100">Deliver: Recording Interview, Resume Assessment and guidance!</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <span className="text-blue-100">Receive: details report and next action plan</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <span className="text-blue-100">50 Local recruiter (small to large companies for open position)</span>
              </li>
            </ul>
          </div>
          <div className="px-6 pb-6 mt-auto">
            <button className="w-full bg-white hover:bg-gray-100 text-blue-600 py-3 px-4 rounded-md font-medium flex items-center justify-center">
              Pay Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden border border-gray-100 flex flex-col h-full">
          <div className="p-6 flex-grow">
            <h2 className="text-xl font-semibold text-gray-900">Plan: Premium</h2>
            <p className="text-gray-600 mb-6">Interview, resume and current job application assessment</p>

            <div className="mb-6">
              <p className="text-sm text-gray-600">Starting From</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">$149.99</span>
              </div>
              <p className="text-sm text-gray-600">Upfront deposit, $149.99 installment for 24 months: Interest FREE</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Duration: 2 Hours</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Recruiter Interview</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Tech Interview</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Behavior interview</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Resume Assessment</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Current job application assessment</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Receive: details report and next action plan</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600">70 Local recruiter (small to large companies for open position)</span>
              </li>
            </ul>
          </div>
          <div className="px-6 pb-6 mt-auto">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium flex items-center justify-center">
              Pay Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
