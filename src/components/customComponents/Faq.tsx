"use client"
import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "How can I apply for an Aadhaar card?",
    answer:
      "You can apply for an Aadhaar card by visiting your nearest Aadhaar enrollment center with the necessary documents like proof of identity and address. Once there, you need to fill out the application form, get your biometric data captured, and submit your documents.",
  },
  {
    question: "What is the process to renew my passport in India?",
    answer:
      "To renew your passport, visit the official Passport Seva Kendra website, fill out the renewal application form, book an appointment, and visit the Passport Seva Kendra with your existing passport and necessary documents on the appointment date.",
  },
  {
    question: "How can I check my train's PNR status?",
    answer:
      "You can check your train's PNR status on the official Indian Railways website or by sending an SMS with your PNR number to 139. Additionally, several apps and websites provide PNR status updates in real-time.",
  },
  {
    question: "What are the best ways to save taxes in India?",
    answer:
      "Some common ways to save taxes in India include investing in tax-saving instruments like Public Provident Fund (PPF), Equity Linked Savings Schemes (ELSS), National Savings Certificate (NSC), and claiming deductions under Section 80C, 80D, etc.",
  },
  {
    question: "How can I pay my electricity bill online?",
    answer:
      "To pay your electricity bill online, you can visit your electricity provider's official website or use online payment apps like Paytm, Google Pay, or PhonePe. Select the 'Electricity Bill' option, enter your details, and complete the payment.",
  },
  {
    question: "What are some popular tourist destinations in India?",
    answer:
      "India has many popular tourist destinations, including the Taj Mahal in Agra, Jaipur's forts, Goa beaches, Kerala's backwaters, Ladakh's landscapes, and the spiritual city of Varanasi, among many others.",
  },
];

const FaqAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`border rounded-lg mb-4 ${
            activeIndex === index ? "bg-red-50 border-red-300" : "border-gray-300"
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full flex justify-between items-center p-4 text-left font-semibold ${
              activeIndex === index ? "text-red-600" : "text-gray-800"
            }`}
          >
            {item.question}
            <span
              className={`ml-2 transform transition-transform ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {activeIndex === index && (
            <div className="p-4 text-gray-700">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
