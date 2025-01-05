// app/contact/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FiMail, FiGithub, FiLinkedin, FiMapPin,
  FiBriefcase,
  FiGlobe,
  FiMonitor,
  FiCode,
  FiLayout,
  FiUsers
} from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct mailto URL
    const mailtoUrl = `mailto:indhiraraj7@gmail.com?subject=${encodeURIComponent(
      `${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open default mail client
    window.location.href = mailtoUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <FiMail className="w-6 h-6" />,
      href: 'mailto:indhiraraj7@gmail.com', // Replace with your email
      color: 'hover:text-green-500',
    },
    {
      name: 'GitHub',
      icon: <FiGithub className="w-6 h-6" />,
      href: 'https://github.com/indhiraraj', // Replace with your GitHub
      color: 'hover:text-purple-500',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/indhira-raj-s-903153234/', // Replace with your LinkedIn
      color: 'hover:text-blue-600',
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode className="w-6 h-6" />,
      href: 'https://leetcode.com/indhiraraj', // Replace with your LeetCode
      color: 'hover:text-yellow-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 pb-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Let&apos;s Connect
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have a project in mind or just want to chat? Feel free to reach out.
          I&apos;m always open to discussing new projects and opportunities.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-800"
        >
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors flex items-center justify-center gap-2"
            >
              <FiMail className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          {/* Connect Section */}
          <div className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg ${link.color} transition-colors`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Location & Availability */}
          <div className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Location & Availability</h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-2">
                <FiMapPin className="h-5 w-5 text-blue-500" />
                <p>Based in Dindigul, Tamil Nadu, India</p>
              </div>
              <div>
                <p className="mb-2 flex items-center gap-2">
                  <FiBriefcase className="h-5 w-5 text-blue-500" />
                  Available for:
                </p>
                <ul className="space-y-2 ml-7">
                  <li className="flex items-center gap-2">
                    <FiMonitor className="h-4 w-4 text-blue-500" />
                    Full-time Software Developer positions
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCode className="h-4 w-4 text-blue-500" />
                    Full Stack Development projects
                  </li>
                  <li className="flex items-center gap-2">
                    <FiLayout className="h-4 w-4 text-blue-500" />
                    Web Application Development
                  </li>
                  <li className="flex items-center gap-2">
                    <FiUsers className="h-4 w-4 text-blue-500" />
                    Technical Collaboration
                  </li>
                </ul>
              </div>

              {/* Timezone */}
              <div className="flex items-center gap-2 pt-2">
                <FiGlobe className="h-5 w-5 text-blue-500" />
                <p>IST (UTC+5:30) Timezone</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}