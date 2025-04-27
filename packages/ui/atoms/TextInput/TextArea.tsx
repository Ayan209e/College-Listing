"use client";
import React, { isValidElement, useState } from "react";
import { cn } from "@/packages/core ";
import { Typography } from "../Typography";
import { ErrorIcon } from "@/packages/icons/ErrorIcon ";
import { ITextInputProps } from "./text-input.interface";

export const TextArea = ({
  className,
  defaultValue,
  disabled,
  id = "text-input",
  onChange,
  label,
  variant = "light",
  error,
  placeholder,
  icon,
}: ITextInputProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setValue(value);
    onChange?.(value);
  };

  return (
    <div className="relative flex flex-col bg-transparent w-full">
      <label
        htmlFor={id}
        className={cn({
          "text-gray": variant === "light",
          "text-white": variant === "dark",
          "text-red-500": error,
        })}
      >
        {label}
      </label>
      <textarea
        className={cn(
          "px-3 py-2 pb-[10px] rounded-md placeholder:text-gray focus:outline-none w-full backdrop-blur-sm disabled:opacity-50 disabled:pointer-events-none",
          {
            "text-gray bg-gray/20 focus:border-2 box-border focus:border-gray":
              variant === "light",
            "text-white bg-white/20 focus:border-2 box-border focus:border-white":
              variant === "dark",
            "border-red-500 border-2 text-red-500 focus:border-red-500": error,
          },
          {
            "pl-9": icon,
          },
          className
        )}
        disabled={disabled}
        id={id}
        value={value}
        onChange={handleChange}
        maxLength={300}
        placeholder={placeholder}
      />
      {error ? (
        <div className="flex items-center text-red-500 mt-1 gap-1">
          <ErrorIcon />
          <Typography variant="sm">{error}</Typography>
        </div>
      ) : null}

      {icon && isValidElement(icon) && (
        <div className="absolute top-[10px] left-[10px]">{icon}</div>
      )}
    </div>
  );
};
