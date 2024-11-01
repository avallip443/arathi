import React, { useState } from "react";
import ExperienceList from "./ExperienceList";

type Tab = "Education" | "Experience";

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Experience");

  return (
    <div className="py-12">
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
            <h3 className="text-lg font-semibold">Education</h3>
            <p className="text-gray-700">
              <strong>title</strong> <br />
              subtitle <br />
              text <br />
              text <br />
              text
            </p>
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
