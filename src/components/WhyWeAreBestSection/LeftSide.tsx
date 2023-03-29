import Image from "next/image";
import React from "react";
import boylearning from "../../../public/images/boylearning.png";

export const LeftSide = () => {
  return (
    <div className="flex flex-col items-center flex-1 gap-3 md:items-start md:gap-3 py-7 ">
      <h3 className="text-[24px] md:text-[56px] capitalize text-center md:text-start font-bold leading-[36px] md:leading-[70px] text-[#000F24] font-clash ">
        this is why we are best from others
      </h3>
      <p className="text-[#A1A1A1] text-center md:text-start text-base capitalize md:mb-4 md:pr-48">
        high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </p>
      <Image src={boylearning} alt={"boy learning from computer"} />
    </div>
  );
};
