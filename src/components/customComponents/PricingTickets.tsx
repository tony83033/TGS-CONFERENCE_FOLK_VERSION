"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Mumbai from "../../../src/app/public/assets/cityIcons/mumbai-icon.png"
import Bangalore from "../../../src/app/public/assets/cityIcons/banglore-icon.png"

interface PricingTier {
  name: string;
  price: number;
  features: string[];
}

interface CityPricing {
  [key: string]: PricingTier[];
}

export default function Component() {
  const [selectedCity, setSelectedCity] = useState('Bangaluru');

  const cityPricing: CityPricing = {
    Mumbai: [
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
    ],
    Bangaluru: [
      {
        name: "STARTER",
        price: 12.99,
        features: ["BASIC SUPPORT", "5GB STORAGE"],
      },
      {
        name: "BUSINESS",
        price: 22.99,
        features: ["PRIORITY SUPPORT", "20GB STORAGE", "API ACCESS"],
      },
      {
        name: "ENTERPRISE",
        price: 32.99,
        features: ["24/7 SUPPORT", "UNLIMITED STORAGE", "API ACCESS", "CUSTOM SOLUTIONS"],
      },
    ],
    Hyderabad: [
      {
        name: "LITE",
        price: 14.99,
        features: ["EMAIL SUPPORT", "BASIC FEATURES"],
      },
      {
        name: "PLUS",
        price: 24.99,
        features: ["PRIORITY SUPPORT", "ADVANCED FEATURES", "ANALYTICS"],
      },
      {
        name: "MAX",
        price: 34.99,
        features: ["24/7 SUPPORT", "ALL FEATURES", "ANALYTICS", "CUSTOM REPORTS"],
      },
    ],
    Chennai: [
      {
        name: "ESSENTIAL",
        price: 13.99,
        features: ["COMMUNITY SUPPORT", "CORE FEATURES"],
      },
      {
        name: "ADVANCED",
        price: 23.99,
        features: ["EMAIL SUPPORT", "ADVANCED FEATURES", "REAL-TIME UPDATES"],
      },
      {
        name: "ULTIMATE",
        price: 33.99,
        features: ["PREMIUM SUPPORT", "ALL FEATURES", "REAL-TIME UPDATES", "PRIORITY ACCESS"],
      },
    ],
    Gurugram: [
      {
        name: "BASIC",
        price: 16.99,
        features: ["BASIC SUPPORT", "STANDARD FEATURES"],
      },
      {
        name: "STANDARD",
        price: 26.99,
        features: ["BUSINESS SUPPORT", "PREMIUM FEATURES", "ANALYTICS"],
      },
      {
        name: "PREMIUM",
        price: 36.99,
        features: ["DEDICATED SUPPORT", "ALL FEATURES", "ANALYTICS", "WHITE LABEL"],
      },
    ],
    Pune: [
      {
        name: "STARTER",
        price: 11.99,
        features: ["COMMUNITY SUPPORT", "BASIC ACCESS"],
      },
      {
        name: "GROWTH",
        price: 21.99,
        features: ["BUSINESS SUPPORT", "FULL ACCESS", "ANALYTICS"],
      },
      {
        name: "SCALE",
        price: 31.99,
        features: ["PREMIUM SUPPORT", "UNLIMITED ACCESS", "ANALYTICS", "CUSTOM INTEGRATION"],
      },
    ],
  };

  const cities = [
    { name: 'Bangaluru', image: Mumbai.src.toString() },
    { name: 'Pune', image: Bangalore.src.toString() },
    { name: 'Hyderabad', image: Mumbai.src.toString() },
    { name: 'Gurugram', image: Mumbai.src.toString() },
    { name: 'Mumbai', image: Mumbai.src.toString() },
    { name: 'Chennai', image: Mumbai.src.toString() },
  ];

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-[#1E1E1E]">
      {/* City Selection Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {cities.map((city) => (
          <Button
            key={city.name}
            onClick={() => setSelectedCity(city.name)}
            variant={selectedCity === city.name ? "default" : "outline"}
            className={`px-6 py-2 rounded-full transition-transform transform flex items-center justify-center ${
              selectedCity === city.name
                ? "bg-white text-black hover:text-black hover:bg-white"
                : "bg-transparent text-white border-white hover:bg-white hover:text-black"
            }`}
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-6 h-6 mr-2 " // Adjust the image size as needed
            />
            {city.name}
          </Button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
        {cityPricing[selectedCity].map((tier, index) => {
          const gradientStyle = {
            background: index === 0
              ? 'radial-gradient(ellipse at top, #1FE1B4, #19B890)'
              : index === 1
              ? 'radial-gradient(ellipse at top, #B06AB3, #4568DC)'
              : 'radial-gradient(ellipse at top, #FF5858, #F09819)'
          };

          return (
            <Card key={tier.name} className="w-full md:w-[280px] flex flex-col h-[450px] border-0 rounded-[32px] overflow-hidden shadow-none">
              <CardHeader className="bg-white p-6 flex flex-col items-center justify-center h-1/6">
                <h3 className="text-[28px] font-bold text-center">{tier.name}</h3>
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
                  Participate Now
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
