// "use client"

// import React, { useState } from 'react';
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
//     content: `Vimal Daga sir: A Life-Changing Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don't just learn how to code or deploy solutions; we learn how to approach and solve life's challenges with resilience and innovation. Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives. At Linux World, the environment is more than just conducive to learning; it's transformative. It's a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well. This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.`,
//     timestamp: "3 month ago"
//   },
//   {
//     id: 2,
//     author: {
//       name: "Mohit Agarwal",
//       title: "Student at NIT Kurukshetra",
//       avatar: "https://media.licdn.com/dms/image/v2/D5603AQFfS5ahFvJB2Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681871987732?e=1737590400&v=beta&t=KvSzXCTu8tJExrwm1a7XibG7Xgy5aeVHfUb82IvjNJc",
//       linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7239134220567130113/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7239134220567130113%2C7239872668127141888%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287239872668127141888%2Curn%3Ali%3Aactivity%3A7239134220567130113%29"
//     },
//     content: `The workshop was incredibly beneficial! I'm excited about the practical applications of CI/CD and AWS services. I plan to start by working on a personal project to implement a deployment pipeline and use AWS CodeDeploy for automation. Collaborating with others will definitely enhance the learning experience, and I'm eager to stay updated with new DevOps trends to improve my skills continuously.
// I'm really looking forward to applying these insights!
// `,
//     timestamp: "2 month ago"
//   },
//   {
//     id: 3,
//     author: {
//       name: "Mallesh Gangadhar",
//       title: "--",
//       avatar: "https://media.licdn.com/dms/image/v2/D5635AQFvYLlZaIHe_A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1713248954215?e=1732604400&v=beta&t=VIKFm-5HxGuyAnBYDU3_H-8noM8GvvZ7X7ovuYYcsmc",
//       linkedin: "https://www.linkedin.com/in/rajeevkumar"
//     },
//     content: `
// Superrrrrrrb Training Enjoyed! This Linux Essentials workshop with Vimal Sir was superb, The workshop provided a solid foundation, covering key concepts like processes, users, file operations, and essential commands. It also gave a glimpse into the power and versatility of Linux for solving real-world problems. I'm excited to learn next skills on Linux with AI.
// to enhance my IT skills in Linux! Thanks`,
//     timestamp: "2 month ago"
//   },
//   {
//     id: 4,
//     author: {
//       name: "Alok Kumar Singh ",
//       title: "Web Developer (Angular) | Data Analyst ",
//       avatar: "https://media.licdn.com/dms/image/v2/D5603AQFGCjRM6gI1zg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724789778105?e=1737590400&v=beta&t=sm-JTK9zKq4_tbEEKi1nEZvWEa4fL-RoAH7KeL86jtk",
//       linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7239135472650719232/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7239135472650719232%2C7239897238255140867%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287239897238255140867%2Curn%3Ali%3Aactivity%3A7239135472650719232%29"
//     },
//     content: `
// Attending the System Design workshop by Vimal Daga Sir was a great learning experience. He explained complex topics like scalability, fault tolerance, and load balancing in simple terms, making it easy to understand. The examples he gave helped us see how these concepts are used in real projects. I learned how to make systems more efficient and reliable by balancing important factors like performance and cost. I'm excited to apply these new skills in my future projects!`,
//     timestamp: "3 week ago"
//   },
//   {
//     id: 5,
//     author: {
//       name: "Aakash Kathunia",
//       title: "Technical Architect at HCLTech | GenAI ",
//       avatar: "https://media.licdn.com/dms/image/v2/D5603AQGJi9pe0O-O8A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723740692945?e=1737590400&v=beta&t=y2ONfXKp0z5KkZJRcTtg_e1iVUh8rFUn3JxaRqqFOBg",
//       linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7261969293926387712/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7261969293926387712%2C7262831901864796160%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287262831901864796160%2Curn%3Ali%3Aactivity%3A7261969293926387712%29"
//     },
//     content: `Vimal Sir is outstanding while teaching complex and advanced topics, as he teaches us in such a way that even someone without technical background one can easily grasp and this is the main reason I have been following him since long.

// Before his session, I had tried to understand DevSecOps through various technical channels, but I didn't get a clear picture. However, in just initial hours of Vimal Sir's session, he made the concept very much clearer. Then, over the next two hours, he simplified DevSecOps further, helping me gain valuable insights that sparked my interest in exploring the topic more deeply.

// I am Thankful to Vimal Sir for in-depth course on DevSecOps and looking more indepth session from him, and I'm grateful for his teachings for current and upcoming valuable training sessions.`,
//     timestamp: "1 week ago"
//   },
//   {
//     id: 6,
//     author: {
//       name: "Subeesh Raja",
//       title: "Cloud Consultant at Confidential",
//       avatar: "https://media.licdn.com/dms/image/v2/C5603AQHV3OxOT_gtsg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1621307230256?e=1737590400&v=beta&t=gSNib_814lnkHsNzqbPiiMZFas6K64NGoCGqc9lNS08",
//       linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7261969293926387712/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7261969293926387712%2C7262301804594438145%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287262301804594438145%2Curn%3Ali%3Aactivity%3A7261969293926387712%29"
//     },
//     content: `Vimal Sir has an exceptional ability to teach complex and advanced topics in a way that even someone with no technical background can easily understand. That's the main reason I have been following him and his teachings since 2020.

// Before attending his session, I had tried to understand DevSecOps through YouTube videos, but I couldn't get a clear picture. However, in just the first 30 minutes of Vimal Sir's session, he made the concept much clearer. Then, over the next two hours, he simplified DevSecOps further, helping me gain valuable insights that sparked my interest in exploring the topic more deeply.

// I am sure Vimal Sir will come up with another in-depth course on DevSecOps soon, and I'm incredibly grateful for everything he has taught me so far and all that he will teach in the future.`,
//     timestamp: "2 week ago"
//   }
// ];

// export default function Component() {
//   return (
//     <div className="bg-[#000000] p-4 sm:p-6 mx-auto">
//       <div className="max-w-[920px] mx-auto">
//         <h2 className="text-white text-sm sm:text-md">HEAR IT FROM THEM</h2>
//         <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 mt-2">Ambitious People ❤️ <span className="text-[#ebff00]">TGS</span></h2>

//         <div className="sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-0">
//           {posts.map((post) => (
//             <div key={post.id} className="break-inside-avoid mb-4 sm:mb-6">
//               <PostCard post={post} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// interface PostCardProps {
//   post: Post;
// }

// const PostCard: React.FC<PostCardProps> = ({ post }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const words = post.content.split(' ');
//   const truncatedContent = words.length > 80 ? words.slice(0, 80).join(' ') + '...' : post.content;

//   const handleToggleContent = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   return (
//     <Card className="bg-[#ffffff] text-black mt-4 shadow-md w-full">
//       <CardHeader className="pb-2">
//         <div className="flex items-center space-x-3 sm:space-x-4">
//           <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
//             <AvatarImage src={post.author.avatar} alt={post.author.name} />
//             <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
//           </Avatar>
//           <div className="flex-grow">
//             <h3 className="text-sm font-semibold">{post.author.name}</h3>
//             <p className="text-xs text-gray-400">{post.author.title}</p>
//           </div>
//           <a href={post.author.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${post.author.name}'s LinkedIn profile`}>
//             <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
//           </a>
//         </div>
//       </CardHeader>
//       <CardContent className="pt-2">
//         <div className="space-y-2 text-xs sm:text-sm">
//           <p>
//             {isExpanded ? post.content : truncatedContent}
//             {words.length > 80 && (
//               <span 
//                 className="text-blue-500 cursor-pointer ml-1" 
//                 onClick={handleToggleContent}
//               >
//                 {isExpanded ? 'Show less' : 'Read more'}
//               </span>
//             )}
//           </p>
//         </div>
//         <p className="mt-4 text-xs text-gray-400">{post.timestamp}</p>
//       </CardContent>
//     </Card>
//   );
// };







"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
    content: `Vimal Daga sir: A Life-Changing Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don't just learn how to code or deploy solutions; we learn how to approach and solve life's challenges with resilience and innovation. Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives. At Linux World, the environment is more than just conducive to learning; it's transformative. It's a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well. This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.`,
    timestamp: "3 month ago"
  },
  {
    id: 2,
    author: {
      name: "Bhupesh Choudhary",
      title: "Cloud & Devops | AWS Serverless",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7230205031726112768?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7230205031726112768%2C7231183542968324096%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287231183542968324096%2Curn%3Ali%3AugcPost%3A7230205031726112768%29"
    },
    content: `Vimal Daga sir: A Life-Changing Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don't just learn how to code or deploy solutions; we learn how to approach and solve life's challenges with resilience and innovation. Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives. At Linux World, the environment is more than just conducive to learning; it's transformative. It's a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well. This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.`,
    timestamp: "3 month ago"
  },
  {
    id: 3,
    author: {
      name: "Bhupesh Choudhary",
      title: "Cloud & Devops | AWS Serverless",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7230205031726112768?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7230205031726112768%2C7231183542968324096%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287231183542968324096%2Curn%3Ali%3AugcPost%3A7230205031726112768%29"
    },
    content: `Vimal Daga sir: A Life-Changing Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don't just learn how to code or deploy solutions; we learn how to approach and solve life's challenges with resilience and innovation. Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives. At Linux World, the environment is more than just conducive to learning; it's transformative. It's a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well. This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.`,
    timestamp: "3 month ago"
  },
  {
    id: 4,
    author: {
      name: "Bhupesh Choudhary",
      title: "Cloud & Devops | AWS Serverless",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7230205031726112768?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7230205031726112768%2C7231183542968324096%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287231183542968324096%2Curn%3Ali%3AugcPost%3A7230205031726112768%29"
    },
    content: `Vimal Daga sir: A Life-Changing Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don't just learn how to code or deploy solutions; we learn how to approach and solve life's challenges with resilience and innovation. Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives. At Linux World, the environment is more than just conducive to learning; it's transformative. It's a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well. This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.`,
    timestamp: "3 month ago"
  },
  {
    id: 5,
    author: {
      name: "Bhupesh Choudhary",
      title: "Cloud & Devops | AWS Serverless",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7230205031726112768?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7230205031726112768%2C7231183542968324096%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287231183542968324096%2Curn%3Ali%3AugcPost%3A7230205031726112768%29"
    },
    content: `Vimal Daga sir: A Life-Changing Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don't just learn how to code or deploy solutions; we learn how to approach and solve life's challenges with resilience and innovation. Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives. At Linux World, the environment is more than just conducive to learning; it's transformative. It's a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well. This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.`,
    timestamp: "3 month ago"
  },
  {
    id: 6,
    author: {
      name: "Bhupesh Choudhary",
      title: "Cloud & Devops | AWS Serverless",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7230205031726112768?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7230205031726112768%2C7231183542968324096%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287231183542968324096%2Curn%3Ali%3AugcPost%3A7230205031726112768%29"
    },
    content: `Vimal Daga sir: A Life-Changing Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don't just learn how to code or deploy solutions; we learn how to approach and solve life's challenges with resilience and innovation. Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives. At Linux World, the environment is more than just conducive to learning; it's transformative. It's a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well. This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.`,
    timestamp: "3 month ago"
  },
  {
    id: 7,
    author: {
      name: "Bhupesh Choudhary",
      title: "Cloud & Devops | AWS Serverless",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7230205031726112768?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7230205031726112768%2C7231183542968324096%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287231183542968324096%2Curn%3Ali%3AugcPost%3A7230205031726112768%29"
    },
    content: `Vimal Daga sir: A Life-Changing Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don't just learn how to code or deploy solutions; we learn how to approach and solve life's challenges with resilience and innovation. Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives. At Linux World, the environment is more than just conducive to learning; it's transformative. It's a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well. This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.`,
    timestamp: "3 month ago"
  },
  {
    id: 8,
    author: {
      name: "Bhupesh Choudhary",
      title: "Cloud & Devops | AWS Serverless",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7230205031726112768?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7230205031726112768%2C7231183542968324096%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287231183542968324096%2Curn%3Ali%3AugcPost%3A7230205031726112768%29"
    },
    content: `Vimal Daga sir: A Life-Changing Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don't just learn how to code or deploy solutions; we learn how to approach and solve life's challenges with resilience and innovation. Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives. At Linux World, the environment is more than just conducive to learning; it's transformative. It's a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well. This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.`,
    timestamp: "3 month ago"
  },
  {
    id: 9,
    author: {
      name: "Bhupesh Choudhary",
      title: "Cloud & Devops | AWS Serverless",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7230205031726112768?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7230205031726112768%2C7231183542968324096%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287231183542968324096%2Curn%3Ali%3AugcPost%3A7230205031726112768%29"
    },
    content: `Vimal Daga sir: A Life-Changing Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don't just learn how to code or deploy solutions; we learn how to approach and solve life's challenges with resilience and innovation. Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives. At Linux World, the environment is more than just conducive to learning; it's transformative. It's a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well. This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.`,
    timestamp: "3 month ago"
  },
  {
    id: 10,
    author: {
      name: "Bhupesh Choudhary",
      title: "Cloud & Devops | AWS Serverless",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7230205031726112768?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7230205031726112768%2C7231183542968324096%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287231183542968324096%2Curn%3Ali%3AugcPost%3A7230205031726112768%29"
    },
    content: `Vimal Daga sir: A Life-Changing Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don't just learn how to code or deploy solutions; we learn how to approach and solve life's challenges with resilience and innovation. Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives. At Linux World, the environment is more than just conducive to learning; it's transformative. It's a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well. This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.`,
    timestamp: "3 month ago"
  },
  {
    id: 11,
    author: {
      name: "Bhupesh Choudhary",
      title: "Cloud & Devops | AWS Serverless",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7230205031726112768?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7230205031726112768%2C7231183542968324096%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287231183542968324096%2Curn%3Ali%3AugcPost%3A7230205031726112768%29"
    },
    content: `Vimal Daga sir: A Life-Changing Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don't just learn how to code or deploy solutions; we learn how to approach and solve life's challenges with resilience and innovation. Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives. At Linux World, the environment is more than just conducive to learning; it's transformative. It's a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well. This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.`,
    timestamp: "3 month ago"
  },
  {
    id: 12,
    author: {
      name: "Bhupesh Choudhary",
      title: "Cloud & Devops | AWS Serverless",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7230205031726112768?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7230205031726112768%2C7231183542968324096%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287231183542968324096%2Curn%3Ali%3AugcPost%3A7230205031726112768%29"
    },
    content: `Vimal Daga sir: A Life-Changing Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don't just learn how to code or deploy solutions; we learn how to approach and solve life's challenges with resilience and innovation. Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives. At Linux World, the environment is more than just conducive to learning; it's transformative. It's a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well. This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.`,
    timestamp: "3 month ago"
  },
  {
    id: 13,
    author: {
      name: "Bhupesh Choudhary",
      title: "Cloud & Devops | AWS Serverless",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736985600&v=beta&t=hL2IxFZfUvJXG_oMNp8OUU_PjJYM6iHqqHOyb5H5_n8",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7230205031726112768?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7230205031726112768%2C7231183542968324096%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287231183542968324096%2Curn%3Ali%3AugcPost%3A7230205031726112768%29"
    },
    content: `Vimal Daga sir: A Life-Changing Linux World stands out as the premier platform for not just learning cutting-edge technologies, but also for gaining a deep understanding of life itself. Here, we don't just learn how to code or deploy solutions; we learn how to approach and solve life's challenges with resilience and innovation. Under the mentorship of the world record holder Mr. Vimal Daga, who guides us with unparalleled dedication, we are not just students but problem solvers in the making. With his hands-on approach, he helps us navigate our difficulties, empowering us to overcome obstacles both in the technological world and in our personal lives. At Linux World, the environment is more than just conducive to learning; it's transformative. It's a place where education transcends the traditional boundaries and becomes a holistic experience, shaping not only our careers but our lives as well. This platform truly is a life-changing experience, teaching us not just how to leave a mark in the tech industry, but how to live a fulfilling, solution-oriented life.`,
    timestamp: "3 month ago"
  },
  {
    id: 14,
    author: {
      name: "Mohit Agarwal",
      title: "Student at NIT Kurukshetra",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQFfS5ahFvJB2Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681871987732?e=1737590400&v=beta&t=KvSzXCTu8tJExrwm1a7XibG7Xgy5aeVHfUb82IvjNJc",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7239134220567130113/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7239134220567130113%2C7239872668127141888%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287239872668127141888%2Curn%3Ali%3Aactivity%3A7239134220567130113%29"
    },
    content: `The workshop was incredibly beneficial! I'm excited about the practical applications of CI/CD and AWS services. I plan to start by working on a personal project to implement a deployment pipeline and use AWS CodeDeploy for automation. Collaborating with others will definitely enhance the learning experience, and I'm eager to stay updated with new DevOps trends to improve my skills continuously.
I'm really looking forward to applying these insights!`,
    timestamp: "2 month ago"
  },
  // More posts can be added here...
];

export default function Component() {
  return (
    <div className="bg-[#000000] p-4 sm:p-6 mx-auto">
      <div className="max-w-[920px] mx-auto">
        <h2 className="text-white text-sm sm:text-md">HEAR IT FROM THEM</h2>
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 mt-2">Ambitious People ❤️ <span className="text-[#ebff00]">TGS</span></h2>

        <div className="sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-0">
          {posts.map((post) => (
            <div key={post.id} className="break-inside-avoid mb-4 sm:mb-6">
              <PostCard post={post} />
            </div>
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

  const words = post.content.split(' ');
  const truncatedContent = words.length > 80 ? words.slice(0, 80).join(' ') + '...' : post.content;

  const handleToggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Card className="bg-[#ffffff] text-black mt-4 shadow-md w-full">
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">{post.author.name}</h3>
            <p className="text-sm text-gray-500">{post.author.title}</p>
            <a href={post.author.linkedin} className="text-[#0077b5] text-sm" target="_blank" rel="noopener noreferrer">
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800">{isExpanded ? post.content : truncatedContent}</p>
        {post.content.length > 80 && (
          <button onClick={handleToggleContent} className="text-blue-500 text-sm mt-2">
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </CardContent>
      <div className="text-sm text-gray-400 p-4">
        <p>{post.timestamp}</p>
      </div>
    </Card>
  );
};
