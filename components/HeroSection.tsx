import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-900 min-h-screen flex flex-col justify-center items-center text-center">
      {/* Background Blob */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 opacity-50 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto p-6">
        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
          <Image
            src="/indhiraraj1.jpg" // Replace with your image path
            alt="Indhiraraj"
            width={128}
            height={128}
            priority
          />
        </div>


        {/* Introduction */}
        <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
          Hi, I&apos;m <span className="text-indigo-400">Indhiraraj</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 sm:text-xl">
          A passionate <span className="font-semibold text-indigo-400">Software Developer </span>
          building amazing web applications and solving real-world problems.
        </p>

        {/* Call to Action */}
        <div className="mt-6 flex justify-center space-x-4">
          <Link href="/projects" className="px-6 py-3 bg-indigo-500 text-white rounded-lg text-lg font-medium shadow hover:bg-indigo-600 transition">
            View Projects
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-gray-700 text-gray-300 rounded-lg text-lg font-medium shadow hover:bg-gray-600 transition">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
