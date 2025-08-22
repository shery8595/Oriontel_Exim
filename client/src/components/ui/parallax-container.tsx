import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number;
  direction?: "up" | "down";
  className?: string;
}

export default function ParallaxContainer({
  children,
  speed = 0.5,
  direction = "up",
  className = "",
}: ParallaxContainerProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
