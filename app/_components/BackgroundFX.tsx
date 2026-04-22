"use client";

import { motion } from "framer-motion";

const sparkleStarClip =
  "polygon(50% 0%, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0% 50%, 38% 38%)";

const rubySparkleFills = [
  "linear-gradient(135deg, #ffffff 0%, #ff9eb5 35%, #e0115f 70%, #7a0835 100%)",
  "linear-gradient(140deg, #fff5f7 0%, #ff6b9d 40%, #c70039 75%, #4a1020 100%)",
  "linear-gradient(130deg, #ffe8f0 0%, #f43f7a 45%, #991245 100%)",
  "linear-gradient(145deg, #ffffff 0%, #ffb3c9 30%, #d4145c 65%, #5c0a22 100%)",
  "linear-gradient(125deg, #fffafc 0%, #ff8fab 42%, #b0104a 78%, #3d0618 100%)",
  "linear-gradient(150deg, #ffffff 0%, #ffc8dc 28%, #e91e63 60%, #880e4f 100%)",
];

/** 固定位置で明滅・きらめきのみ（落下なし） */
const rubyTwinkles = Array.from({ length: 72 }, (_, i) => ({
  left: `${((i * 37 + (i % 7) * 17) % 90) + 5}%`,
  top: `${((i * 23 + (i % 6) * 19) % 88) + 4}%`,
  size: 5 + (i % 7) * 2.15,
  delay: (i * 0.21) % 6.5,
  pulse: 3.8 + (i % 11) * 0.5,
  fillIndex: (i * 3) % rubySparkleFills.length,
}));

const softGlow =
  "drop-shadow(0 0 8px rgba(224, 17, 95, 0.55)) drop-shadow(0 0 18px rgba(233, 30, 99, 0.28))";

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {rubyTwinkles.map((tw, index) => (
        <motion.span
          key={`ruby-twinkle-${index}`}
          className="absolute will-change-transform"
          style={{
            width: tw.size,
            height: tw.size,
            left: tw.left,
            top: tw.top,
            background: rubySparkleFills[tw.fillIndex],
            clipPath: sparkleStarClip,
            filter: softGlow,
          }}
          animate={{
            scale: [0.78, 1.38, 0.88, 1.22, 0.78],
            opacity: [0.28, 0.9, 0.38, 0.85, 0.3],
            rotate: [0, 18, -10, 14, 0],
          }}
          transition={{
            duration: tw.pulse,
            repeat: Infinity,
            ease: "easeInOut",
            delay: tw.delay,
          }}
        />
      ))}
    </div>
  );
}
