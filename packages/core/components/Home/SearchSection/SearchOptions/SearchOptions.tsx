import { HOME } from "@/packages/core/constants ";
import { SearchBar } from "@/packages/ui ";
import React from "react";
import { SearchQuickLinks } from "./SearchQuickLinks";

export const SearchOptions = () => {
  const { SEARCH_PLACEHOLDER } = HOME.SEARCH_SECTION;
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full lg:w-2/3">
      <SearchBar
        placeholder={SEARCH_PLACEHOLDER}
        className="p-5 pl-16 md:p-6 md:pl-16"
      />
      <SearchQuickLinks />
    </div>
  );
};
