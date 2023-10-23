import { motion } from "framer-motion";

interface Props {
  delay?: number;
  children?: React.ReactNode;
  styles?: string;
}

const ElementDelay = ({ delay = 0.3, children, styles }: Props) => {
  const elementVariants = {
    visible: { y: 0, opacity: 1, transition: { delay: delay, duration: 1 } },
    hidden: { y: -30, opacity: 0 },
  };

  return (
    <motion.div
      className={styles}
      variants={elementVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

export default ElementDelay;
