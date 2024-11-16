import React from 'react';
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
      title: "MERN Enthusiast ",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
      linkedin: "https://www.linkedin.com/in/akshatatiwari"
    },
    content: `Hey Folks... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus tenetur odio facilis praesentium soluta totam eos sapiente esse corrupti quasi sed tempora ut aut, ipsum laudantium quis. Quasi, provident eum assumenda culpa temporibus unde numquam natus. Ut placeat expedita ex repellendus modi id, deserunt voluptatem, temporibus amet atque, quia ullam aperiam officiis consequuntur. Placeat quaerat molestiae sequi laudantium, consectetur alias pariatur, ipsa natus tenetur cumque dicta iure animi `,
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
    content: `From Google searches...`,
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
];

export default function Component() {
  return (
    <div className="bg-[#000000] p-6 mx-auto">
      <div className="mx-auto" style={{ width: '920px' }}>
        <h2 className="text-white text-md">
          HEAR IT FROM THEM
        </h2>
        <h2 className="text-white text-3xl font-bold mb-10 mt-2">Ambitious People ❤️ <span className="text-[#ff0000]" >Linux World</span></h2>
        
        <div className="columns-2 md:columns-3 gap-6 space-y-4">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="relative overflow-hidden bg-[#ffffff] text-black shadow-md mb-4 break-inside-avoid"
            >
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
                  <a 
                    href={post.author.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Visit ${post.author.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-2 text-sm">
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>
                      {paragraph.split(' ').map((word, wordIndex) => {
                        if (word.startsWith('@') || word.startsWith('#')) {
                          return <span key={wordIndex} className="text-[#63B3ED]">{word} </span>;
                        }
                        return word + ' ';
                      })}
                    </p>
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-400">{post.timestamp}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
