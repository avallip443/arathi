import Card from "./Card";
import educationData from "../../utils/education.json";

const EducationList: React.FC = () => {
  return (
    <div className="border pt-8 px-6 border-gray-700 rounded-lg">
      {educationData.education.map((edu, index) => (
        <div key={index} className="relative">
          <Card
            name={edu.name}
            title={edu.title}
            logo={edu.logo}
            start={edu.start}
            end={edu.end || "Present"}
            description={edu.description}
          />
        </div>
      ))}
    </div>
  );
};

export default EducationList;
