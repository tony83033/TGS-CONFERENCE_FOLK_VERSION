


"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Mumbai from "../../../src/app/public/assets/cityCards/Mumbai.jpg";
import Pune from "../../../src/app/public/assets/cityCards/pune1.jpg";
import Hyderabad from "../../../src/app/public/assets/cityCards/hyderabad.jpg";
import Bengaluru from "../../../src/app/public/assets/cityCards/bangalore.jpg";
import Gurugram from "../../../src/app/public/assets/cityCards/gurgaon1.jpg";
import Chennai from "../../../src/app/public/assets/cityCards/Chennai.jpg";

import { BadgeCheck } from "lucide-react";

interface PricingTier {
  name: string;
  features: string[];
  paymentLink: string;
}

interface CityPricing {
  [key: string]: PricingTier[];
}

export default function Component() {
  const [selectedCity, setSelectedCity] = useState("Bengaluru");

  const cityPricing: CityPricing = {
    Mumbai: [
      {
        name: "Early Bird offer",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "https://rzp.io/l/tsqJE1QU",
      },
      {
        name: "Regular Fees",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "https://rzp.io/l/mI9qfFM",
      },
      {
        name: "Group Discount",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "",
      },
    ],
    Bengaluru: [
      {
        name: "Early Bird offer",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "", // Empty for closed registrations
      },
      {
        name: "Regular Fees",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "https://rzp.io/l/4sPDgKAY",
      },
      {
        name: "Group Discount",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "",
      },
    ],
    Hyderabad: [
      {
        name: "Early Bird offer",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "https://rzp.io/l/gzReyTr",
      },
      {
        name: "Regular Fees",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "https://rzp.io/l/RBsTL3lv",
      },
      {
        name: "Group Discount",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "",
      },
    ],
    Chennai: [
      {
        name: "Early Bird offer",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "https://rzp.io/l/c9UWELvs",
      },
      {
        name: "Regular Fees",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "https://rzp.io/l/cEVo1d6w",
      },
      {
        name: "Group Discount",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "",
      },
    ],
    Gurugram: [
      {
        name: "Early Bird offer",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "https://rzp.io/l/XWnE9k2",
      },
      {
        name: "Regular Fees",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "https://rzp.io/l/yXxDHaPF",
      },
      {
        name: "Group Discount",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "",
      },
    ],
    Pune: [
      {
        name: "Early Bird offer",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "https://rzp.io/l/oaC4SfJ",
      },
      {
        name: "Regular Fees",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "https://rzp.io/l/7RgUMtH",
      },
      {
        name: "Group Discount",
        features: [
          "Exclusive Hands-On Training with Mr Vimal Daga",
          "Capstone Project integrating all your learnings",
          "Networking Opportunities with peers from top tech companies",
          "Skill Validated Certificate & TGS Community access",
          "Chance to engage with Hiring Managers",
        ],
        paymentLink: "",
      },
    ],
  };

  const cities = [
    { name: "Bengaluru", image: Bengaluru.src.toString() },
    { name: "Pune", image: Pune.src.toString() },
    { name: "Hyderabad", image: Hyderabad.src.toString() },
    { name: "Gurugram", image: Gurugram.src.toString() },
    { name: "Mumbai", image: Mumbai.src.toString() },
    { name: "Chennai", image: Chennai.src.toString() },
  ];

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-[#1E1E1E]" id="buy-tickets">
      <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white text-center -mb-4">
        Your Exclusive TGS Pass to Hands-On
        <span className="text-[#ebff00]"> Learning and Growth</span>
      </h1>
      <div className="h-1 w-16 bg-red-500 mb-2 mx-auto"></div>

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
              className="w-6 h-6 mr-2 rounded-full"
            />
            {city.name}
          </Button>
        ))}
      </div>

      {/* Early Bird Closed Banner for Bengaluru */}
      {selectedCity === "Bengaluru" && (
        <div className="text-red-600 font-bold text-lg mb-4 animate-pulse">
          ⚠️ Early Bird Registrations Closed for Bengaluru
        </div>
      )}

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
        {cityPricing[selectedCity]?.map((tier, index) => {
          const gradientStyle = {
            background:
              index === 0
                ? "radial-gradient(ellipse at top, #1FE1B4, #19B890)"
                : index === 1
                ? "radial-gradient(ellipse at top, #B06AB3, #4568DC)"
                : "radial-gradient(ellipse at top, #FF5858, #F09819)",
          };

          return (
            <Card
              key={tier.name}
              className="w-full sm:w-[320px] md:w-[280px] flex flex-col h-[450px] border-0 rounded-[32px] overflow-hidden shadow-none"
            >
              <CardHeader className="bg-white p-6 flex flex-col items-center justify-center h-[60px]">
                <h3 className="text-[24px] font-bold text-center -mb-2">
                  {tier.name}
                </h3>
                <span className="text-xs text-[#FF6347] font-semibold animate-widen-narrow">
                  {tier.name === "Early Bird offer"
                    ? "Applicable till 30th Dec, 2024"
                    : tier.name === "Regular Fees"
                    ? "Applicable from 02th Jan, 2025"
                    : "Applicable for a team of 3 or above"}
                </span>
              </CardHeader>
              <div
                className="flex-grow flex flex-col justify-between"
                style={gradientStyle}
              >
                <CardContent className="text-white p-6 flex flex-col items-start justify-between flex-grow -mb-2">
                  {tier.features.map((feature, idx) => (
                    <p key={idx} className="flex items-left space-x-2 text-sm">
                      <BadgeCheck className="inline text-xs" />
                      <span>{feature}</span>
                    </p>
                  ))}
                </CardContent>
                <CardFooter className="p-6 pt-0 flex items-center justify-center">
                  <Button
                    className={`w-full bg-black hover:shadow-white hover:bg-black hover:shadow-md text-white rounded-[8px] py-3 text-base font-semibold ${
                      selectedCity === "Bengaluru" && tier.name === "Early Bird offer"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={() => {
                      if (selectedCity === "Bengaluru" && tier.name === "Early Bird offer") {
                        return; // Disable click only for Bengaluru Early Bird
                      }
                      if (tier.name === "Early Bird offer") {
                        window.open(tier.paymentLink, "_blank");
                      } else if (tier.name === "Regular Fees") {
                        window.open(tier.paymentLink, "_blank");
                      } else {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <span className="text-sm text-[#ffffff] font-semibold">
                      {selectedCity === "Bengaluru" && tier.name === "Early Bird offer"
                        ? "Registrations Closed"
                        : tier.name === "Early Bird offer"
                        ? "₹ 8,400 + Taxes "
                        : tier.name === "Regular Fees"
                        ? "₹ 10,400 + Taxes"
                        : "Connect with our TGS Team"}
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