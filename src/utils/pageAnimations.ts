import type { Variants, Transition } from "framer-motion";

export const pageVariants: Variants = {
 initial: { scale: 0.95, opacity: 0 },
animate: { scale: 1, opacity: 1 },
exit: { scale: 1.05, opacity: 0 },

};

export const pageTransition: Transition = {
  duration: 0.4,
  ease: "easeInOut",
};

export const itemVariants : Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25 },
  },
};

export  const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, 
    },
  },
};