import ProjectCard from "./ProjectCard"
import projectData from "../../utils/projects.json";

const ProjectsList: React.FC = () => {
  return (
    <div className="pt-8 flex flex-wrap gap-4">
      {projectData.projects.map((proj, index) => (
        <div key={index} className="relative w-[48%]">
          <ProjectCard
            name={proj.name}
            description={proj.description}
            tools={proj.tools}
            github={proj.github}
            preview={proj.preview}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
