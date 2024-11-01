import React from "react";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../../utils/experience.json";

const ExperienceList: React.FC = () => {
  return (
    <div>
      <ol className="relative">
        <span className="absolute left-16 top-1/2 h-full w-px bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2"></span>

        {experienceData.experience.map((exp) => (
          <li className="mb-10 ms-6">
            <ExperienceCard
              company={exp.company}
              title={exp.title}
              logo={exp.logo}
              start={exp.start}
              end={exp.end || "present"}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ExperienceList;
