import React from 'react';
import { motion } from 'framer-motion';

interface SignatureInteractionProps {
  type: 'text-reveal' | 'clip-reveal' | 'parallax' | 'marquee' | 'sticky-progress' | 'hover' | 'reveal';
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const SignatureInteraction: React.FC<SignatureInteractionProps> = ({ 
  type, 
  children, 
  className = '',
  speed = 20
}) => {
  if (type === 'marquee') {
    return (
      <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
        <motion.div
          className="flex gap-12 min-w-full"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: speed,
          }}
        >
          {children}
          {children}
        </motion.div>
      </div>
    );
  }

  if (type === 'hover') {
    return (
      <motion.div
        className={className}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
};
