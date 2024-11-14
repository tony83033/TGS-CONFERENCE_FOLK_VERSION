"use client";
import { Card, CardContent } from "@/components/ui/card";
import { CircleDot, Mic, LightbulbIcon, ShieldCheck, LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Level {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  lineColor: string;
}

export default function Levels(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const observers = useRef<IntersectionObserver[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const levels: Level[] = [
    {
      title: "Stutter to Steady",
      description:
        "You will eliminate all the 'umm' and 'aah' and start speaking steadily and confidently to everyone around you!",
      icon: CircleDot,
      gradient: "hover:bg-gradient-to-br from-blue-500/10 to-cyan-400/10",
      lineColor: "from-blue-500",
    },
    {
      title: "Steady to Clear",
      description:
        "You will be able to present your thoughts in a structured and impactful manner to make people like you - instantly!",
      icon: Mic,
      gradient: "hover:bg-gradient-to-br from-purple-500/10 to-pink-400/10",
      lineColor: "from-purple-500",
    },
    {
      title: "Clear to Clever",
      description:
        "People will remember you, trust you, respect you and will extend a hand of friendship towards you upfront!",
      icon: LightbulbIcon,
      gradient: "hover:bg-gradient-to-br from-yellow-500/10 to-orange-400/10",
      lineColor: "from-yellow-500",
    },
    {
      title: "Clever to Confident",
      description:
        "At this level, you will confidently lead conversations, win people over with your charisma, and truly master the art of communication!",
      icon: ShieldCheck,
      gradient: "hover:bg-gradient-to-br from-green-500/10 to-emerald-400/10",
      lineColor: "from-green-500",
    },
  ];

  useEffect(() => {
    // Clean up previous observers
    observers.current.forEach((observer) => observer.disconnect());
    observers.current = [];

    const cards = document.querySelectorAll<HTMLDivElement>(".level-card");

    cards.forEach((card, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: "-50% 0px -50% 0px",
        }
      );

      observer.observe(card);
      observers.current.push(observer);
    });

    return () => {
      observers.current.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 overflow-hidden">
      <div className="text-center mb-20 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Your Journey to becoming a{" "}
          <span className="relative inline-block">
            Master of Tech
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse" />
          </span>
        </h2>
      </div>

      <div className="relative">
        <div
          ref={timelineRef}
          className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b ${levels[activeIndex].lineColor} to-transparent rounded-full transition-all duration-500 ease-in-out`}
        />

        {levels.map((level, index) => (
          <div
            key={index}
            className={`relative mb-32 last:mb-0 ${
              index % 2 === 0 ? "text-right" : "text-left"
            } opacity-0 animate-fade-slide-up level-card`}
            style={{ animationDelay: `${index * 200}ms`, animationFillMode: "forwards" }}
          >
            <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
              <Card
                className={`w-[380px] ${
                  index % 2 === 0 ? "mr-10" : "ml-10"
                } transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl border border-white/10 backdrop-blur-sm ${level.gradient}`}
              >
                <CardContent className="p-8 relative overflow-hidden group">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-black">{level.title}</h3>
                    <p className="text-sm leading-relaxed text-black">{level.description}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col items-center z-10">
                <div
                  className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center mb-3 border border-white/20 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 ease-in-out hover:scale-110 ${
                    index === activeIndex ? "ring-2 ring-offset-2 ring-offset-black ring-white/50" : ""
                  }`}
                >
                  <level.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-white/80 bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm">
                  Level {index + 1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-slide-up {
          animation: fade-slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
