// app/experience/page.tsx
'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: "HEALTH MUDRAA",
    position: "Software Developer Intern",
    duration: "Aug 2024 - Nov 2024",
    location: "Remote",
    achievements: [
      "Implemented server-side pagination for large datasets, significantly improving page load times and user experience.",
      "Created middleware in Next.js to sanitize URLs, replacing special characters with hyphens for SEO optimization.",
      "Developed a complete module for the AskDoctors feature, including models, controllers, and routes for the q_a backend, as well as the corresponding frontend page."
    ],
    learnings: [
      "Enhanced proficiency in Next.js, Tailwind CSS, and server-side development.",
      "Gained knowledge in SEO basics, enabling the optimization of pages for better visibility"
    ]
  },
  {
    company: "MERZOL TECHNOLOGIES",
    position: "Python Backend Development Intern",
    duration: "Aug 2023 - Oct 2023",
    location: "Dindugul, India",
    achievements: [
      "Implemented a robust algorithm to organize conversation data chronologically using Python.",
      "Reduced data sequencing errors by 25%, ensuring a coherent representation of user dialogues.",
      "Leveraged time-stamping techniques and Python's datetime module to achieve accurate chronological ordering."
    ]
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Professional Experience
        </h1>
        <p className="text-gray-400 text-lg">
          My journey in software development
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-16 relative"
          >
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-blue-500/20" />
            )}

            {/* Experience Card */}
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500" />

              {/* Content */}
              <div className="ml-16 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-500">
                      {exp.company}
                    </h3>
                    <p className="text-lg font-semibold">{exp.position}</p>
                  </div>
                  <div className="text-gray-400">
                    <p>{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Key Achievements</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {exp.learnings && (
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Learning Outcomes</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {exp.learnings.map((learning, i) => (
                          <li key={i}>{learning}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto mt-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills Gained</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Python",
            "Next.js",
            "Tailwind CSS",
            "SEO Optimization",
            "Server-side Development",
            "Database Management",
            "API Development",
            "Git",
            "Backend Development"
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-gray-900/50 rounded-lg text-center border border-gray-800 hover:border-blue-500/50 transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}