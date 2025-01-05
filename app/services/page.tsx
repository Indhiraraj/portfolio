// app/services/page.tsx
'use client';

import { motion } from 'framer-motion';
import { SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiSpringboot } from 'react-icons/si';
import { FiCode, FiArrowRight } from 'react-icons/fi';

export default function Services() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Turning Ideas into{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Digital Reality
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          I specialize in building modern web applications from concept to deployment. 
          Whether you need a simple landing page or a complex full-stack application, 
          I&apos;m here to help bring your vision to life.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Technical Expertise</h2>
              <p className="text-gray-400">
                With a strong foundation in both frontend and backend development,
                I can handle projects of any scale. My tech stack is modern and
                battle-tested, ensuring your project is built with the best tools
                available.
              </p>
              <div className="flex flex-wrap gap-4">
                {[SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiSpringboot].map((Icon, index) => (
                  <div key={index} className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
                <p className="text-gray-400">
                  Creating responsive, performant, and beautiful user interfaces
                  using React, Next.js, and Tailwind CSS.
                </p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                <p className="text-gray-400">
                  Building robust APIs and server-side applications with Node.js,
                  Express, and Spring Boot.
                </p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-2">Full Stack Solutions</h3>
                <p className="text-gray-400">
                  End-to-end development with seamless integration between
                  frontend and backend systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Approach Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">My Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-blue-500 mb-4">01</div>
              <h3 className="text-xl font-bold mb-2">Understanding</h3>
              <p className="text-gray-400">
                I start by thoroughly understanding your needs, goals, and vision
                for the project. This ensures we&apos;re aligned from the beginning.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-blue-500 mb-4">02</div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-gray-400">
                Using modern technologies and best practices, I build scalable
                solutions that meet your requirements and exceed expectations.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-blue-500 mb-4">03</div>
              <h3 className="text-xl font-bold mb-2">Delivery</h3>
              <p className="text-gray-400">
                I ensure smooth deployment and provide documentation and support
                to keep your application running efficiently.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What I Can Help With */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">What I Can Help With</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Web Applications",
              "API Development",
              "E-commerce Solutions",
              "Database Design",
              "Performance Optimization",
              "Technical Consultation"
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-gray-900/50 rounded-lg border border-gray-800 flex items-center justify-between hover:border-blue-500/50 transition-colors"
              >
                <span>{item}</span>
                <FiCode className="text-blue-500" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-12 rounded-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how I can help bring your ideas to life with modern
            web technologies and professional development practices.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get in Touch
            <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </div>
  );
}