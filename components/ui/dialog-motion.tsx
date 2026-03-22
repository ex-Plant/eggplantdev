import { AnimatePresence, type HTMLMotionProps, motion } from "framer-motion";

function DialogMotionOverlay({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    />
  );
}

function DialogMotionContent({ className, children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type MotionOverlayPropsT = HTMLMotionProps<"div"> & {
  isOpen: boolean;
};

function MotionOverlay({ isOpen, ...props }: MotionOverlayPropsT) {
  return <AnimatePresence>{isOpen && <DialogMotionOverlay {...props} />}</AnimatePresence>;
}

export { DialogMotionOverlay, DialogMotionContent, MotionOverlay };
