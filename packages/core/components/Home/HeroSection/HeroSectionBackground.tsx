import React from "react";
import { motion } from "framer-motion";
import { AnimatedGrid } from "@/packages/ui ";

export const HeroSectionBackground = () => {
  return (
    <div>
      <AnimatedGrid
        numSquares={20}
        maxOpacity={0.1}
        duration={1.5}
        repeatDelay={0}
        className="absolute inset-x-0 inset-y-0 h-[100%] -z-10 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
      />
      {/* Fading Top & Bottom Overlays */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />

      {/* Animated Blurred Circles */}
      <motion.div
        className="absolute bottom-4 right-4 lg:-right-28 size-64 lg:size-[450px] bg-primary rounded-full blur-3xl opacity-50 z-0"
        animate={{
          x: [0, 10, -10, 0],
          y: [0, -180, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -top-3 left-2 lg:-left-32 size-64 lg:size-96 bg-secondary rounded-full blur-3xl opacity-50 z-0"
        animate={{
          x: [0, -120, 120, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
