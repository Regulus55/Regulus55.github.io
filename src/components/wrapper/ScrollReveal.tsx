import { useInView } from "../../hooks/useInView";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right"; 
}

export default function ScrollReveal({ children, direction = "up" }: ScrollRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const base = "transition-all duration-1000 ease-in-out";
  const directionMap = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
  };

  return (
    <div
      ref={ref}
      className={`${base} ${
        isInView ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${directionMap[direction]}`
      }`}
    >
      {children}
    </div>
  );
}
