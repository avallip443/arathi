import React from "react";

interface ExperienceProps {
  company: string;
  title: string;
  logo: string;
  start: string;
  end: string;
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  company,
  title,
  logo,
  start,
  end,
}) => {
  return (
    <div className="relative flex items-top gap-x-4">
      <div className="relative">
        <span className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-700"></span>
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-14 rounded-full border-2 border-gray-800 relative z-10"
        />
      </div>

      <div className="pl-4 pb-10">
        <p className="text-sm text-gray-500">
          {start} - {end}
        </p>
        <h3 className="font-semibold text-lg">{title}</h3>
        <h4 className="text-gray-400">{company}</h4>
      </div>
    </div>
  );
};

export default ExperienceCard;
