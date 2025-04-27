import React from "react";
import { Button, Card } from "@/packages/ui ";
import { HOME } from "@/packages/core/constants ";

export const FeaturedSectionContent = () => {
  return (
    <div className="w-full flex flex-col flex-wrap justify-center items-center gap-10 -mt-5 sm:mt-10">
      <div className="flex flex-wrap justify-center items-center gap-0 sm:gap-y-12 sm:gap-10">
        <Card
          name="Delhi Technical University"
          location="Delhi, India"
          rating={4.1}
          fees="2.5L - 4.5L/Year"
          stream="Engineering"
        />
        <Card
          name="Delhi Technical University"
          location="Delhi, India"
          rating={4.1}
          fees="2.5L - 4.5L/Year"
          stream="Engineering"
        />
        <Card
          name="Delhi Technical University"
          location="Delhi, India"
          rating={4.1}
          fees="2.5L - 4.5L/Year"
          stream="Engineering"
        />
      </div>

      <Button
        size="lg"
        className="text-primary-active px-16 hover:text-primary uppercase"
      >
        {HOME.FEATURED_SECTION.VIEW_ALL}
      </Button>
    </div>
  );
};
