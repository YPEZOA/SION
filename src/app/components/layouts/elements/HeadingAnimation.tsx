import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  children?: React.ReactNode;
}

const HeadingAnimation = ({ children }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const elementVariants = {
    visible: { x: 0, opacity: 1, transition: { delay: 0.2, duration: 1 } },
    hidden: { x: -30, opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      variants={elementVariants}
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default HeadingAnimation;
