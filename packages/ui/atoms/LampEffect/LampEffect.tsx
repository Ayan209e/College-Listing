"use client";
import React, { isValidElement } from "react";
import { cn } from "@/packages/core ";
import { motion } from "framer-motion";

export const LampContainer = ({
  children,
  className,
  header,
}: {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode | Element;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0 py-20 pt-[300px]",
        className
      )}
    >
      {header && isValidElement(header) && (
        <div className="text-white z-10 absolute -top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%]">
          {header}
        </div>
      )}

      <div className="relative flex h-full w-full items-center justify-center z-0">
        {/* Left light with fade */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "40rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[40rem] bg-gradient-conic from-primary via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right light with fade */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "40rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[40rem] bg-gradient-conic from-transparent via-transparent to-primary text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Helper fades */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* Upper light with fade */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-primary opacity-50 blur-3xl" />

        {/* Central light */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-primary blur-2xl"
        ></motion.div>

        {/* Main line */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "40rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[40rem] -translate-y-[7rem] bg-primary "
        ></motion.div>
        {/* Upper fade */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black" />
      </div>

      <div className="relative z-50 flex flex-col items-center px-5 text-primary">
        {children}
      </div>
    </div>
  );
};
