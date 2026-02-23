import { motion } from "motion/react";

function SlideInDown({ as: Component = "div", children, ...props }) {
  const MotionComponent = motion(Component);
  return (
    <MotionComponent
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export default SlideInDown;
