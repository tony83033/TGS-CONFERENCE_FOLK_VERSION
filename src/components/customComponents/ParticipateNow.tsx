import React from 'react';
import { Button } from '../ui/button'; /// Assuming Shadcn is correctly set up and Button component is available

const ParticipateNowButton = () => {
  return (
    // Container for the button with Tailwind's responsive utilities
    <div className="fixed bottom-0 left-0 w-full h-[70px] bg-blue-500 z-50 flex md:hidden lg:hidden items-center justify-center ">
      <Button className="w-full h-full bg-red-600 text-white font-bold text-lg hover:bg-red-700 focus:outline-none">
        Participate Now
      </Button>
    </div>
  );
};

export default ParticipateNowButton;
