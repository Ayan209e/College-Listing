"use client";
import React, { useState } from "react";
import "./Checkbox.css";
import { TickMark } from "@/packages/icons ";
import { ICheckboxProps } from "./checkbox.interface";
import { cn } from "@/packages/core ";

export const Checkbox = ({
  checked = false,
  className,
  label,
  labelClassName,
  onChange,
}: ICheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    onChange?.(event);
  };

  return (
    <div className="bg-transparent flex gap-2 justify-center items-center">
      <div className="bg-transparent">
        <input
          className="hidden"
          type="checkbox"
          checked={isChecked}
          id="checkbox"
          onChange={handleChange}
        />
        <label
          htmlFor="checkbox"
          className={cn("check relative cursor-pointer size-[18px]", className)}
        >
          <TickMark />
        </label>
      </div>
      <label
        htmlFor="checkbox"
        className={(cn("cursor-pointer"), labelClassName)}
      >
        {label}
      </label>
    </div>
  );
};
