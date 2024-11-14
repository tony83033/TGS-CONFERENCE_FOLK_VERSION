import { Card, CardContent } from "@/components/ui/card"
import { CircleDot, Mic, LightbulbIcon, ShieldCheck } from 'lucide-react'

export default function Levels() {
  const levels = [
    {
      title: "Stutter to Steady",
      description: "You will eliminate all the 'umm' and 'aah' and start speaking steadily and confidently to everyone around you!",
      icon: CircleDot,
    },
    {
      title: "Steady to Clear",
      description: "You will be able to present your thoughts in a structured and impactful manner to make people like you - instantly!",
      icon: Mic,
    },
    {
      title: "Clear to Clever",
      description: "People will remember you, trust you, respect you and will extend a hand of friendship towards you upfront!",
      icon: LightbulbIcon,
    },
    {
      title: "Clever to Confident",
      description: "At this level, you will confidently lead conversations, win people over with your charisma, and truly master the art of communication!",
      icon: ShieldCheck, // New icon for the 4th level
    },
  ]

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Your Journey to becoming a{" "}
          <span className="relative">
            Master of Tech
            <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500" />
          </span>
        </h2>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200" />

        {levels.map((level, index) => (
          <div key={index} className={`relative mb-24 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
            <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <Card className={`w-[300px] ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{level.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {level.description}
                  </p>
                </CardContent>
              </Card>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-white rounded-full border-2 border-blue-200 flex items-center justify-center mb-2">
                  <level.icon className="w-6 h-6 text-blue-500" />
                </div>
                <span className="text-sm text-blue-500">Level {index + 1}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
