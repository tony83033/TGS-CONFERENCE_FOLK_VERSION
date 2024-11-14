import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface PricingTier {
  name: string
  price: number
  features: string[]
}

export default function Component() {
  const tiers: PricingTier[] = [
    {
      name: "BASIC",
      price: 15.99,
      features: ["FREE SUPPORT 24/7", "DATABASES DOWNLOAD"],
    },
    {
      name: "PRO",
      price: 25.99,
      features: ["FREE SUPPORT 24/7", "DATABASES DOWNLOAD", "MAINTENANCE EMAIL"],
    },
    {
      name: "PREMIUM",
      price: 35.99,
      features: ["FREE SUPPORT 24/7", "DATABASES DOWNLOAD", "MAINTENANCE EMAIL", "UNLIMITED TRAFFIC"],
    },
  ]

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 items-stretch justify-center bg-[#1E1E1E]">
      {tiers.map((tier, index) => {
        const gradientStyle = {
          background: index === 0
            ? 'linear-gradient(180deg, #1FE1B4 0%, #19B890 100%)'
            : index === 1
            ? 'linear-gradient(180deg, #B06AB3 0%, #4568DC 100%)'
            : 'linear-gradient(180deg, #FF5858 0%, #F09819 100%)'
        }

        return (
          <Card key={tier.name} className="w-full md:w-[280px] flex flex-col h-[450px] border-0 rounded-[32px] overflow-hidden shadow-none">
            <CardHeader className="bg-white p-6 flex flex-col items-center justify-center h-1/4">
              <h3 className="text-[32px] font-bold text-center">{tier.name}</h3>
            </CardHeader>
            <div className="flex-grow flex flex-col" style={gradientStyle}>
              <CardContent className="text-white p-6 flex flex-col items-center justify-between flex-grow">
                {tier.features.map((feature) => (
                  <p key={feature} className="text-base text-center">
                    {feature}
                  </p>
                ))}
                <div className="text-center mt-4">
                  <span className="text-[40px] font-light">${Math.floor(tier.price)}</span>
                  <span className="text-xl align-top">.99</span>
                  <div className="text-sm mt-1">PER MONTH</div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex items-center justify-center">
                <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-[8px] py-3 text-base font-semibold">
                  BUY
                </Button>
              </CardFooter>
            </div>
          </Card>
        )
      })}
    </div>
  )
}