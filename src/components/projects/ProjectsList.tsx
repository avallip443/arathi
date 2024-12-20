import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../../utils/projects.json";

interface ProjectsListProps {
  type: string;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ type }) => {
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projectData.projects.filter(
    (proj) => proj.type === type
  );
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <div className="mt-3">
      <div className="flex flex-wrap gap-4">
        {displayedProjects.map((proj, index) => (
          <div key={index} className="relative sm:w-[48%]">
            <ProjectCard
              name={proj.name}
              description={proj.description}
              tools={proj.tools}
              github={proj.github}
              preview={proj.preview || ""}
            />
          </div>
        ))}
      </div>
      {filteredProjects.length > 4 && (
        <div className="flex justify-center mt-4">
          <button className="px-5 py-1 border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:border-[#d2b7e5] hover:text-[#d2b7e5]" onClick={() => setShowAll(!showAll)}>
            {showAll ? "show less" : "show all"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
