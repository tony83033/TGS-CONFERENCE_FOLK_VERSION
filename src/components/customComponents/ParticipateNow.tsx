import React from 'react';
import { Button } from '../ui/button'; /// Assuming Shadcn is correctly set up and Button component is available

const ParticipateNowButton = () => {
  return (
    // Container for the button with Tailwind's responsive utilities
    <div className="fixed bottom-0 left-0 w-full h-[60px] bg-[#ff0000] z-50 flex md:hidden lg:hidden items-center justify-center ">
     <a href="#buy-tickets"> <Button className="w-full h-full bg-[#ff0000] text-white font-bold text-lg hover:bg-red-700 focus:outline-none">
        Participate Now
      </Button>
      </a>
    </div>
  );
};

export default ParticipateNowButton;
