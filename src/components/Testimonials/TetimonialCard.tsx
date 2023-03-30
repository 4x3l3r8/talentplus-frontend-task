import Image from "next/image";
import React from "react";
import tesProfile from "../../../public/images/TesProfile.png";

export const TestimonialCard = () => {
  return (
    <div className="flex flex-col px-6 py-10 mx-6 bg-white rounded-3xl">
      <span className="text-sm leading-[24px] capitalize text-[#a1a1a1]">
        high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution
        and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform
        in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our
        quality education. the best and largest all-in-one online tutoring platform in the world
      </span>
      <div className="inline-flex items-center gap-2 mt-5 text-xs">
        <span className="flex items-center gap-1 text-base font-bold text-black">
          <Image src={tesProfile} alt={"passport"} />
        </span>

        <div className="flex flex-col font-semibold text-black">
          <span className="text-sm font-bold">Bella Moon</span>
          <span className="text-xs text-[#a1a1a1]">Product Designer</span>
        </div>
      </div>
    </div>
  );
};
