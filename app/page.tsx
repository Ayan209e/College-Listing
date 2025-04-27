"use client";
import { cn, HomePage, responsiveHorizontalPadding } from "@/packages/core ";
import Cursor from "@/packages/core/components/Cursor/Cursor ";
import { Footer, Navbar } from "@/packages/ui ";

export default function Home() {
  return (
    <div
      className={cn(
        "size-full h-full min-h-screen mt-20",
        responsiveHorizontalPadding
      )}
    >
      <Cursor />
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
