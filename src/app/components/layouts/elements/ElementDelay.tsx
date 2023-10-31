import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  delay?: number;
  children?: React.ReactNode;
  styles?: string;
}

const ElementDelay = ({ delay = 0.5, children, styles }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const elementVariants = {
    visible: { y: 0, opacity: 1, transition: { delay: delay, duration: 1 } },
    hidden: { y: -30, opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={styles}
      variants={elementVariants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default ElementDelay;
