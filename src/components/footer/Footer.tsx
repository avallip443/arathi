import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4 gap-y-4">
      <div className="flex items-center gap-x-6">
        <hr className="w-12 md:w-56 h-0.5 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700" />

        <a href="mailto:avallpipuranathan@gmail.com">
          <Mail className="text-gray-300 hover:text-white hover:text-[#d2b7e5]" />
        </a>
        <a
          href="https://github.com/avallip443"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="text-gray-300 hover:text-[#d2b7e5]" />
        </a>
        <a
          href="https://www.linkedin.com/in/avallip/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="text-gray-300 hover:text-[#d2b7e5]" />
        </a>

        <hr className="w-12 md:w-56 h-0.5 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700" />
      </div>
      <p className="text-sm">Built by Arathi Vallipuranathan </p>
    </div>
  );
};

export default Footer;
