import React from "react";
import ProjectsList from "./ProjectsList";

const Projects: React.FC = () => {
  return (
    <div className="py-12">
      <h1 className="font-bold text-3xl">Projects</h1>
      <ProjectsList />
    </div>
  );
};

export default Projects;
