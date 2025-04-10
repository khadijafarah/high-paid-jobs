export default function PromoBanner() {
    return (
      <div className="container mx-auto p-6">
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Secure Your $100K+ Futur e Today!</h1>
  
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Spots are filling FAST! Join our next hiring wave and start your journey to a high-paying tech career.
          </p>
  
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href="#"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-6 rounded-full transition-colors duration-300"
            >
              Book a Free 15-Min Call &gt;
            </a>
  
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-400 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
            >
              Join Next Webinar &gt;
            </a>
          </div>
  
          <div className="text-center">
            <p className="inline-flex items-center text-lg">
              <span className="mr-2">🚀</span>
              HighPaidJobs.us – The Fastest Path to a $100K+ Career!
            </p>
          </div>
        </div>
      </div>
    )
  }
  