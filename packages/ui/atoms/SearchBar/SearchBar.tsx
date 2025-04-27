"use client";
import { CrossIcon, SearchIcon } from "@/packages/icons ";
import React, { useState } from "react";
import { Button } from "../Button";
import { ISearchBarProps } from "./search-bar.interface";
import { cn } from "@/packages/core ";

export const SearchBar = ({
  className,
  defaultValue,
  onChange,
  onSearch,
  placeholder = "Search",
}: ISearchBarProps) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    onChange?.(value);
  };

  const handleSearch = () => {
    onSearch?.(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="group flex relative w-full bg-white/20 overflow-hidden rounded-3xl focus-within:shadow-searchBar transition-all duration-300">
      <Button
        variant="ghost"
        className="p-0 absolute top-1/2 left-5 translate-y-[-50%] cursor-pointer"
        onClick={() => handleSearch()}
      >
        <SearchIcon stroke={3} height={30} color={value ? "white" : "gray"} />
      </Button>
      <input
        className={cn(
          "w-full h-full bg-transparent p-6 pl-16 text-2xl text-white focus:outline-none focus:shadow-searchBar placeholder:text-gray",
          className
        )}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {value ? (
        <Button
          variant="ghost"
          className="p-0 absolute top-1/2 right-5 translate-y-[-50%] cursor-pointer"
          onClick={() => setValue("")}
        >
          <CrossIcon stroke={3} height={20} color="white" />
        </Button>
      ) : null}
    </div>
  );
};
