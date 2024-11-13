// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

// interface PricingTier {
//   name: string
//   price: number
//   features: string[]
//   gradient: string
// }

// export default function Component() {
//   const tiers: PricingTier[] = [
//     {
//       name: "BASIC",
//       price: 15.99,
//       features: [
//         "FREE SUPPPORT 24/7",
//         "DATABASES DOWNLOAD"
//       ],
//       gradient: "bg-gradient-to-b from-emerald-400 to-emerald-600"
//     },
//     {
//       name: "PRO",
//       price: 25.99,
//       features: [
//         "FREE SUPPPORT 24/7",
//         "DATABASES DOWNLOAD",
//         "MAINTENANCE EMAIL"
//       ],
//       gradient: "bg-gradient-to-b from-purple-400 via-blue-500 to-blue-600"
//     },
//     {
//       name: "PREMIUM",
//       price: 35.99,
//       features: [
//         "FREE SUPPPORT 24/7",
//         "DATABASES DOWNLOAD",
//         "MAINTENANCE EMAIL",
//         "UNLIMITED TRAFFIC"
//       ],
//       gradient: "bg-gradient-to-b from-pink-400 to-orange-400"
//     }
//   ]

//   return (
//     <div className="flex flex-col md:flex-row gap-8 p-8 items-stretch justify-center bg-gray-900">
//       {tiers.map((tier) => (
//         <Card key={tier.name} className="w-full md:w-[280px] overflow-hidden border-0 rounded-3xl">
//           <CardHeader className="bg-white p-6">
//             <h3 className="text-2xl font-bold text-center">{tier.name}</h3>
//           </CardHeader>
//           <CardContent className={`${tier.gradient} text-white p-6 pt-12 pb-20 flex flex-col gap-3`}>
//             {tier.features.map((feature) => (
//               <p key={feature} className="text-sm text-center">
//                 {feature}
//               </p>
//             ))}
//             <div className="mt-6 text-center">
//               <span className="text-4xl font-light">${tier.price}</span>
//               <span className="text-lg align-top">.99</span>
//               <div className="text-sm mt-1">PER MONTH</div>
//             </div>
//           </CardContent>
//           <CardFooter className={`${tier.gradient} p-6 pt-0`}>
//             <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-md py-2">
//               BUY
//             </Button>
//           </CardFooter>
//         </Card>
//       ))}
//     </div>
//   )
// }




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
    <div className="flex flex-col md:flex-row gap-8 p-8 items-stretch justify-center bg-gray-900">
      {tiers.map((tier, index) => {
        // Define unique styles for each tier
        const cardGradient =
          index === 0
            ? "bg-gradient-to-b from-emerald-400 to-emerald-600"
            : index === 1
            ? "bg-gradient-to-b from-purple-400 via-blue-500 to-blue-600"
            : "bg-gradient-to-b from-pink-400 to-orange-400"

        return (
          <Card key={tier.name} className="w-full md:w-[280px] flex flex-col h-[450px] border-0 rounded-3xl overflow-hidden">
            <CardHeader className="bg-white p-6 flex flex-col items-center justify-center h-1/4">
              <h3 className="text-2xl font-bold text-center">{tier.name}</h3>
            </CardHeader>
            <CardContent className={`${cardGradient} text-white p-6 flex flex-col items-center justify-evenly h-1/2`}>
              {tier.features.map((feature) => (
                <p key={feature} className="text-sm text-center">
                  {feature}
                </p>
              ))}
              <div className="text-center mt-4">
                <span className="text-4xl font-light">${tier.price}</span>
                <span className="text-lg align-top">.99</span>
                <div className="text-sm mt-1">PER MONTH</div>
              </div>
            </CardContent>
            <CardFooter className={`${cardGradient} p-6 pt-0 flex items-center justify-center h-1/4`}>
              <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-md py-2">
                BUY
              </Button>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
