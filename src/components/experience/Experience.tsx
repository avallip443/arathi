import React, { useState } from "react";
import ExperienceList from "./ExperienceList";
import EducationList from "./EducationList";

type Tab = "Education" | "Experience";

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Experience");

  return (
    <div className="pt-6 md:pt-12">
      {/* Tabs */}
      <div className="flex rounded-lg bg-gray-800 p-1">
        <button
          onClick={() => setActiveTab("Experience")}
          className={`flex-1 py-1.5 text-center rounded-lg ${
            activeTab === "Experience" ? "bg-[#030712]" : "text-gray-400"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveTab("Education")}
          className={`flex-1 py-1.5 text-center rounded-lg ${
            activeTab === "Education" ? "bg-[#030712]" : "text-gray-400"
          }`}
        >
          Education
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-2">
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
