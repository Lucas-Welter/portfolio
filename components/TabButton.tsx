import React from "react";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-purple-500"
    : "text-gray-400 hover:text-yellow-300 transition duration-200";

  return (
    <button
      onClick={selectTab}
      className={`mr-3 px-2 py-1 font-semibold ${buttonClasses}`}
    >
      {children}
    </button>
  );
};

export default TabButton;
