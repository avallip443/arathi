import React from "react";

interface CardProps {
  name: string;
  title: string;
  logo: string;
  start: string;
  end: string;
  description: string[];
}

const Card: React.FC<CardProps> = ({
  name,
  title,
  logo,
  start,
  end,
  description
}) => {
  return (
    <div className="relative flex items-top gap-x-4">
      <div className="relative">
        <span className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-700"></span>
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-14 rounded-full border-2 border-gray-800 relative z-10"
        />
      </div>

      <div className="pl-4 pb-10">
        <p className="text-sm text-gray-400">
          {start} - {end}
        </p>
        <h3 className="font-semibold text-lg">{title}</h3>
        <h4 className="text-gray-300">{name}</h4>
        <ul className="mt-2 list-disc list-inside">
          {description && description.map((desc, index) => (
            <li key={index} className="text-gray-300 text-sm">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;