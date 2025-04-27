import { HOME } from "@/packages/core/constants ";
import { Button } from "@/packages/ui ";
import React from "react";

export const SearchQuickLinks = () => {
  const {
    CHIPS: { DIRECT_ADMISSION, TOP_COLLEGES, TOP_LOCATION, TOP_UNIVERSITIES },
  } = HOME.SEARCH_SECTION;
  return (
    <div className="flex gap-4 justify-center items-center flex-wrap">
      <Button
        className="bg-secondary/50 hover:bg-secondary/70"
        rippleColor="bg-secondary"
        size="sm"
      >
        {TOP_COLLEGES}
      </Button>
      <Button
        className="bg-secondary/50 hover:bg-secondary/70"
        rippleColor="bg-secondary"
        size="sm"
      >
        {TOP_UNIVERSITIES}
      </Button>
      <Button
        className="bg-secondary/50 hover:bg-secondary/70"
        rippleColor="bg-secondary"
        size="sm"
      >
        {TOP_LOCATION}
      </Button>
      <Button
        className="bg-secondary/50 hover:bg-secondary/70"
        rippleColor="bg-secondary"
        size="sm"
      >
        {DIRECT_ADMISSION}
      </Button>
    </div>
  );
};
