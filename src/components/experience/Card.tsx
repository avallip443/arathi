import React from "react";
import { Globe } from "lucide-react";

interface CardProps {
  name: string;
  title: string;
  logo: string;
  start: string;
  end: string;
  description: string[];
  link?: string;
}

const Card: React.FC<CardProps> = ({
  name,
  title,
  logo,
  start,
  end,
  description,
  link,
}) => {
  return (
    <div className="relative flex items-top gap-x-4">
      {/** Image */}
      <div className="relative">
        <span className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-700 z-0"></span>
        <img
          src={logo}
          alt={`${name} logo`}
          className="relative w-12 sm:w-14 rounded-full border-2 border-gray-800 z-10"
        />
      </div>

      <div className="w-4/5 pl-4 pb-10">
        <p className="text-sm text-gray-400">
          {start} - {end}
        </p>
        <h3 className="font-semibold text-lg">{title}</h3>
        <h4 className="text-gray-400">{name}</h4>
        <ul className="mt-2 list-disc list-inside">
          {description.filter((desc) => desc.trim() !== "").length !== 0 &&
            description.map((desc, index) => (
              <li key={index} className="text-gray-300 text-sm">
                {desc}
              </li>
            ))}
        </ul>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center bg-white text-black rounded-md px-2 text-xs hover:bg-[#d2b7e5]">
              <Globe className="w-3 mr-2" />
              Website
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
