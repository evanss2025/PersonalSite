"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const words = ["game designer", "artist", "coder", "student"];

export default function WordRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % words.length), 2800);
    return () => clearTimeout(t);
  }, [index]);

  const letters = words[index].split("");

  return (
    <div className="w-full flex items-center text-center justify-center mx-3">
      <h1 className="text-lg flex justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span key={index} className="flex">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -18, skewX: 8, filter: "blur(6px)" }}
                animate={{
                  opacity: 1,
                  x: 0,
                  skewX: 0,
                  filter: "blur(0px)",
                  transition: {
                    delay: i * 0.038,
                    duration: 0.32,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                exit={{
                  opacity: 0,
                  y: -14,
                  filter: "blur(4px)",
                  transition: {
                    delay: i * 0.022,
                    duration: 0.2,
                    ease: [0.4, 0, 1, 1],
                  },
                }}
              >
                {char === " " ? "\u00a0" : char}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      </h1>
    </div>
  );
}