import React from 'react';
import { motion } from 'framer-motion';

interface SignatureEffectProps {
  effect?: string;
  children: React.ReactNode;
  className?: string;
}

export const SignatureEffect: React.FC<SignatureEffectProps> = ({ effect, children, className = '' }) => {
  // Placeholder for specific signature effects if they were requested via data attributes.
  // Currently passes through children with a wrapper.
  return (
    <div className={`relative ${className}`} data-signature-effect={effect}>
      {children}
    </div>
  );
};
