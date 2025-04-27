import React from "react";
import { motion } from "framer-motion";
import { Typography } from "../../atoms";
import { FOOTER } from "@/packages/core ";

export const FooterTop = () => {
  const {
    ABOUT_US,
    CONTACT_US,
    DIRECT_ADMISSION,
    NEED_COUNSELLING,
    TOP_COLLEGES,
    TOP_LOCATIONS,
    TOP_UNIVERSITIES,
  } = FOOTER.QUICK_LINKS;

  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="w-full flex gap-5 justify-center flex-col sm:flex-row sm:justify-between items-center sm:items-start">
        <div className="text-3xl text-black hover:text-gray">LOGO</div>

        <div className="flex flex-col gap-6 justify-center items-end text-gray hover:text-black">
          <div className="bg-gray/30 w-full mt-5 h-px sm:w-px sm:h-5 sm:hidden" />

          <div className="flex gap-6 ">
            <div className="flex flex-col gap-3 justify-center items-start">
              <Typography className="text-gray hover:text-black">
                {ABOUT_US}
              </Typography>
              <Typography className="text-gray hover:text-black">
                {CONTACT_US}
              </Typography>
              <Typography className="text-gray hover:text-black">
                {NEED_COUNSELLING}
              </Typography>
            </div>

            <div className="flex flex-col gap-3 justify-center items-start">
              <Typography className="text-gray hover:text-black">
                {TOP_COLLEGES}
              </Typography>
              <Typography className="text-gray hover:text-black">
                {TOP_LOCATIONS}
              </Typography>
              <Typography className="text-gray hover:text-black">
                {TOP_UNIVERSITIES}
              </Typography>
            </div>
          </div>

          <div className="bg-gray/30 w-full mb-5 h-px sm:w-px sm:h-5 sm:hidden" />
        </div>
      </div>
    </motion.div>
  );
};
