import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from 'next-i18next';

const TextEffect: React.FC = () => {
  const { t } = useTranslation();
  const [isHydrated, setIsHydrated] = useState(false);

  // Fetch translated roles dynamically
  const sequence = t("hero.roles", { returnObjects: true }) as string[];

  useEffect(() => {
    setIsHydrated(true); // Ensure it runs only after hydration
  }, []);

  if (!isHydrated) return null;

  return (
    <TypeAnimation
      sequence={sequence.flatMap((role) => [role, 1500])} 
      speed={50} 
      className="text-[2rem] md:text-[3rem] text-accent font-bold uppercase"
      repeat={Infinity}
      aria-label="Dynamic text showcasing skills"
    />
  );
};

export default TextEffect;
