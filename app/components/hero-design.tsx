"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import vector from "../../public/Vector.svg";

const fullText = `I des{{VECTOR}}gn for`;
const letters = fullText
  .split("{{VECTOR}}")
  .flatMap((part, i) =>
    i === 0 ? part.split("") : ["{{VECTOR}}", ...part.split("")]
  );

interface Tag {
  text: string;
  color: string;
  rotate: number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  delay: number;
}

const tags: Tag[] = [
  {
    text: "Clarity",
    color: "bg-[#3D9AF2]",
    rotate: 17,
    top: "-3rem",
    right: "-6rem",
    delay: 0.0,
  },
  {
    text: "Impact",
    color: "bg-[#E98430]",
    rotate: -16,
    bottom: "-4rem",
    left: "5rem",
    delay: 1.0,
  },
  {
    text: "Connection",
    color: "bg-[#46BF50]",
    rotate: -16,
    top: "-2.5rem",
    left: "-7rem",
    delay: 2.0,
  },
];

export function HeroDesign() {
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState<string[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (phase === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTyped([]);
      intervalRef.current = setInterval(() => {
        setTyped((prev) => {
          const next = prev.length;
          if (next < letters.length) return [...prev, letters[next]];
          clearInterval(intervalRef.current!);
          timeoutRef.current = setTimeout(() => setPhase(1), 300);
          return prev;
        });
      }, 70);
    } else if (phase === 1) {
      // CHANGE THIS: Wait for last tag to finish appearing (3s scale + 2s delay = 5s total)
      timeoutRef.current = setTimeout(() => setPhase(2), 5000);
    } else if (phase === 2) {
      // CHANGE THIS: Pause before restart
      timeoutRef.current = setTimeout(() => setPhase(0), 600);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phase]);

  const handleHoverStart = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };
  const handleHoverEnd = () => {
    if (phase === 1) {
      timeoutRef.current = setTimeout(() => setPhase(2), 5000);
    }
  };

  return (
    <div className="relative w-[605px] h-auto mx-auto flex items-center justify-center overflow-visible">
      {/* <motion.div
        className="inline-flex items-center gap-1 relative"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        <AnimatePresence mode="wait">
          {(phase === 0 || phase === 1) && (
            <motion.div
              key="text"
              className="flex z-50 sticky items-center text-5xl font-bold text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {typed.map((char, i) => {
                if (char === "{{VECTOR}}") {
                  return (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: 0.3,
                      }}
                      className="mx-1"
                    >
                      <Image
                        src={vector}
                        alt="Design icon"
                        width={48}
                        height={48}
                        className="drop-shadow-sm"
                      />
                    </motion.div>
                  );
                }

                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 1.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: i * 0.04 }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                );
              })}

              {typed.join("").includes("design") &&
                !typed.join("").includes(" for") && (
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gray-900"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to right, transparent 0, transparent 4px, #1f2937 4px, #1f2937 8px)",
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                )}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase === 1 && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {tags.map((tag) => (
                <motion.div
                  key={tag.text}
                  className="absolute"
                  style={{
                    top: tag.top,
                    right: tag.right,
                    bottom: tag.bottom,
                    left: tag.left,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, rotate: tag.rotate }}
                  transition={{
                    scale: { duration: 1.0, delay: tag.delay },
                    opacity: { duration: 0.4, delay: tag.delay },
                    rotate: { duration: 0.4, delay: tag.delay },
                    type: "spring",
                    stiffness: 320,
                    damping: 22,
                  }}
                >
                  <div
                    className={`${tag.color} px-2 py-2 rounded-lg relative overflow-hidden shadow-md`}
                    style={{ rotate: `${tag.rotate}deg` }}
                  >
                    <span className="relative font-bold text-gray-900 text-[32px] border-dashed border border-[#505050]">
                      {tag.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div> */}
      <video
        src="/video/cci_hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
