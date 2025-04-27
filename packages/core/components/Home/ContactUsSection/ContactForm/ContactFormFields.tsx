import { HOME } from "@/packages/core/constants ";
import { EmailIcon, GraduationCapIcon, MessageIcon, PhoneIcon, PinIcon, UserIcon } from "@/packages/icons ";
import { TextArea, TextInput } from "@/packages/ui ";
import React from "react";

export const ContactFormFields = () => {
  const {
    CITY,
    COURSES,
    DEFAULT_COUNTRY_CODE,
    EMAIL,
    FULL_NAME,
    MESSAGE,
    PHONE,
  } = HOME.CONTACT_US_SECTION.CONTACT_FORM;

  return (
    <div className="flex flex-col gap-4 z-30">
      <TextInput
        icon={<UserIcon className="fill-gray" height={20} width={20} />}
        placeholder={FULL_NAME}
      />
      <TextInput
        icon={<EmailIcon className="fill-gray" height={20} width={20} />}
        placeholder={EMAIL}
      />
      <div className="flex gap-4 items-end">
        <div className="w-[40%] xl:w-[20%]">
          <TextInput disabled defaultValue={DEFAULT_COUNTRY_CODE} />
        </div>
        <TextInput
          icon={<PhoneIcon className="fill-gray" height={20} width={20} />}
          placeholder={PHONE}
        />
      </div>
      <TextInput
        icon={<PinIcon className="fill-gray" height={20} width={20} />}
        placeholder={CITY}
      />
      <TextInput
        icon={
          <GraduationCapIcon className="fill-gray" height={20} width={20} />
        }
        placeholder={COURSES}
      />
      <TextArea
        icon={<MessageIcon className="fill-gray" height={20} width={20} />}
        placeholder={MESSAGE}
      />
    </div>
  );
};
