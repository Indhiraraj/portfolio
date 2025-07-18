// app/projects/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiReact, SiFirebase, SiNodedotjs, SiExpress, SiMongodb, SiEjs, SiBootstrap } from 'react-icons/si';

const projects = [
  {
    title: "Faculty Feedback System",
    description: "A secure and scalable feedback platform actively used by 1000+ students and faculty members at SSMIET.",
    achievements: [
      "Designed and deployed a secure Faculty Feedback System for my college, actively used by 1000+ students and faculty with a team of 5 members.",
      "Engineered a scalable backend architecture using Node.js, Express.js, and MySQL, optimizing API response time by 30% and fixing security vulnerabilities.",
      "Implemented an automated feedback analysis system, reducing manual review effort by 60% and improving faculty evaluation accuracy.",
      "Built a full-stack solution using React.js for frontend and Node.js, Express.js, MySQL for backend, deployed on the official college domain with 99.9% uptime."
    ],
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "MySQL"],
    links: {
      website: "https://feedback.ssmiet.ac.in"
      // GitHub repo is private, so not included
    },
    image: "/feedback.png" // Add your project screenshot
  },
  {
    title: "Nakama Chat",
    description: "A One Piece-themed chat application featuring real-time messaging, multiple chat modes, and theme support.",
    achievements: [
      "Built a One Piece-themed chat app with real-time messaging using Supabase and React.",
      "Implemented one-on-one chats ('Den Den Whispers'), self-chat for personal notes, and group rooms ('Sunny Decks') with custom names.",
      "Enabled auto-scroll to new and replied messages using React’s `useRef` and Supabase subscriptions.",
      "Integrated Supabase email authentication, password reset, and profile management including avatars.",
      "Created responsive UI using Tailwind CSS and shadcn/ui, with theme toggling between Dark, Light, and System modes.",
      "Managed complex app state using multiple React Context Providers for users, messages, and UI."
    ],
    technologies: ["ReactJS", "Supabase", "Tailwind CSS", "shadcn/ui"],
    links: {
      website: "https://nakama-chat.vercel.app",
      github: "https://github.com/Indhiraraj/NakamaChat"
    },
    image: "/nakama-chat.png"
  },
  {
    title: "JACKPOT",
    description: "An end-to-end e-commerce application with product listings, shopping cart, and secure payment processing.",
    achievements: [
      "Built an end-to-end e-commerce application with product listings, a shopping cart, and secure payment processing.",
      "Improved user experience by 30% through responsive design and an intuitive search bar.",
      "Leveraged ReactJS for the front-end and NodeJS/ExpressJS for the backend. Utilized Firebase/Firestore for the database and integrated with RazorPay for seamless payment processing."
    ],
    technologies: ["React JS", "Firebase", "NodeJS", "ExpressJS"],
    links: {
      website: "https://jackpotmenswear.vercel.app"
    },
    image: "/jackpot.png"
  },
  {
    title: "RENTIFY",
    description: "A responsive rental website where registered users can buy or rent items with product listings and interested areas.",
    achievements: [
      "Developed a responsive rental website where registered users can buy or rent items with product listings and interested areas.",
      "Increased user engagement and ease of use with a responsive design and efficient image storage.",
      "Used ReactJS for the front-end, NodeJS/ExpressJS for the backend, Firebase for storing images, and MongoDB as the database."
    ],
    technologies: ["React JS", "MongoDB", "Firebase", "NodeJS", "ExpressJS"],
    links: {
      website: "https://rentifyy.vercel.app",
      github: "https://github.com/Indhiraraj/Rentify"
    },
    image: "/rentify.png"
  },
  {
    title: "Blogg",
    description: "A clean and intuitive blog platform with content management system, featuring dynamic content rendering and responsive design.",
    achievements: [
      "Designed and developed a full-featured blog platform with content management and EJS Templates for seamless content presentation.",
      "Implemented efficient backend services using NodeJS and Express to manage posts.",
      "Utilized MongoDB for structured data storage and retrieval, ensuring smooth performance and scalability.",
      "Created a user-friendly interface for content creation and management.",
      "Deployed on Render with continuous integration, maintaining consistent uptime and performance."
    ],
    technologies: ["NodeJS", "MongoDB", "ExpressJS", "EJS", "Bootstrap"],
    links: {
      website: "https://my-blog-kg2l.onrender.com/",
      github: "https://github.com/Indhiraraj/MyBlog"
    },
    image: "/blogg.png"
  }
];



const notable = [
  // {
  //   name: "Vercel Clone",
  //   description: "A web application mimicking Vercel's UI/UX for deploying and managing projects, built using ReactJS and styled-components for a sleek and responsive design.",
  //   links: {
  //     website: "https://cool-kidss-network.vercel.app/",
  //     github: "https://github.com/Indhiraraj/cool-kids-network" // Add your GitHub repository link
  //   },
  // },
  {
    title: "Spotify Downloader",
    description: "A Java-based tool (for educational purposes) designed to download Spotify playlists, offering functionality to fetch and manage audio files. This project enhanced my knowledge of APIs, Java concepts like inheritance and file handling, and build tools like Maven for dependency management and project structuring.",
    links: {
      github: "https://github.com/Indhiraraj/SpotSong" // Add your GitHub repository link
    },
  },

  {
    title: "Cool Kids Network",
    description: "A unique social platform featuring role-based access control where users receive random character identities upon registration, implementing a hierarchical 'coolness' system that determines information visibility.",
    links: {
      website: "https://cool-kidss-network.vercel.app/",
      github: "https://github.com/Indhiraraj/cool-kids-network" // Add your GitHub repository link
    },
  },
  {
    title: "Get It Together",
    description: "A task management application allowing users to organize tasks and set deadlines, built with EJS and express.",
    links: {
      website: "https://get-it-together-ujnt.onrender.com/",
      github: "https://github.com/Indhiraraj/Get-It-Together" // Add your GitHub repository link
    },
  },
  {
    title: "Tank Battle",
    description: "A 2D multiplayer tank battle game built with python and with a feature for multiplayer, where two friends can play on a single machine.",
    links: {
      github: "https://github.com/Indhiraraj/TankBattle" // Add your GitHub repository link
    },
  },
  {
    title: "Park Me",
    description: "A parking management application that allows users to find and reserve parking spaces in real-time, developed using Flutter, Firebase and Android Maps SDK with an intuitive interface.",
    links: {
      github: "https://github.com/dhiyanesh-cyber/car-parking" // Add your GitHub repository link
    },
  },
  {
    title: "Keeper App",
    description: "A simple note-taking application inspired by Google Keep, built using ReactJS for dynamic state management and styled for an intuitive user experience.",
    links: {
      website: "https://keeper-app-lemon-chi.vercel.app/",
      github: "https://github.com/Indhiraraj/keeper-app" // Add your GitHub repository link
    },
  },

]

const TechIcon = ({ tech }: { tech: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    "React JS": <SiReact className="text-[#61DAFB]" />,
    "Firebase": <SiFirebase className="text-[#FFCA28]" />,
    "NodeJS": <SiNodedotjs className="text-[#339933]" />,
    "ExpressJS": <SiExpress className="text-white" />,
    "MongoDB": <SiMongodb className="text-[#47A248]" />,
    "Bootstrap": <SiBootstrap className="text-[#7952B3]" />,
    "EJS": <SiEjs className='text-[#B4CA65]' />
  };

  return (
    <div className="tooltip" data-tip={tech}>
      {icons[tech]}
    </div>
  );
};

export default function Projects() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Featured Projects
        </h1>
        <p className="text-gray-400 text-lg">
          A showcase of my technical projects and achievements
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* <div className="absolute inset-0  group-hover:bg-blue-500/20 transition-colors" /> */}
                </div>
              </motion.div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-blue-500">
                  {project.title}
                </h3>
                <p className="text-gray-300">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-4">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <TechIcon tech={tech} />
                        {tech}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <Link
                    href={project.links.website}
                    target='_blank'
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-400"
                  >
                    <FiExternalLink />
                    Live Demo
                  </Link>
                  {project.links.github && <Link
                    href={project.links.github}
                    target='_blank'
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-400"
                  >
                    <FiGithub />
                    Source Code
                  </Link>}

                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Projects Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-7xl mx-auto mt-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Other Notable Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add more project cards here */}
          {notable.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex gap-4">
                {project.links.github && <Link
                  href={project.links.github}
                  className="text-blue-500 hover:text-blue-400"
                >
                  <FiGithub />
                </Link>}
                {project.links.website &&
                  <Link
                    href={project.links.website}
                    className="text-blue-500 hover:text-blue-400"
                  >
                    <FiExternalLink />
                  </Link>}


              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}