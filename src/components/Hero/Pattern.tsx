import Image from "next/image";
import React from "react";
import pattern from "../../../public/images/pattern.svg";

export const Pattern = () => {
  return (
    <div className="absolute top-0 right-0 left-0 md:w-screen md:h-screen bg-brand-600 overflow-clip -z-[100]">
      <Image src={pattern} alt={""} />
    </div>
  );
};
