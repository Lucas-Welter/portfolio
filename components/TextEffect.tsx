import { TypeAnimation } from "react-type-animation";

interface TextEffectProps {
  sequence?: (string | number)[]; // Allow customization of animation sequence
}

const TextEffect: React.FC<TextEffectProps> = ({
  sequence = [
    "Software Engineer",
    1500,
    "Full Stack Developer",
    1500,
    "Scrum Master",
    1500,
    "Web Developer",
    1500,
    "Mobile Developer",
    1500,
  ],
}) => {
  return (
    <TypeAnimation
      sequence={sequence}
      speed={40} // Increased speed for smoother animation
      className="text-[2rem] md:text-[3rem] text-[#81d8b1] font-bold uppercase"
      repeat={Infinity}
      aria-label="Dynamic text showcasing skills"
    />
  );
};

export default TextEffect;
