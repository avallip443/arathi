import React, { useState } from "react";
import ExperienceList from "./ExperienceList";
import EducationList from "./EducationList";

type Tab = "Education" | "Experience";

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Experience");

  return (
    <div className="py-10">
      {/* Tabs */}
      <div className="flex border-b border-gray-300">
        <button
          onClick={() => setActiveTab("Experience")}
          className={`flex-1 py-2 text-center ${
            activeTab === "Experience"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveTab("Education")}
          className={`flex-1 py-2 text-center ${
            activeTab === "Education"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Education
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "Education" && (
          <div>
            <EducationList />
          </div>
        )}
        {activeTab === "Experience" && (
          <div className="space-y-4">
            <ExperienceList />
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
