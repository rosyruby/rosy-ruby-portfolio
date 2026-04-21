"use client";

import { motion } from "framer-motion";

const petalPath =
  "M49.3 4.8C57.8 9.5 71.2 26.8 74 43.7C76.6 59.4 69.4 73.6 56.8 82.5C43.4 92 24.3 96.2 13.2 86C2.5 76.2 3.6 57.6 8.5 42.8C13 29.1 22.8 13 35.2 7.1C40.8 4.5 44.8 2.4 49.3 4.8Z";

const floatingPetalShapes = [
  {
    size: 92,
    left: "7%",
    top: "14%",
    duration: 18,
    delay: 0,
    rotate: 12,
    opacity: 0.22,
    fill: "rgba(255, 196, 220, 0.75)",
  },
  {
    size: 72,
    left: "84%",
    top: "22%",
    duration: 22,
    delay: 1.2,
    rotate: -8,
    opacity: 0.18,
    fill: "rgba(224, 17, 95, 0.22)",
  },
  {
    size: 82,
    left: "18%",
    top: "72%",
    duration: 20,
    delay: 0.8,
    rotate: 6,
    opacity: 0.16,
    fill: "rgba(255, 214, 231, 0.78)",
  },
  {
    size: 64,
    left: "88%",
    top: "78%",
    duration: 16,
    delay: 2.1,
    rotate: -15,
    opacity: 0.2,
    fill: "rgba(199, 0, 57, 0.2)",
  },
];

const floatingPetals = [
  { w: 42, h: 24, left: "28%", top: "20%", duration: 14, delay: 0.4, rotate: -18, opacity: 0.26 },
  { w: 38, h: 20, left: "70%", top: "36%", duration: 17, delay: 1.4, rotate: 22, opacity: 0.22 },
  { w: 34, h: 18, left: "40%", top: "82%", duration: 13, delay: 0.7, rotate: -12, opacity: 0.2 },
  { w: 36, h: 22, left: "82%", top: "60%", duration: 19, delay: 1.7, rotate: 16, opacity: 0.24 },
];

const sparkles = [
  { size: 10, left: "16%", top: "10%", delay: 0.1, duration: 3.5 },
  { size: 8, left: "75%", top: "18%", delay: 0.8, duration: 4.2 },
  { size: 12, left: "88%", top: "66%", delay: 0.5, duration: 3.2 },
  { size: 9, left: "32%", top: "74%", delay: 1.4, duration: 3.9 },
  { size: 7, left: "56%", top: "46%", delay: 0.9, duration: 4.5 },
];

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {floatingPetalShapes.map((petal, index) => (
        <motion.svg
          key={`petal-shape-${index}`}
          className="absolute"
          style={{
            width: petal.size,
            height: petal.size,
            left: petal.left,
            top: petal.top,
            opacity: petal.opacity,
            filter: "blur(0.2px)",
          }}
          animate={{
            y: [0, 24, 52, 84, 120],
            x: [0, 8, -6, 10, 2],
            rotate: [petal.rotate, petal.rotate + 10, petal.rotate + 18, petal.rotate + 24],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: petal.delay,
          }}
          viewBox="0 0 80 92"
        >
          <path d={petalPath} fill={petal.fill} />
        </motion.svg>
      ))}

      {floatingPetals.map((petal, index) => (
        <motion.span
          key={`petal-${index}`}
          className="absolute bg-gradient-to-br from-[#ffd5e7] to-[#f19abc]"
          style={{
            width: petal.w,
            height: petal.h,
            left: petal.left,
            top: petal.top,
            opacity: petal.opacity,
            borderRadius: "100% 30% 100% 30%",
          }}
          animate={{
            y: [0, -16, 6, 0],
            x: [0, 5, -3, 0],
            rotate: [petal.rotate, petal.rotate + 16, petal.rotate - 10, petal.rotate],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: petal.delay,
          }}
        />
      ))}

      {sparkles.map((sparkle, index) => (
        <motion.span
          key={`sparkle-${index}`}
          className="absolute"
          style={{
            width: sparkle.size,
            height: sparkle.size,
            left: sparkle.left,
            top: sparkle.top,
            background: "linear-gradient(135deg, #ffffff 0%, #f7cbe1 100%)",
            clipPath:
              "polygon(50% 0%, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0% 50%, 38% 38%)",
            opacity: 0.9,
          }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.95, 0.3] }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

