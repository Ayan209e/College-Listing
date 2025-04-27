import React, { useEffect, useRef } from "react";
import { PulsatingButton, Typography } from "../../atoms";
import { MessageQuestionIcon } from "@/packages/icons/MessageQuestionIcon ";
import { cn, NAVBAR, responsiveHorizontalPadding } from "@/packages/core ";
import gsap from "gsap";

export const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);
  return (
    <div
      className={cn(
        "top-0 left-0 right-0 flex justify-between items-center gap-4 py-4 absolute z-[10000]",
        responsiveHorizontalPadding
      )}
      ref={navbarRef}
    >
      <div>Logo</div>

      <PulsatingButton className="flex justify-center items-center gap-2 group">
        <MessageQuestionIcon className="fill-primary-active group-hover:fill-primary" />
        <Typography
          variant="xl"
          className="text-primary-active group-hover:text-primary"
        >
          {NAVBAR.NEED_COUNSELLING}
        </Typography>
      </PulsatingButton>
    </div>
  );
};
