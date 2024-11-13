// "use client"
// import React, { useState } from "react";

// interface FaqItem {
//   question: string;
//   answer: string;
// }

// const faqData: FaqItem[] = [
//   {
//     question: "How can I apply for an Aadhaar card?",
//     answer:
//       "You can apply for an Aadhaar card by visiting your nearest Aadhaar enrollment center with the necessary documents like proof of identity and address. Once there, you need to fill out the application form, get your biometric data captured, and submit your documents.",
//   },
//   {
//     question: "What is the process to renew my passport in India?",
//     answer:
//       "To renew your passport, visit the official Passport Seva Kendra website, fill out the renewal application form, book an appointment, and visit the Passport Seva Kendra with your existing passport and necessary documents on the appointment date.",
//   },
//   {
//     question: "How can I check my train's PNR status?",
//     answer:
//       "You can check your train's PNR status on the official Indian Railways website or by sending an SMS with your PNR number to 139. Additionally, several apps and websites provide PNR status updates in real-time.",
//   },
//   {
//     question: "What are the best ways to save taxes in India?",
//     answer:
//       "Some common ways to save taxes in India include investing in tax-saving instruments like Public Provident Fund (PPF), Equity Linked Savings Schemes (ELSS), National Savings Certificate (NSC), and claiming deductions under Section 80C, 80D, etc.",
//   },
//   {
//     question: "How can I pay my electricity bill online?",
//     answer:
//       "To pay your electricity bill online, you can visit your electricity provider's official website or use online payment apps like Paytm, Google Pay, or PhonePe. Select the 'Electricity Bill' option, enter your details, and complete the payment.",
//   },
//   {
//     question: "What are some popular tourist destinations in India?",
//     answer:
//       "India has many popular tourist destinations, including the Taj Mahal in Agra, Jaipur's forts, Goa beaches, Kerala's backwaters, Ladakh's landscapes, and the spiritual city of Varanasi, among many others.",
//   },
// ];

// const FaqAccordion: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   const toggleAccordion = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="max-w-4xl mx-auto my-8 p-4">
//       <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
//       {faqData.map((item, index) => (
//         <div
//           key={index}
//           className={`border rounded-lg mb-4 ${
//             activeIndex === index ? "bg-red-50 border-red-300" : "border-gray-300"
//           }`}
//         >
//           <button
//             onClick={() => toggleAccordion(index)}
//             className={`w-full flex justify-between items-center p-4 text-left font-semibold ${
//               activeIndex === index ? "text-red-600" : "text-gray-800"
//             }`}
//           >
//             {item.question}
//             <span
//               className={`ml-2 transform transition-transform ${
//                 activeIndex === index ? "rotate-180" : ""
//               }`}
//             >
//               ▼
//             </span>
//           </button>
//           {activeIndex === index && (
//             <div className="p-4 text-gray-700">
//               <p>{item.answer}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FaqAccordion;





"use client"

import React, { useState } from "react"

interface FaqItem {
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    question: "I don't know anything about Coding, is this batch good for me?",
    answer: "Yes, this batch is designed for beginners. We start from the basics and gradually progress to more advanced topics. No prior coding experience is required.",
  },
  {
    question: "Do I need to be a Computer Science student to take up this batch?",
    answer: "No, you don't need to be a Computer Science student. This batch is open to students from all backgrounds who are interested in learning to code.",
  },
  {
    question: "How will I ask my doubts?",
    answer: "You can ask your doubts during live sessions, through our dedicated doubt resolution platform, or in our community discussion forums.",
  },
  {
    question: "What is the batch duration?",
    answer: "The batch duration is typically 12 weeks, with regular classes and practical sessions scheduled throughout the week.",
  },
  {
    question: "Is the batch in Hindi or English?",
    answer: "Classes are conducted in both Hindi and English (bilingual) to ensure all students can learn comfortably.",
  },
  {
    question: "How long is the batch access?",
    answer: "You get lifetime access to the recorded lectures and course materials after enrolling in the batch.",
  },
  {
    question: "Will there be a Certificate of completion?",
    answer: "Yes, upon successful completion of the batch and assignments, you will receive a certificate of completion.",
  },
  {
    question: "Is there a batch schedule?",
    answer: "Yes, we have a structured batch schedule with fixed class timings. The detailed schedule will be shared upon enrollment.",
  },
]

const FaqAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="w-4xl max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-2 text-blue-800">Frequently Asked Questions</h2>
      {/* <p className="text-base text-blue-600 text-center mb-6"></p> */}
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 last:border-b-0">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-4 text-left text-gray-900 hover:text-blue-800 transition-colors duration-200"
            aria-expanded={activeIndex === index}
          >
            <span className="font-medium">{item.question}</span>
            <span
              className={`ml-2 text-lg transition-transform transform ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {activeIndex === index && (
            <div className="pb-4 pl-6 pr-2 text-gray-700">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FaqAccordion
