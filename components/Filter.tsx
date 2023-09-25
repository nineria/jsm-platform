"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

const links = ["all", "Next 13", "frontend", "backend", "fullstack"];

const Filter = () => {
  const [active, setActive] = useState<string>("");

  const handleFilter = (link: string) => {
    setActive(link);
  };
  return (
    <ul className="body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 text-white-800 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={cn(
            "whitespace-nowrap rounded-lg px-8 py-2.5 capitalize",
            active === link ? "gradient_blue-purple" : "",
          )}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filter;
