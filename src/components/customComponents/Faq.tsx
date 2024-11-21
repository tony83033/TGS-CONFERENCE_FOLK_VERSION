"use client"
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string | JSX.Element;
};

const faqContent: Record<string, FAQItem[]> = {
  curriculum: [
    {
      question: " What is the focus of the 3-day training?",
      answer:
        "The training will focus on hands-on learning and project-based training in key technology areas, guided by Vimal Daga Sir. Expect to dive deep into practical knowledge, advanced concepts, and industry-relevant skills, all aimed at making you industry-ready.",
    },
    {
      question: " What topics will be covered in the Kubernetes Edition : HandsOn training ?",
      answer: "The training covers microservices architecture, Docker containerization, and Kubernetes cluster management. You'll learn GitOps with Argo CD, monitoring with Prometheus and Grafana, and automate CI/CD pipelines using Jenkins and Argo CD. These topics ensure you master the full lifecycle of cloud-native application deployment and management."

    },
  ],
  timeCommitment: [
    {
      question: "What if I miss a day or a session?",
      answer:
        "We highly recommend not missing any sessions, as each day builds on the previous content. In case you miss a session, it would be difficult for us to help.",
    },
  {
    question: "Will there be hands-on projects?",
    answer:
      "Yes, the training includes a Capstone hands-on integration level project that will allow you to apply the skills you learn in real-world scenarios.",
  },
  {
    question: "Can I get one-on-one help during the training ?",
    answer:
      "Yes, our technical team will be available to provide one-on-one assistance throughout the training.",
  },
  {
    question: " What should I do if I have technical difficulties before or during the training ?",
    answer:
      "If you encounter any technical difficulties before or during the training, feel free to reach out to our technical team for assistance physically present at the venue",
  },
  {
    question: "Will any course materials or resources be provided?",
    answer:
      "Yes, reference documents will be provided for you to review and revise the material after the training",
  },
  {
    question: "What should I bring to the training?",
    answer:
      "Please bring your laptop to the training along with an active AWS account to fully participate in hands-on training",
  },
  ],
  selectionCriteria: [
    {
      question: "Who should attend this training?",
      answer:
        "This training is suitable for students, professionals, and tech enthusiasts who want to enhance their skills, work on real-world projects, and get in-depth knowledge from an expert like Vimal Daga Sir. Whether you're a beginner or have some experience, there will be valuable takeaways for everyone.",
    },
    {
      question: "Will there be any pre-requisites or prior knowledge required?",
      answer:
        "No prerequisites are required. Everything will be covered from scratch, and we’ll guide you through all the necessary concepts, even if you're new to Kubernetes, Docker, or DevOps practices.",
    },
    {
      question: "Is there any certificate provided at the end of the training?",
      answer:
        "Yes, a training certificate will be provided upon successful completion of the Capstone project at the end of the training.",
    },
    {
      question: "How can I stay updated about the upcoming editions of TGS in the near future?",
      answer:
        "You can stay updated by following Vimal Daga Sir on LinkedIn or the Linux World page on LinkedIn. Additionally, frequently check the website for the upcoming TGS editions details and announcements.",
    },
    {
      question: "What are the timings for each day of the training?",
      answer: "The training will start at 9:00 am every day.",
    },
    {
      question: "Will food and refreshments be provided?",
      answer: "Yes, we will be providing during the training.",
    },
    {
      question: "Can I connect with other attendees before the training?",
      answer:
        "Sure! You can join our Discord server, where you can connect with other attendees and engage in discussions before the training. In fact, networking & collaboration is the key USP of TGS India Tour by Mr Vimal Daga.",
    },
    {
      question: "Where will the training be held?",
      answer:
        "The training will be held in 6 different cities including Bengaluru, Pune, Mumbai, Hyderabad, Chennai & Gurugram. The first one would be in Bengaluru, followed by others in the initial 3 months of 2025.",
    },
  ],
  
};

export default function Faq() {
  const [selectedItem, setSelectedItem] = useState<keyof typeof faqContent>("curriculum");

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <h1 className="sm:text-3xl lg:text-3xl font-bold mb-8 sm:mb-12 text-center sm:text-left">
       <span className="text-white"> Frequently Asked </span><span className="text-[#ebff00]">Questions</span>
      </h1>

      {/* Main Grid */}
      <div className="grid gap-8 lg:grid-cols-[300px,1fr] lg:gap-12">
        {/* Sidebar */}
        <div className="space-y-4">
          {Object.keys(faqContent).map((key) => (
            <div
              key={key}
              className={`p-4 rounded-lg border shadow-sm cursor-pointer transition-all duration-300 
              ${selectedItem === key ? "bg-red-200 border-red-500 text-red-600" : "bg-[#FFFAF0] text-gray-600"}`}
              onClick={() => setSelectedItem(key as keyof typeof faqContent)}
            >
              <h2 className="text-md md:text-md font-medium">
                {key === "curriculum"
                  ? "Technical questions "
                  : key === "timeCommitment"
                  ? "Logistics and Support related questions:"
                  : "General questions"}
              </h2>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqContent[selectedItem].map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300  bg-[#FFFFF0]"
            >
              <AccordionTrigger className="text-base sm:text-md  text-left items-start font-semibold px-4 sm:px-6 py-3 sm:py-4 [&[data-state=open]]:text-[#ff0000]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-black px-4 sm:px-6 pb-3 sm:pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
