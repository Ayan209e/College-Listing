import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@/packages/ui ";
import { HOME } from "@/packages/core/constants ";
import { cn } from "@/packages/core/utils ";

export const FeaturedSectionHeader = () => {
  const { TITLE, DESCRIPTION } = HOME.FEATURED_SECTION;

  const heading = TITLE.split(" ");
  const styledWordIndices = [0];

  return (
    <motion.h1
      initial={{ opacity: 0, y: 250, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 150, scale: 1 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 py-4 text-center"
    >
      <Typography
        variant="subheading"
        className="text-3xl lg:text-5xl"
        uppercase
      >
        {heading.map((word, index) => (
          <span
            key={index}
            className={cn(
              styledWordIndices.includes(index) ? "text-primary" : ""
            )}
          >
            {word}{" "}
          </span>
        ))}
      </Typography>

      <Typography variant="2xl" className="text-gray text-lg lg:text-2xl">
        {DESCRIPTION}
      </Typography>
    </motion.h1>
  );
};
