export default function Levels() {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold">
            Your Journey to becoming a{" "}
            <span className="relative">
              Master Communicator
              <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500" />
            </span>
          </h2>
        </div>
  
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200" />
  
          {/* Level 1 */}
          <div className="relative mb-12">
            <div className="flex items-center">
              <div className="w-1/2 pr-8 text-right md:block">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="font-semibold mb-2">Stutter to Steady</h3>
                  <p className="text-sm text-gray-600">
                    You will eliminate all the 'umm' and 'aah' and start speaking steadily and confidently to everyone around you!
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full border-4 border-white">
                <span className="text-xs text-white">1</span>
              </div>
              <div className="w-1/2 pl-8" />
            </div>
          </div>
  
          {/* Level 2 */}
          <div className="relative mb-12">
            <div className="flex items-center">
              <div className="w-1/2 pr-8" />
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full border-4 border-white">
                <span className="text-xs text-white">2</span>
              </div>
              <div className="w-1/2 pl-8">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="font-semibold mb-2">Steady to Clear</h3>
                  <p className="text-sm text-gray-600">
                    You will be able to present your thoughts in a structured and impactful manner to make people like you - instantly!
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Level 3 */}
          <div className="relative">
            <div className="flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="font-semibold mb-2">Clear to Clever</h3>
                  <p className="text-sm text-gray-600">
                    People will remember you, trust you, respect you and will extend a hand of friendship towards you upfront!
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full border-4 border-white">
                <span className="text-xs text-white">3</span>
              </div>
              <div className="w-1/2 pl-8" />
            </div>
          </div>
        </div>
      </div>
    )
  }