// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-black/20 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Let&apos;s Connect</h3>
              <div className="flex space-x-4">
                {/* Add your social media links here */}
                <a href="https://leetcode.com/u/indhiraraj/" target="_blank" className="hover:text-yellow-500 transition-colors">
                  Leetcode
                </a>
                <a href="https://www.linkedin.com/in/indhira-raj-s-903153234/" target="_blank" className="hover:text-blue-500 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/Indhiraraj" target="_blank" className="hover:text-purple-500 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Indhiraraj. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;