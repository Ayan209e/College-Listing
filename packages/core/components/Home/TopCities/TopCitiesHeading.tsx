import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/packages/core/utils ";
import { Typography } from "@/packages/ui ";
import { HOME } from "@/packages/core/constants ";

export const TopCitiesHeading = () => {
  const { TITLE, DESCRIPTION } = HOME.TOP_CITIES_SECTION;

  const heading = TITLE.split(" ");
  const styledWordIndices = [1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="text-center text-black flex flex-col gap-4">
        <Typography
          variant="subheading"
          className="text-3xl lg:text-5xl"
          uppercase
        >
          {heading.map((word, index) => (
            <span
              key={index}
              className={cn(
                styledWordIndices.includes(index) ? "text-secondary" : ""
              )}
            >
              {word}{" "}
            </span>
          ))}
        </Typography>

        <Typography variant="2xl" className="text-gray text-lg lg:text-2xl">
          {DESCRIPTION}
        </Typography>
      </div>
    </motion.div>
  );
};
