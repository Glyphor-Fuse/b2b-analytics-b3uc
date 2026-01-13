import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: 'fit-content' | '100%';
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0.25, 
  width = "fit-content" 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
