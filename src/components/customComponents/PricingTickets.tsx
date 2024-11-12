import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import { FC } from "react"

interface PricingTier {
  name: string
  price: number
  period?: string
  features: string[]
  highlighted?: boolean
}

const pricingTiers: PricingTier[] = [
  {
    name: "Standard Access",
    price: 150,
    features: ["Feature 1", "Feature 2"],
  },
  {
    name: "Premium Access",
    price: 250,
    period: "month",
    features: [
      "Quam adipiscing vitae proin",
      "Nec feugiat nisl pretium",
      "Nulla at volutpat diam uteera",
    ],
    highlighted: true,
  },
  {
    name: "Pro Access",
    price: 350,
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
]

const PricingComponent: FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-primary mb-2">Buy Tickets</h1>
      <div className="h-1 w-16 bg-red-500 mx-auto mb-12" />

      <div className="space-y-6">
        {pricingTiers.map((tier, index) => (
          <Card
            key={index}
            className={`overflow-hidden ${tier.highlighted ? "bg-red-500" : "bg-background"}`}
          >
            <CardContent className="p-0">
              <div className="flex items-center">
                <div className="w-1/4 p-6">
                  <h2 className={`text-xl font-semibold ${tier.highlighted ? "text-white" : "text-primary"}`}>
                    {tier.name}
                  </h2>
                </div>
                <div className="w-1/4 p-6 text-center">
                  <div className={`flex items-baseline justify-center ${tier.highlighted ? "text-white" : "text-red-500"}`}>
                    <span className="text-2xl">$</span>
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.period && (
                      <span className="ml-1 text-sm text-muted-foreground">/ {tier.period}</span>
                    )}
                  </div>
                </div>
                <div className="w-1/3 p-6">
                  <ul className="space-y-2">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center gap-2 ${tier.highlighted ? "text-white" : "text-primary"}`}>
                        <Check className="h-4 w-4 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-1/6 p-6 text-right">
                  <Button
                    className={`${
                      tier.highlighted
                        ? "bg-white text-red-500 hover:bg-white/90"
                        : "bg-red-500 text-white hover:bg-red-600"
                    }`}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PricingComponent
