import React from "react";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export const WhyWeAreBestSection = () => {
  return (
    <div className="flex gap-20 flex-col md:flex-row px-3 md:py-16 md:px-32 bg-[#F8F9FC]">
      <LeftSide />
      <RightSide />
    </div>
  );
};
