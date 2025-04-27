import React from "react";
import { SearchOptions } from "./SearchOptions";
import { SearchHeading } from "./SearchHeading";
import { SearchCTA } from "./SearchCTA";
import { CollisionBeamBackground } from "@/packages/ui ";

export const SearchSection = () => {
  return (
    <CollisionBeamBackground className="w-full px-12 py-8 md:py-20 md:px-12 rounded-[40px] mt-0 mb-10 md:my-10">
      <div className="w-full bg-transparent flex flex-col justify-center items-center gap-6 md:gap-12 z-50">
        <SearchHeading />
        <SearchOptions />
        <SearchCTA />
      </div>
    </CollisionBeamBackground>
  );
};
