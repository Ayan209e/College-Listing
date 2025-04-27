import React from 'react'
import { motion } from 'framer-motion'

export const TestimonialSectionAnimation = () => {
  return (
    <div>
      {/* Vertical slides - to prevent background to spill */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-20 bg-gradient-to-b from-white z-10" />
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-20 bg-gradient-to-t from-white z-10" />

      {/* Side Fades */}
      <div className="pointer-events-none absolute z-50 inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white" />
      <div className="pointer-events-none absolute z-50 inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white" />

      {/* Animating circles */}
      <motion.div
        className="absolute bottom-4 right-4 lg:right-0 size-64 lg:size-[450px] bg-primary rounded-full blur-3xl opacity-50 z-0"
        animate={{
          x: [0, -110, 10, 0],
          y: [0, 100, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -top-3 left-2 lg:left-0 size-64 lg:size-96 bg-secondary rounded-full blur-3xl opacity-50 z-0"
        animate={{
          x: [0, -10, 120, 0],
          y: [0, 80, 10, 0],
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
}
