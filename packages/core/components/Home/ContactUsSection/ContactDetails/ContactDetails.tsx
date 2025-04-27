import React from "react";
import { ContactSectionHeading } from "./ContactSectionHeading";
import { ContactInfo } from "./ContactInfo";

export const ContactDetails = () => {
  return (
    <div className="text-white w-full lg:w-[40%] xl:w-full flex flex-col text-center lg:text-left gap-10 pr-0 lg:pr-20">
      <ContactSectionHeading />
      <ContactInfo />
    </div>
  );
};
