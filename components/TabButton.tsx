import React from "react";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
  className?: string;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children, className }) => {
  const buttonClasses = active
    ? "bg-tab-active-bg text-primary border-b-4 border-primary"
    : "bg-tab-hover-bg text-secondary-text hover:text-primary hover:bg-gradient-bg transition duration-200";

  return (
    <button
      onClick={selectTab}
      className={`mr-3 px-4 py-2 font-semibold rounded-md ${buttonClasses} ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default TabButton;
