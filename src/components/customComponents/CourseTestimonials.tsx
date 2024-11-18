// import React from 'react';
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/customComponents/subComponents/Avatar";
// import { Linkedin } from 'lucide-react';

// interface Post {
//   id: number;
//   author: {
//     name: string;
//     title: string;
//     avatar: string;
//     linkedin: string;
//   };
//   content: string;
//   timestamp: string;
// }

// const posts = [
//   {
//     id: 1,
//     author: {
//       name: "Bhupesh Choudhary",
//       title: "Cloud & Devops | AWS Serverless",
//       avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
//       linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7230205031726112768?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7230205031726112768%2C7231183542968324096%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287231183542968324096%2Curn%3Ali%3AugcPost%3A7230205031726112768%29"
//     },
//     content: `Vimal Daga sir: A Life-Changing 
// Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don’t just learn how to code or deploy solutions; we learn how to approach and solve life’s challenges with resilience and innovation.
// Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives.
// At Linux World, the environment is more than just conducive to learning; it’s transformative. It’s a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well.
// This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.
// `,
//     timestamp: "8 Mar 2023"
//   },
//   {
//     id: 2,
//     author: {
//       name: "Ayushi Jain",
//       title: "Branding | Marketing ",
//       avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
//       linkedin: "https://www.linkedin.com/in/ayushijain"
//     },
//     content: `From Google searches...`,
//     timestamp: "10 Mar 2023"
//   },
//   {
//     id: 3,
//     author: {
//       name: "Rajeev Kumar",
//       title: "Software Developer | Python",
//       avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
//       linkedin: "https://www.linkedin.com/in/rajeevkumar"
//     },
//     content: `Exploring the world of software development, excited about new tech stacks.`,
//     timestamp: "12 Mar 2023"
//   },
//   {
//     id: 4,
//     author: {
//       name: "Priya Sharma",
//       title: "Digital Marketer | SEO ",
//       avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
//       linkedin: "https://www.linkedin.com/in/priyasharma"
//     },
//     content: `SEO is all about finding the right opportunities for growth. #DigitalMarketing #SEO #ContentStrategy`,
//     timestamp: "14 Mar 2023"
//   },
//   {
//     id: 5,
//     author: {
//       name: "Vikram Singh",
//       title: "Web Developer | JavaScript",
//       avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
//       linkedin: "https://www.linkedin.com/in/vikramsingh"
//     },
//     content: `Building scalable web applications with React and Node.js.`,
//     timestamp: "16 Mar 2023"
//   },
//   {
//     id: 6,
//     author: {
//       name: "Sanya Gupta",
//       title: "Product Designer | UX/UI Expert",
//       avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
//       linkedin: "https://www.linkedin.com/in/sanyagupta"
//     },
//     content: `Designing meaningful experiences that make products delightful to use.`,
//     timestamp: "18 Mar 2023"
//   }
// ];

// export default function Component() {
//   return (
//     <div className="bg-[#000000] p-6 mx-auto">
//       <div className="mx-auto" style={{ width: '920px' }}>
//         <h2 className="text-white text-md">
//           HEAR IT FROM THEM
//         </h2>
//         <h2 className="text-white text-3xl font-bold mb-10 mt-2">Ambitious People ❤️ <span className="text-[#ff0000]" >Linux World</span></h2>
        
//         <div className="columns-2 md:columns-3 gap-6 space-y-4">
//           {posts.map((post) => (
//             <Card
//               key={post.id}
//               className="relative overflow-hidden bg-[#ffffff] text-black shadow-md mb-4 break-inside-avoid"
//             >
//               <CardHeader className="pb-2">
//                 <div className="flex items-center space-x-4">
//                   <Avatar className="h-12 w-12">
//                     <AvatarImage src={post.author.avatar} alt={post.author.name} />
//                   </Avatar>
//                   <div className="flex-grow">
//                     <h3 className="text-sm font-semibold">{post.author.name}</h3>
//                     <p className="text-xs text-gray-400">{post.author.title}</p>
//                   </div>
//                   {/* LinkedIn Icon with Link */}
//                   <a 
//                     href={post.author.linkedin} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     aria-label={`Visit ${post.author.name}'s LinkedIn profile`}
//                   >
//                     <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
//                   </a>
//                 </div>
//               </CardHeader>
//               <CardContent className="pt-2">
//                 <div className="space-y-2 text-sm">
//                   {post.content.split('\n\n').map((paragraph, index) => (
//                     <p key={index}>
//                       {paragraph.split(' ').map((word, wordIndex) => {
//                         if (word.startsWith('@') || word.startsWith('#')) {
//                           return <span key={wordIndex} className="text-[#63B3ED]">{word} </span>;
//                         }
//                         return word + ' ';
//                       })}
//                     </p>
//                   ))}
//                 </div>
//                 <p className="mt-4 text-xs text-gray-400">{post.timestamp}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/customComponents/subComponents/Avatar";
import { Linkedin } from 'lucide-react';

interface Post {
  id: number;
  author: {
    name: string;
    title: string;
    avatar: string;
    linkedin: string;
  };
  content: string;
  timestamp: string;
}

const posts = [
  {
    id: 1,
    author: {
      name: "Bhupesh Choudhary",
      title: "Cloud & Devops | AWS Serverless",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7230205031726112768?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7230205031726112768%2C7231183542968324096%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287231183542968324096%2Curn%3Ali%3AugcPost%3A7230205031726112768%29"
    },
    content: `Vimal Daga sir: A Life-Changing Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don’t just learn how to code or deploy solutions; we learn how to approach and solve life’s challenges with resilience and innovation. Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives. At Linux World, the environment is more than just conducive to learning; it’s transformative. It’s a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well. This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.`,
    timestamp: "8 Mar 2023"
  },
  {
        id: 2,
        author: {
          name: "Ayushi Jain",
          title: "Branding | Marketing ",
          avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
          linkedin: "https://www.linkedin.com/in/ayushijain"
        },
        content: ` environment is more than just conducive to learning; it’s transformative. It’s a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well.
This platform truly is a life-changing experience, Vimal Daga sir: A Life-Changing 
Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don’t just learn how to code or deploy solutions; we learn how to approach and solve life’s challenges with resilience and innovation.
Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives.
At Linux World, the environment is more than just conducive to learning; it’s transformative. It’s a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well.
This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.
 teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.
`,
        timestamp: "10 Mar 2023"
      },
      {
        id: 3,
        author: {
          name: "Rajeev Kumar",
          title: "Software Developer | Python",
          avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
          linkedin: "https://www.linkedin.com/in/rajeevkumar"
        },
        content: `Exploring the world of software development, excited about new tech stacks.`,
        timestamp: "12 Mar 2023"
      },
      {
        id: 4,
        author: {
          name: "Priya Sharma",
          title: "Digital Marketer | SEO ",
          avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
          linkedin: "https://www.linkedin.com/in/priyasharma"
        },
        content: `SEO is all about finding the right opportunities for growth. #DigitalMarketing #SEO #ContentStrategy`,
        timestamp: "14 Mar 2023"
      },
      {
        id: 5,
        author: {
          name: "Vikram Singh",
          title: "Web Developer | JavaScript",
          avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
          linkedin: "https://www.linkedin.com/in/vikramsingh"
        },
        content: `Building scalable web applications with React and Node.js.`,
        timestamp: "16 Mar 2023"
      },
      {
        id: 6,
        author: {
          name: "Sanya Gupta",
          title: "Product Designer | UX/UI Expert",
          avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
          linkedin: "https://www.linkedin.com/in/sanyagupta"
        },
        content: `Designing meaningful experiences that make products delightful to use.`,
        timestamp: "18 Mar 2023"
      }
  // Other posts...
];

export default function Component() {
  return (
    <div className="bg-[#000000] p-6 mx-auto">
      <div className="mx-auto" style={{ width: '920px' }}>
        <h2 className="text-white text-md">HEAR IT FROM THEM</h2>
        <h2 className="text-white text-3xl font-bold mb-10 mt-2">Ambitious People ❤️ <span className="text-[#ff0000]">Linux World</span></h2>

        <div className="columns-2 md:columns-3 gap-6 space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split content into words and check if it exceeds 100 words
  const words = post.content.split(' ');
  const truncatedContent = words.length > 80 ? words.slice(0, 100).join(' ') + '...' : post.content;

  const handleToggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Card className="relative overflow-hidden bg-[#ffffff] text-black shadow-md mb-4 break-inside-avoid">
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
          </Avatar>
          <div className="flex-grow">
            <h3 className="text-sm font-semibold">{post.author.name}</h3>
            <p className="text-xs text-gray-400">{post.author.title}</p>
          </div>
          {/* LinkedIn Icon with Link */}
          <a href={post.author.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${post.author.name}'s LinkedIn profile`}>
            <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
          </a>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-2 text-sm">
          {/* Show truncated content or full content based on `isExpanded` */}
          <p>
            {isExpanded ? (
              post.content
            ) : (
              truncatedContent
            )}
            {words.length > 100 && !isExpanded && (
              <span className="text-blue-500 cursor-pointer" onClick={handleToggleContent}> Read more</span>
            )}
            {isExpanded && (
              <span className="text-blue-500 cursor-pointer" onClick={handleToggleContent}> Show less</span>
            )}
          </p>
        </div>
        <p className="mt-4 text-xs text-gray-400">{post.timestamp}</p>
      </CardContent>
    </Card>
  );
};
