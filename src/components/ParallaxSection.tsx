import { useEffect, useState } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

const ParallaxSection = ({ children, className = "", speed = 0.5 }: ParallaxSectionProps) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative ${className}`}
      style={{
        transform: `translateY(${offsetY * speed}px)`
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;