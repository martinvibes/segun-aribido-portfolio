"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MoveDown, MoveDownRight, MoveUpLeft } from "lucide-react";

interface WorkflowAnimationProps {
  size?: number;
}

export function WorkflowAnimation({ size = 280 }: WorkflowAnimationProps) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setKey((k) => k + 1), 5000);
    return () => clearTimeout(timer);
  }, [key]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.6, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.6,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <div
      className="flex items-center justify-center rounded-2xl p-6 absolute left-10 bg-[#D3F6E3]"
      style={{ width: size, height: size, maxWidth: 300, maxHeight: 100 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          className="relative w-full h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            variants={itemVariants}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-gray-400 tracking-widest"
          >
            <div className="flex flex-col items-center">
              <div className="w-full h-px bg-gray-400"></div>
              <div className="text-lg font-bold text-gray-400 tracking-widest px-2">
                DESIGN
              </div>
              <div className="w-full h-px bg-gray-400"></div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="absolute top-16 left-1/2 -translate-x-1/2 bg-blue-700 text-white px-5 py-2 rounded-bl-2xl rounded-tl-2xl rounded-br-2xl text-sm font-bold shadow-md whitespace-nowrap"
          >
            <MoveUpLeft className="text-blue-600 -top-5 left-10 absolute" />
            Engineers
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="absolute top-10 -right-10 -translate-y-1/2 bg-purple-600 text-white px-5 py-2 rounded-br-2xl rounded-tr-2xl rounded-tl-2xl text-sm font-bold shadow-md whitespace-nowrap"
          >
            <MoveUpLeft className="text-purple-600 absolute top-0 -left-4" />
            Business
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-5 py-2 rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl text-sm font-bold shadow-md whitespace-nowrap"
          >
            <MoveDown className="absolute top-8 left-16 text-emerald-600" />
            Project Manager
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="absolute top-5 -left-16 -translate-y-1/2 bg-orange-700 rounded-tr-2xl text-white px-5 py-2 rounded-full text-sm font-bold shadow-md whitespace-nowrap"
          >
            <MoveDownRight className="text-orange-700 absolute -right-4" />
            Sales Team
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
