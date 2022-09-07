import { motion, AnimatePresence } from "framer-motion";
import { MotionDiv } from "./style";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const DivMotion = ({ children }) => {
  return (
    <AnimatePresence>
      <MotionDiv initial="hidden" animate="visible" variants={container}>
        {children}
      </MotionDiv>
    </AnimatePresence>
  );
};

export default DivMotion;
