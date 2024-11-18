


"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Mumbai from "../../../src/app/public/assets/cityCards/Mumbai.jpg";
import Pune from "../../../src/app/public/assets/cityCards/pune1.jpg";
import Hyderabad from "../../../src/app/public/assets/cityCards/hyderabad.jpg";
import Bengaluru from "../../../src/app/public/assets/cityCards/bangalore.jpg";
import Gurugram from "../../../src/app/public/assets/cityCards/gurgaon1.jpg";
import Chennai from "../../../src/app/public/assets/cityCards/Chennai.jpg";
import { BadgeCheck } from 'lucide-react';

interface PricingTier {
  name: string;
  price: number;
  features: string[];
}

interface CityPricing {
  [key: string]: PricingTier[];
}

export default function Component() {
  const [selectedCity, setSelectedCity] = useState('Bengaluru'); // Fixed typo here

  const cityPricing: CityPricing = {
    Mumbai: [ // Fixed city name here as well
      {
        name: "Early Bird offer",
        price: 15.99,
        features: ["Exclusive Hands-On Training with Mr Vimal Daga", "Real-World Case Studies", "Capstone Project integrating all your learnings", "Networking Opportunities with peers from top tech companies ", "Skill Validated Certificate", "Lifetime TGS Community Access", "Chance to engage with Hiring Managers", "Comprehensive Learning Resources"],
      },
      {
        name: "Pro",
        price: 15.99,
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Real-World Case Studies",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate",
          "Lifetime TGS Community Access",
          "Chance to engage with Hiring Managers",
          "Comprehensive Learning Resources"
        ]
      },
      {
        name: "Group Discount",
        price: 15.99,
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Real-World Case Studies",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate",
          "Lifetime TGS Community Access",
          "Chance to engage with Hiring Managers",
          "Comprehensive Learning Resources"
        ]
      }
      
    ],
    Bengaluru: [ // Fixed city name here as well
      {
        name: "Early Bird offer",
        price: 15.99,
        features: ["Exclusive Hands-On Training with Mr Vimal Daga", "Real-World Case Studies", "Capstone Project integrating all your learnings", "Networking Opportunities with peers from top tech companies ", "Skill Validated Certificate", "Lifetime TGS Community Access", "Chance to engage with Hiring Managers", "Comprehensive Learning Resources"],
      },
      {
        name: "Pro",
        price: 15.99,
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Real-World Case Studies",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate",
          "Lifetime TGS Community Access",
          "Chance to engage with Hiring Managers",
          "Comprehensive Learning Resources"
        ]
      },
      {
        name: "Group Discount",
        price: 15.99,
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Real-World Case Studies",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate",
          "Lifetime TGS Community Access",
          "Chance to engage with Hiring Managers",
          "Comprehensive Learning Resources"
        ]
      }
      
    ],
    Hyderabad: [ // Fixed city name here as well
      {
        name: "Early Bird offer",
        price: 15.99,
        features: ["Exclusive Hands-On Training with Mr Vimal Daga", "Real-World Case Studies", "Capstone Project integrating all your learnings", "Networking Opportunities with peers from top tech companies ", "Skill Validated Certificate", "Lifetime TGS Community Access", "Chance to engage with Hiring Managers", "Comprehensive Learning Resources"],
      },
      {
        name: "Pro",
        price: 15.99,
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Real-World Case Studies",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate",
          "Lifetime TGS Community Access",
          "Chance to engage with Hiring Managers",
          "Comprehensive Learning Resources"
        ]
      },
      {
        name: "Group Discount",
        price: 15.99,
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Real-World Case Studies",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate",
          "Lifetime TGS Community Access",
          "Chance to engage with Hiring Managers",
          "Comprehensive Learning Resources"
        ]
      }
      
    ],
    Chennai: [ // Fixed city name here as well
      {
        name: "Early Bird offer",
        price: 15.99,
        features: ["Exclusive Hands-On Training with Mr Vimal Daga", "Real-World Case Studies", "Capstone Project integrating all your learnings", "Networking Opportunities with peers from top tech companies ", "Skill Validated Certificate", "Lifetime TGS Community Access", "Chance to engage with Hiring Managers", "Comprehensive Learning Resources"],
      },
      {
        name: "Pro",
        price: 15.99,
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Real-World Case Studies",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate",
          "Lifetime TGS Community Access",
          "Chance to engage with Hiring Managers",
          "Comprehensive Learning Resources"
        ]
      },
      {
        name: "Group Discount",
        price: 15.99,
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Real-World Case Studies",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate",
          "Lifetime TGS Community Access",
          "Chance to engage with Hiring Managers",
          "Comprehensive Learning Resources"
        ]
      }
      
    ],
    Gurugram: [ // Fixed city name here as well
      {
        name: "Early Bird offer",
        price: 15.99,
        features: ["Exclusive Hands-On Training with Mr Vimal Daga", "Real-World Case Studies", "Capstone Project integrating all your learnings", "Networking Opportunities with peers from top tech companies ", "Skill Validated Certificate", "Lifetime TGS Community Access", "Chance to engage with Hiring Managers", "Comprehensive Learning Resources"],
      },
      {
        name: "Pro",
        price: 15.99,
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Real-World Case Studies",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate",
          "Lifetime TGS Community Access",
          "Chance to engage with Hiring Managers",
          "Comprehensive Learning Resources"
        ]
      },
      {
        name: "Group Discount",
        price: 15.99,
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Real-World Case Studies",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate",
          "Lifetime TGS Community Access",
          "Chance to engage with Hiring Managers",
          "Comprehensive Learning Resources"
        ]
      }
      
    ],
    Pune:[ // Fixed city name here as well
      {
        name: "Early Bird offer",
        price: 15.99,
        features: ["Exclusive Hands-On Training with Mr Vimal Daga", "Real-World Case Studies", "Capstone Project integrating all your learnings", "Networking Opportunities with peers from top tech companies ", "Skill Validated Certificate", "Lifetime TGS Community Access", "Chance to engage with Hiring Managers", "Comprehensive Learning Resources"],
      },
      {
        name: "Pro",
        price: 15.99,
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Real-World Case Studies",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate",
          "Lifetime TGS Community Access",
          "Chance to engage with Hiring Managers",
          "Comprehensive Learning Resources"
        ]
      },
      {
        name: "Group Discount",
        price: 15.99,
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Real-World Case Studies",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate",
          "Lifetime TGS Community Access",
          "Chance to engage with Hiring Managers",
          "Comprehensive Learning Resources"
        ]
      }
      
    ],
  };

  const cities = [
    { name: 'Bengaluru', image: Bengaluru.src.toString() },
    { name: 'Pune', image: Pune.src.toString() },
    { name: 'Hyderabad', image: Hyderabad.src.toString() },
    { name: 'Gurugram', image: Gurugram.src.toString() },
    { name: 'Mumbai', image: Mumbai.src.toString() },
    { name: 'Chennai', image: Chennai.src.toString() },
  ];

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-[#1E1E1E]">
      <h1 className="text-3xl md:text-3xl -mb-6 font-bold text-[#FFFF00]">
      Your Exclusive TGS Pass to Hands-On <span className='text-[#ff0000]'> Learning and Growth</span>
          </h1>
          <div className="h-1 w-48 bg-[#ff0000] mb-2 mx-auto"></div>
      {/* City Selection Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {cities.map((city) => (
          <Button
            key={city.name}
            onClick={() => setSelectedCity(city.name)}
            variant={selectedCity === city.name ? "default" : "outline"}
            className={`px-6 py-2 rounded-full transition-transform transform flex items-center justify-center ${selectedCity === city.name ? "bg-white text-black hover:text-black hover:bg-white" : "bg-transparent text-white border-white hover:bg-white hover:text-black"}`}
          >
            <img src={city.image} alt={city.name} className="w-6 h-6 mr-2 rounded-full " />
            {city.name}
          </Button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
        {cityPricing[selectedCity]?.map((tier, index) => {
          const gradientStyle = {
            background: index === 0
              ? 'radial-gradient(ellipse at top, #1FE1B4, #19B890)'
              : index === 1
              ? 'radial-gradient(ellipse at top, #B06AB3, #4568DC)'
              : 'radial-gradient(ellipse at top, #FF5858, #F09819)',
          };

          return (


<Card key={tier.name} className="w-full md:w-[280px] flex flex-col h-[450px] border-0 rounded-[32px] overflow-hidden shadow-none -mb-8">
  <CardHeader className="bg-white p-6 flex flex-col items-center justify-center h-[60px]">
    <h3 className="text-[24px] font-bold text-center -mb-2 ">{tier.name}</h3>
    <span className="text-xs text-[#FF6347] font-semibold animate-widen-narrow">
      {tier.name === "Early Bird offer" ? "(Applicable till 30th Nov, 2024)" :
        tier.name === "PRO" ? "Most Popular" : "(Applicable for a team of 3 or above)"}
    </span>
  </CardHeader>
  <div className="flex-grow flex flex-col justify-between" style={gradientStyle}>
    <CardContent className="text-white p-6 flex flex-col items-start justify-between flex-grow -mb-2">
      {tier.features.map((feature, idx) => (
        <p key={idx} className="flex items-center space-x-2 text-sm">
          <BadgeCheck className='inline text-xs' />
          <span>{feature}</span>
        </p>
      ))}
    </CardContent>
    <CardFooter className="p-6 pt-0 flex items-center justify-center">
      <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-[8px] py-3 text-base font-semibold">
        
        <span className="text-sm text-[#ffffff] font-semibold">
      {tier.name === "Early Bird offer" ? "INR 8,400 + Taxes" :
        tier.name === "Pro" ? "INR 10,400 + Taxes" : "Connect with our TGS Team"
        }
    </span>
      </Button>
    </CardFooter>
  </div>
</Card>
          );
        })}
      </div>
    </div>
  );
}
