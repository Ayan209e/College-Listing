import React from "react";
import { HeroCTA } from "./HeroCTA";
import { HeroHeading } from "./HeroHeading";
import { HeroDescription } from "./HeroDescription";

export const HeroContent = () => {
  return (
    <div className="flex flex-col gap-5 my-20 md:my-32 lg:my-40 items-center text-center w-full lg:w-[90%] xl:w-[75%] z-50">
      <HeroHeading />
      <HeroDescription />
      <HeroCTA />
    </div>
  );
};
