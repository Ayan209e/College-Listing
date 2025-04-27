import React from "react";
import { TopCitiesHeading } from "./TopCitiesHeading";
import { TopCitiesCarousel } from "./TopCitiesCarousel";

export const TopCities = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-12 z-50 py-8 md:py-20 rounded-[40px] mt-0 mb-10 md:my-10">
     <TopCitiesHeading />
     <TopCitiesCarousel />
    </div>
  );
};
