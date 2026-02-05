"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type Dot = {
  x: number;
  y: number;
  delay: number;
};

export function AnimatedBackground() {
  const [dots] = useState<Dot[]>(() => {
    const cols = 30;
    const rows = 20;
    const result: Dot[] = [];

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        result.push({
          x: (i / cols) * 100,
          y: (j / rows) * 100,
          delay: Math.random() * 2,
        });
      }
    }

    return result;
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
      {dots.map((dot) => (
        <motion.div
          key={`${dot.x}-${dot.y}`}
          className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
