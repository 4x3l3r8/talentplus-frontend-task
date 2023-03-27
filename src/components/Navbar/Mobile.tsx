"use client";

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "../shared";
import { iNavLink } from "./Navbar";
import { RxCross2 } from "react-icons/rx";

export const Mobile: React.FC<{ navLinks: iNavLink[] }> = ({ navLinks }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex md:hidden">
      <Button
        onBlur={() => setExpanded(false)}
        onClick={() => setExpanded((prev) => !prev)}
        size="sm"
        className="my-auto bg-transparent"
        color="primary"
      >
        {expanded ? <RxCross2 /> : <AiOutlineMenu />}
      </Button>
      {expanded && (
        <div className="absolute left-0 w-full h-auto top-20 right-1 ">
          <div className="flex flex-col gap-1 mx-1 rounded-lg bg-brand-300">
            {navLinks.map((link, i) => (
              <Button className="text-white" color="link" size="md" key={i}>
                {link.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
