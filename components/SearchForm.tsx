"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Input } from "./ui/input";

const SearchForm = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <form className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
      <label className="flex-center relative w-full max-w-3xl">
        <Image
          src="/magnifying-glass.svg"
          className="absolute left-6"
          width={32}
          height={32}
          alt="Search icon"
        />
        <Input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="base-regular h-full border-0 bg-black-400 py-4 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800"
        />
      </label>
    </form>
  );
};

export default SearchForm;
