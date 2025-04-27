import { HOME } from "@/packages/core/constants ";
import { Button } from "@/packages/ui ";
import React from "react";

export const SearchCTA = () => {
  return (
    <Button size="xl" className="text-lg md:text-2xl px-12 md:px-20 text-primary-active hover:text-primary uppercase tracking-wide">
      {HOME.SEARCH_SECTION.CTA}
    </Button>
  );
};
