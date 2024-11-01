import React, { useState } from "react";

type Tab = "Education" | "Experience";

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Education");

  return (
    <div>
      {/* Tabs */}
      <div className="flex border-b border-gray-300">
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
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "Education" && (
          <div>
            <h3 className="text-lg font-semibold">Education</h3>
            <p className="text-gray-700">
              {/* Replace with actual content */}
              <strong>DigiPen Institute of Technology Singapore</strong> <br />
              BS in Computer Science in Real-Time Interactive Simulation <br />
              Graduated with a Minor in Mathematics <br />
              President of Digipen Student Management Committee <br />
              3-time recipient of the Dean's Honor List
            </p>
          </div>
        )}
        {activeTab === "Experience" && (
          <div>
            <h3 className="text-lg font-semibold">Experience</h3>
            <p className="text-gray-700">
              {/* Replace with actual content */}
              Here you would display the experience details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
