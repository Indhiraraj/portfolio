// app/page.tsx
'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';

export default function Home() {

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
      image: "/nakama-chat.png" // Add your project screenshot
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
        website: "https://jackpotmenswear.vercel.app",
      },
      image: "/jackpot.png"
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          {/* Animated background elements */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 bg-blue-500 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-12 z-10 relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden">
                <Image
                  src="/indhiraraj.jpg"
                  alt="Indhiraraj Selvan"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 border-2 border-blue-500/20 rounded-2xl" />
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 rounded-br-2xl" />
              </div>
              <div className="absolute -inset-4 bg-blue-500/10 rounded-2xl blur-2xl -z-10" />
            </motion.div>

            {/* Text Content */}
            <div className="text-center md:text-left  relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Indhiraraj Selvan
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Full Stack Developer | Java Enthusiast | Problem Solver
              </p>
              <div className="flex flex-col md:flex-row gap-4 md:justify-start justify-center">
                <Link
                  href="/projects"
                  className="px-8 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border border-blue-500 rounded-full hover:bg-blue-500/20 transition-colors"
                >
                  Get in Touch
                </Link>
                {/* CV Download Button - Style 1 (Inline) */}
                <a
                  href="/indhiraraj-cv.pdf"
                  download="Indhiraraj_Selvan_CV.pdf"
                  className="px-8 py-3 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download CV
                </a>
              </div>


            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"> {/* Added margin bottom */}
            {/* Project Cards */}
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 rounded-xl overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Centered View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors group"
            >
              View All Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Next.js",
              "Tailwind CSS",
              "MongoDB",
              "MySQL",
              "Java",
              "SEO Optimization",
              "Database Management",
              "API Development",
              "Version Control",
            ].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-gray-900/50 rounded-lg"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-300 mb-8">
            Have a project in mind? Let&apos;s create something amazing together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}