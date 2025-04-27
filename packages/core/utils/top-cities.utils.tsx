import { lazy, Suspense } from "react";
import { topCities, topCityIllustrations } from "../constants/top-cities";

export const getCityIllustration = (
  city: keyof typeof topCityIllustrations
) => {
  const CityComponent = topCityIllustrations[city];
  return CityComponent ? <CityComponent /> : null;
};

export const getTopCities = () => {
  return topCities.map((city) => ({
    id: city.toLowerCase(),
    title: city,
    image: getCityIllustration(city),
  }));
};
