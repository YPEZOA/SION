import { motion } from "framer-motion";

interface Props {
  delay?: number;
  children?: React.ReactNode;
  styles?: string;
}

const ElementDelay = ({ delay = 0.3, children, styles }: Props) => {
  return (
    <motion.div
      className={styles}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: delay,
        duration: 1.2,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ElementDelay;
