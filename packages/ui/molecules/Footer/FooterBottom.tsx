import React from "react";
import { motion } from "framer-motion";
import { Typography } from "../../atoms";
import { FOOTER } from "@/packages/core ";
import { TwitterIcon } from "@/packages/icons/TwitterIcon ";
import { FacebookIcon } from "@/packages/icons/FacebookIcon ";
import { LinkedinIcon } from "@/packages/icons/LinkedinIcon ";
import { InstagramIcon } from "@/packages/icons/InstagramIcon ";

export const FooterBottom = () => {
  const { COPYRIGHT, PRIVACY, TERMS } = FOOTER.LEGAL;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="w-full flex flex-col md:flex-row justify-center gap-3 md:justify-between items-center flex-wrap">
        {/* Socials */}
        <div className="flex gap-3">
          <LinkedinIcon className="fill-gray hover:fill-black" />
          <InstagramIcon className="fill-gray hover:fill-black" />
          <TwitterIcon className="fill-gray hover:fill-black" />
          <FacebookIcon className="fill-gray hover:fill-black" />
        </div>

        {/* Legal */}
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="bg-gray/30 w-full mt-5 h-px md:w-px md:h-5 md:hidden" />

          <Typography className="text-gray hover:text-black">
            {TERMS}
          </Typography>
          <div className="bg-gray/30 w-full h-px md:w-px md:h-5" />

          <Typography className="text-gray hover:text-black">
            {PRIVACY}
          </Typography>
          <div className="bg-gray/30 w-full h-px md:w-px md:h-5" />

          <Typography className="text-gray hover:text-black">
            {COPYRIGHT}
          </Typography>

          <div className="bg-gray/30 w-full h-px md:w-px md:h-5 md:hidden" />
        </div>
      </div>
    </motion.div>
  );
};
