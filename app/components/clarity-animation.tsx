"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

export default function CardStackAnimation() {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-start p-8">
      <div className="relative p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`reviewed-${currentCard}`}
            className="absolute -top-16 left-16 -translate-x-1/2 w-80 bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg px-6 py-5 border border-white/80"
            initial={{ y: -100, scale: 0, opacity: 0 }}
            animate={{ y: 15, scale: 0.5, opacity: 0.8 }}
            exit={{ y: 200, scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-400/30 rounded-2xl flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-400 rounded-lg transform rotate-12"></div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-400 text-sm font-medium tracking-wider">
                    REVIEWED
                  </span>
                </div>
                <h3 className="text-gray-500 text-xl font-medium">
                  Previous Design
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            key={`new-${currentCard}`}
            className="absolute top-0 left-16 -translate-x-1/2 w-80 bg-white rounded-3xl shadow-2xl px-6 py-5 border border-gray-100"
            initial={{ y: -100, scale: 0, opacity: 0 }}
            animate={{ y: -20, scale: 0.6, opacity: 1 }}
            exit={{ y: 200, scale: 0, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.32, 0.72, 0, 1],
              delay: 0.4,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500/15 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Zap className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-600 text-sm font-bold tracking-wider">
                    NEW
                  </span>
                </div>
                <h3 className="text-gray-600 text-xl font-medium">
                  Latest Design
                </h3>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
