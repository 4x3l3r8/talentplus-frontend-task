import React from "react";
import { SliderSection } from "./SliderSection";

export const Testimonials = () => {
  return (
    <div className="pb-20 w-full flex flex-col bg-[#F8F9FC]">
      <div className="flex flex-col mx-auto text-center md:gap-2 md:w-4/6">
        <h3 className="text-[24px] md:text-[56px] capitalize text-center font-bold leading-[36px] md:leading-[70px] text-[#000F24] font-clash">
          what our clients are saying
        </h3>
        <span className="text-base w-3/5 mx-auto text-[#a1a1a1] capitalize">
          high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </span>
      </div>
      <div className="hidden md:block">
        <SliderSection noOfSlides={3} />
      </div>
      <div className="block md:hidden">
        <SliderSection noOfSlides={1} />
      </div>
    </div>
  );
};
