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
    <div className="relative flex items-center px-4">
      <div className="relative pr-4">
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-12 h-12 rounded-full"
        />
      </div>

      <div className="pl-4">
        <p className="text-gray-500 text-sm">
          {start} - {end}
        </p>
        <h2 className="font-semibold">{title}</h2>
        <h3 className="text-gray-700">{company}</h3>
      </div>
    </div>
  );
};

export default ExperienceCard;
