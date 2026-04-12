"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

type AnimatedGroupProps = {
  children: React.ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
};

const defaultContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.6,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 1.5 },
  },
};

export function AnimatedGroup({
  children,
  className,
  variants,
}: AnimatedGroupProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants?.container ?? defaultContainerVariants}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={variants?.item ?? defaultItemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
