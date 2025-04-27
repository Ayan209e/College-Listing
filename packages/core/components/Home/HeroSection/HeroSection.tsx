import React from "react";
import { HeroContent } from "./HeroContent";
import { HeroSectionBackground } from "./HeroSectionBackground";

export const HeroSection = () => {
  return (
    <div className="w-full min-h-[560px] md:min-h-[700px] flex justify-center relative">
      <HeroSectionBackground />
      <HeroContent />
    </div>
  );
};
