import React from "react";
import { motion } from "framer-motion";
import { ContactDetails } from "./ContactDetails";
import { ContactForm } from "./ContactForm";

export const ContactUsSection = () => {
  return (
    <div className="overflow-hidden relative w-full px-6 py-8 md:py-20 md:px-20 rounded-[40px] mt-0 mb-10 bg-black justify-center flex flex-col lg:flex-row gap-12 md:gap-6 xl:gap-12 z-50">
      <ContactDetails />
      <ContactForm />

      <motion.div
        className="absolute -bottom-20 left-4 lg:left-0 size-40 lg:size-[450px] bg-primary hidden lg:block rounded-full blur-3xl opacity-50 z-10"
        animate={{
          x: [0, -110, 80, 0],
          y: [0, 150, 0, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
