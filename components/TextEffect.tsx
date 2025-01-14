import { TypeAnimation } from "react-type-animation";

interface TextEffectProps {
  sequence?: (string | number)[]; // Allow customization of animation sequence
}

const TextEffect: React.FC<TextEffectProps> = ({
  sequence = [
    "Software Engineer",
    1500,
    "Full Stack",
    1500,
    "Agile",
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
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
