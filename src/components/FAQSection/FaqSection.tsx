"use client";
import React from "react";
import { Accordion } from "./Accordion";

export const FaqSection = () => {
  return (
    <div className="relative flex flex-col h-auto bg-[#F8F9FC]">
      <div className="flex flex-col pt-4 mx-auto text-center md:gap-2 md:w-4/6 md:py-14">
        <h3 className="text-[24px] md:text-[56px] capitalize text-center font-bold leading-[36px] md:leading-[70px] text-black font-clash">
          frequently asked questions
        </h3>
        <span className="w-3/5 mx-auto text-base text-[#a1a1a1] capitalize">
          high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </span>
      </div>
      <Accordion />
    </div>
  );
};
