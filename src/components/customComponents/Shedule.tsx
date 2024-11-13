"use client"
import React, { useState } from 'react';
import CourseSchedule from './subComponents/CourseShedule';
const EventSchedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <>
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Title with underline decoration */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#0A1150] mb-2">Event Schedule</h1>
        <div className="h-1 w-16 bg-red-500 mx-auto"></div>
      </div>

      {/* Day selector buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveDay(1)}
          className={`px-16 py-3 rounded-full text-white font-medium transition-colors ${
            activeDay === 1 ? 'bg-[#FF1F62]' : 'bg-[#0A1150]'
          }`}
        >
          Day 1
        </button>
        <button
          onClick={() => setActiveDay(2)}
          className={`px-16 py-3 rounded-full text-white font-medium transition-colors ${
            activeDay === 2 ? 'bg-[#0A1150]' : 'bg-[#FF1F62]'
          }`}
        >
          Day 2
        </button>
        <button
          onClick={() => setActiveDay(2)}
          className={`px-16 py-3 rounded-full text-white font-medium transition-colors ${
            activeDay === 2 ? 'bg-[#0A1150]' : 'bg-[#FF1F62]'
          }`}
        >
          Day 3
        </button>
      </div>

      {/* Description text */}
      <p className="text-center text-gray-700 italic max-w-3xl mx-auto">
        Freedom from guilt, permission granted without restriction, and freedom from corruption allow for relief and satisfaction. His needs demand integrity; he wishes to work with diligence and transparency
      </p>
    </div>
    <CourseSchedule></CourseSchedule>
    </>
  );
};

export default EventSchedule;