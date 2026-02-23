import { motion } from "motion/react";

function SlideInLeft({ as: Component = "div", children, ...props }) {
  const MotionComponent = motion(Component);
  return (
    <MotionComponent
      initial={{ opacity: 0, x: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export default SlideInLeft;
