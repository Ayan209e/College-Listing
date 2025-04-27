import { LampContainer } from "@/packages/ui ";
import React from "react";
import { motion } from "framer-motion";
import { FeaturedSectionHeader } from "./FeaturedSectionHeader";
import { FeaturedSectionContent } from "./FeaturedSectionContent";

export const FeaturedSection = () => {
  return (
    <LampContainer
      className="rounded-[40px] mb-10"
      header={<FeaturedSectionHeader />}
    >
      <FeaturedSectionContent />
    </LampContainer>
  );
};
