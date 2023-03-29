import React from "react";
import { FloatingStats } from "./FloatingStats";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export const ViewCoursesSection = () => {
  return (
    <section className="flex flex-col lg:flex-row px-3 md:py-16 md:px-32 bg-[#F8F9FC]">
      <LeftSide />
      <RightSide />
    </section>
  );
};
