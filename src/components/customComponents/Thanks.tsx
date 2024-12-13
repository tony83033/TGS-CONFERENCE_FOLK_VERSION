'use client'

import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CongratulationsPage() {
  return (
    <>
    <div className="min-h-screen bg-black text-white">
      <header className="bg-[#EBFF00] text-center py-2">
        <p className="text-sm text-black font-bold">
          🎉 Congratulations!! Wohooo.... [Your Ticket Has Been Confirmed!] ❤️
        </p>
      </header>
      <main className="flex flex-col items-center justify-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-2">
          Congratulations!! <span role="img" aria-label="party">🥳</span>
        </h1>
        <h2 className="text-2xl font-bold mb-4">
          Your Seat For This <span className="underline">&quot;Once In A Decade&quot;</span> TGS Event Is Saved! ❤️
        </h2>
        <p className="text-lg mb-6">
          NOTE: These 3 Days Could Easily Be Worth A Crore For You!
        </p>
        <a href="https://forms.gle/d9h8tVspe6adx7WV6" className="bg-[#EBFF00] hover:bg-[#EBFF00] text-black font-bold py-2 px-4 rounded-lg mb-8">
        Fill Google  Form
        </a>
        <div className="flex gap-4">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-400">DATE</p>
            <p className="text-lg font-bold">10 Jan - 12 Jan, 2025</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-400">TIME</p>
            <p className="text-lg font-bold">9:00 am to 7:00 pm IST</p>
          </div>
        </div>
      </main>

     {/* Message  */}
<div className="min-h-screen bg-black text-white p-8 pt-0">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-xl font-bold mb-4">
          <span className="italic underline">Message For You From the Mentor - Mr Vimal Daga :
          :</span>
        </h1>
        <p className="mb-2">Welcome to Indias Biggest Technical Training Revolution - TGS (The Growth String Initiative)
        </p>
        <p className="mb-2">Learn - Build - Network - Chance to get Hired        .</p>
        <p className="mb-2">This is going to be bigger        .</p>

        <h2 className="text-lg font-bold mb-4 underline">GOAL IS SIMPLE!!</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" />
            Learn by Doing : In this edition, Complete Kubernetes from Fundamentals to Real World Challenges

          </li>
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" />
            Capstone Project integrating the technical learnings over 3 days

          </li>
          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" />
            Meet & Learn from Industry Experts working on the specific technology with real use case

          </li>

          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" />
            Get Complete Industry Insights on Kubernetes


          </li>

          <li className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" />
            Get an opportunity to meet Talent Acquisition Heads 



          </li>

       

        
        </ul>

        <h2 className='text-lg font-bold mb-4 mt-4'>And we are planning to MASSIVELY OVER DELIVER on this one!!
No matter what  SHOW UP for TGS Bengaluru!!
</h2>
      </div>
    </div>
    </div>

    </>


  )
}

