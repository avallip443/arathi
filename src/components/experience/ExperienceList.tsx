import ExperienceCard from "./ExperienceCard";
import experienceData from "../../utils/experience.json";

const ExperienceList: React.FC = () => {
  return (
    <div className="border py-8 px-6 border-gray-700 rounded-lg">
      {experienceData.experience.map((exp, index) => (
        <div key={index} className="relative">
          <ExperienceCard
            company={exp.company}
            title={exp.title}
            logo={exp.logo}
            start={exp.start}
            end={exp.end || "Present"}
          />
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
