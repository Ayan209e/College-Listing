import React from "react";
import { Typography } from "@/packages/ui ";
import { HOME } from "@/packages/core/constants ";
import { motion } from "framer-motion";

export const HeroDescription = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <Typography variant="2xl" className="text-gray text-xl md:text-2xl">
        {HOME.HERO_SECTION.DESCRIPTION}
      </Typography>
    </motion.div>
  );
};
