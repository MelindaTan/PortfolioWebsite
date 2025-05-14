import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface AnimationProps {
  children: ReactNode;
  delay?: number;
}

// Slide up animation with fade
export const SlideUp: React.FC<AnimationProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      delay: delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    }}
  >
    {children}
  </motion.div>
);

// Scale animation with fade
export const ScaleIn: React.FC<AnimationProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: delay,
      ease: "easeOut",
    }}
  >
    {children}
  </motion.div>
);

// Hover animation for interactive elements
export const HoverScale: React.FC<{ children: ReactNode }> = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    {children}
  </motion.div>
);

// Stagger children animation
export const StaggerContainer: React.FC<{ children: ReactNode }> = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.2
        }
      }
    }}
  >
    {children}
  </motion.div>
);

// Stagger item animation
export const StaggerItem: React.FC<{ children: ReactNode }> = ({ children }) => (
  <motion.div
    variants={{
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }
    }}
  >
    {children}
  </motion.div>
);

// Export an empty object to make it a module
export {}; 