import React from "react";
import ProjectsList from "./ProjectsList";

const Projects: React.FC = () => {
  return (
    <div className="py-12">
      <h1 className="text-4xl">projects</h1>
      <h2 className="text-2xl bg-gray-700 inline-block px-3 py-1 rounded-lg mt-4">personal</h2>
      <ProjectsList type={"personal"} />
      <h2 className="text-2xl bg-gray-700 inline-block px-3 py-1 rounded-lg mt-8">academic</h2>
      <ProjectsList type={"academic"} />
    </div>
  );
};

export default Projects;
