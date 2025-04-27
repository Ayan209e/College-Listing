import { HOME } from "@/packages/core/constants ";
import { EmailIcon, PhoneIcon, PinIcon } from "@/packages/icons ";
import { FacebookIcon } from "@/packages/icons/FacebookIcon ";
import { InstagramIcon } from "@/packages/icons/InstagramIcon ";
import { LinkedinIcon } from "@/packages/icons/LinkedinIcon ";
import { TwitterIcon } from "@/packages/icons/TwitterIcon ";
import { Typography } from "@/packages/ui ";
import React from "react";

export const ContactInfo = () => {
  const { ADDRESS, EMAIL, PHONE } = HOME.CONTACT_US_SECTION;

  return (
    <div className="flex flex-col gap-4 items-center lg:items-start">
      {/* Contact Info */}
      <div className="flex gap-3 items-center">
        <EmailIcon className="fill-white" />
        <Typography variant="sm" className="text-gray">
          {EMAIL}
        </Typography>
      </div>

      <div className="flex gap-3 items-center">
        <PhoneIcon className="fill-white" />
        <Typography variant="sm" className="text-gray">
          {PHONE}
        </Typography>
      </div>

      <div className="flex gap-3 items-center">
        <PinIcon className="fill-white" />
        <Typography variant="sm" className="text-gray">
          {ADDRESS}
        </Typography>
      </div>

      {/* Divider */}
      <div className="bg-gray h-px w-full lg:w-1/2" />

      {/* Socials */}
      <div className="flex gap-3">
        <LinkedinIcon className="fill-white hover:fill-gray" />
        <InstagramIcon className="fill-white hover:fill-gray" />
        <TwitterIcon className="fill-white hover:fill-gray" />
        <FacebookIcon className="fill-white hover:fill-gray" />
      </div>
    </div>
  );
};
