import Card from "../shared/Card";
import experienceData from "../../utils/experience.json";

const ExperienceList: React.FC = () => {
  return (
    <div className="border py-8 px-6 border-gray-700 rounded-lg">
      {experienceData.experience.map((exp, index) => (
        <div key={index} className="relative">
          <Card
            name={exp.name}
            title={exp.title}
            logo={exp.logo}
            start={exp.start}
            end={exp.end || "Present"}
            description={exp.description}
          />
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
