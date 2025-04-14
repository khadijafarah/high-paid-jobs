import { Check, ArrowRight } from "lucide-react";

export default function PricingPage() {
  return (
  <div className="bg-card-foreground">
     <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">
          Unlock Your Career Freedom!
        </h1>
        <p className="text-lg text-gray">
          Choose the assessment plan that works best for you with our flexible
          payment options
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="bg-secondary-foreground rounded-lg shadow-sm overflow-hidden border flex flex-col h-full">
          <div className="p-6 flex-grow">
            <h2 className="text-xl font-semibold text-black">
              Plan: Starter
            </h2>
            <p className="text-gray mb-6">Quick 30 min interview</p>

            <div className="mb-6">
              <p className="text-sm text-gray">Starting from</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-black">$49.99</span>
              </div>
              <p className="text-sm text-gray">One time payment</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray">30 Min Interview.</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray">Provide Recording.</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray">Interview Assessment.</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray">Delivery: 1 to 3 days.</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray">
                  Receive: details report and next action plan.
                </span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray">
                  Provide 30 Local recruiter (small to large companies for open
                  position)
                </span>
              </li>
            </ul>
          </div>
          <div className="px-6 pb-6 mt-auto">
            <button className="w-full bg-primary hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium flex items-center justify-center">
              Pay Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        {/* Essential Plan */}
        <div className="bg-primary rounded-lg shadow-lg  relative flex flex-col h-full">
          <div className="absolute right-[-9] top-8  ">
            <span className="bg-amber-400 text-black text-xs font-medium px-4 py-2 rounded">
              Most Popular
            </span>
            <span className="absolute top-7 right-0">
              <svg
                width="7.903320"
                height="7.903320"
                viewBox="0 0 7.90332 7.90332"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs></defs>
                <path
                  id="Vector 80"
                  d="M0 0L7.9 0L0 7.9L0 0Z"
                  fill="#F6A934"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </span>
          </div>

          <div className="p-6 flex-grow">
            <h2 className="text-xl font-semibold text-white">
              Plan: Essential
            </h2>
            <p className="text-blue-100 mb-6">
              60 min technical interview and <br />resume 
              assessment
            </p>

            <div className="mb-6">
              <p className="text-sm text-blue-100">Starting From</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-white">$99.99</span>
              </div>
              <p className="text-sm text-blue-100">
                Upfront deposit, $99.99 installment for 24 months: Interest FREE
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <span className="text-blue-100">60 min interview.</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <span className="text-blue-100">
                  Deliver: Recording Interview, Resume Assessment and guidance!
                </span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <span className="text-blue-100">
                  Receive: details report and next action plan
                </span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <span className="text-blue-100">
                  50 Local recruiter (small to large companies for open
                  position)
                </span>
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
        <div className="bg-secondary-foreground rounded-lg shadow-sm overflow-hidden border flex flex-col h-full">
          <div className="p-6 flex-grow">
            <h2 className="text-xl font-semibold text-black">
              Plan: Premium
            </h2>
            <p className="text-gray mb-6">
              Interview, resume and current job application assessment
            </p>

            <div className="mb-6">
              <p className="text-sm text-gray">Starting From</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-black">
                  $149.99
                </span>
              </div>
              <p className="text-sm text-gray">
                Upfront deposit, $149.99 installment for 24 months: Interest
                FREE
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray">Duration: 2 Hours</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray">Recruiter Interview</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray">Tech Interview</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray">Behavior interview</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray">Resume Assessment</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray">
                  Current job application assessment
                </span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray">
                  Receive: details report and next action plan
                </span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray">
                  70 Local recruiter (small to large companies for open
                  position)
                </span>
              </li>
            </ul>
          </div>
          <div className="px-6 pb-6 mt-auto">
            <button className="w-full bg-primary hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium flex items-center justify-center">
              Pay Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div> 
  );
}
