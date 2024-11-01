import React from "react";


type Tab = "Education" | "Experience";

interface TabButtonProps {
  label: Tab;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-1 py-2 text-center ${
      isActive ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
    }`}
  >
    {label}
  </button>
);

export default TabButton;


 