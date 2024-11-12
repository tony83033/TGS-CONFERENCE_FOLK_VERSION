import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/placeholder.svg?height=1080&width=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 py-20">
        <h1 className="max-w-4xl mx-auto space-y-2 mb-4">
          <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            THE ANNUAL
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-red-500">
            MARKETING
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            CONFERENCE
          </span>
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl mb-12">
          10-12 December, Downtown Conference Center, New York
        </p>

        <Button
          variant="outline"
          className="border-red-500 text-white hover:bg-red-500 hover:text-white transition-colors duration-200"
        >
          About The Event
        </Button>
      </div>
    </section>
  )
}