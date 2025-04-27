import React from "react";
import { Carousel } from "@/packages/ui ";
import { getTopCities } from "@/packages/core/utils ";

export const TopCitiesCarousel = () => {
  const items = getTopCities();
  return <Carousel items={items} />;
};
