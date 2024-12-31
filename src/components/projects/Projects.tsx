import React from "react";
import ProjectsList from "./ProjectsList";

const Projects: React.FC = () => {
  return (
    <div className="py-12">
      <h1 className="text-4xl">projects</h1>
      <ProjectsList/>
    </div>
  );
};

export default Projects;
