import React from "react";
import { ArrowRight } from "@/packages/icons ";
import { HOME } from "@/packages/core/constants ";
import { ShimmerButton, Typography } from "@/packages/ui ";
import { motion } from "framer-motion";

export const HeroCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <ShimmerButton
        shimmerSize="2px"
        shimmerDuration="2.5s"
        className="w-80 py-2 md:py-4 my-2 flex gap-4 hover:scale-105 buttonRef"
      >
        <Typography variant="xl">{HOME.HERO_SECTION.CTA}</Typography>
        <ArrowRight />
      </ShimmerButton>
    </motion.div>
  );
};
