import React from "react";
import { FooterTop } from "./FooterTop";
import { FooterBottom } from "./FooterBottom";
import { BorderBeam } from "../../atoms";

export const Footer = () => {
  return (
    <div className="relative w-full bg-white rounded-t-[40px] border border-gray border-b-0 px-4 py-8 md:py-12 md:px-12 justify-center flex flex-col gap-6 z-50 shadow-2xl shadow-primary">
      <FooterTop />
      <div className="w-full h-[1px] overflow-hidden bg-white relative">
        <BorderBeam
          duration={3}
          size={600}
          className="from-transparent via-primary to-transparent"
        />
      </div>
      <FooterBottom />
    </div>
  );
};
