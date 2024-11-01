import React, { ReactNode } from "react";

interface TabContentProps {
  isActive: boolean;
  children: ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ isActive, children }) => {
  if (!isActive) return null;
  return <div className="mt-4">{children}</div>;
};

export default TabContent;
