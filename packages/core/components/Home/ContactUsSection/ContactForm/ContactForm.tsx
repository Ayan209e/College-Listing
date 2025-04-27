import React from "react";
import { ContactFormFields } from "./ContactFormFields";
import { BorderBeam, ShimmerButton } from "@/packages/ui ";
import { HOME } from "@/packages/core/constants ";

export const ContactForm = () => {
  const { SUBMIT } = HOME.CONTACT_US_SECTION.CONTACT_FORM;
  return (
    <div className="relative w-full lg:w-[60%] xl:w-full p-6 lg:p-10 bg-gradient-to-br from-white/10 to-white/1 rounded-3xl h-full flex flex-col gap-6">
      <ContactFormFields />
      <ShimmerButton className="text-lg">{SUBMIT}</ShimmerButton>

      <BorderBeam
        duration={6}
        size={500}
        className="from-transparent via-primary to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={500}
        className="from-transparent via-secondary to-transparent"
      />
    </div>
  );
};
