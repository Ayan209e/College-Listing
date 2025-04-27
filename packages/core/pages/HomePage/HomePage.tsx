import React from "react";
import { HeroSection } from "../../components";
import {
  ContactUsSection,
  FeaturedSection,
  SearchSection,
  TestimonialsSection,
  TopCities,
} from "../../components/Home";

export const HomePage = () => {
  return (
    <div className="w-full h-full ">
      <HeroSection />
      <SearchSection />
      <TopCities />
      <FeaturedSection />
      <TestimonialsSection />
      <ContactUsSection />
    </div>
  );
};
