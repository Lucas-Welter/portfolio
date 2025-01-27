import React from "react";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "bg-primary text-white border-b-4 border-primary"
    : " text-text  hover:bg-light-accent dark:hover:bg-gray-700 hover:text-white";

  return (
    <button
      onClick={selectTab}
      className={`px-4 py-2 font-semibold rounded-md focus:outline-none ${buttonClasses}`}
      role="tab"
      aria-selected={active}
    >
      {children}
    </button>
  );
};

export default TabButton;
