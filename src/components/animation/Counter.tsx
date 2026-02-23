import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export function Counter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString(),
  );

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.5 });
    return controls.stop;
  }, [value]);
  return <motion.span>{rounded}</motion.span>;
}

export default Counter;
