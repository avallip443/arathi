import React from "react";
import { Github, Linkedin } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="py-6">
      <div className="md:flex gap-8">
        <div className="md:w-4/5">
          <h1 className="text-5xl pb-5">
            hi, i'm arathi :)
          </h1>

          <h4 className="text-lg pb-5">
            computer science @ toronto metropolitan university
          </h4>

          <p className="text-gray-300 pb-8">
            I like building full-stack applications, exploring new technologies,
            and making (okay) coffee.
          </p>

          <div className="flex gap-6 md:gap-8 items-center">
            <a href="mailto:avallpipuranathan@gmail.com">
              <button className="px-6 py-2 border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:border-[#d2b7e5] hover:text-[#d2b7e5]">
                Say hi
              </button>
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
          </div>
        </div>

        <div className="flex items-center justify-center mt-6 md:mt-0">
          <img src="images/me.jpeg" alt="me!" className="rounded-lg w-56" />
        </div>
      </div>
    </div>
  );
};

export default About;
