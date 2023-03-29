import Image from "next/image";
import React from "react";
import { FloatingStats } from "./FloatingStats";
import workingman from "../../../public/images/workingman.png";
import workingwoman from "../../../public/images/workingwoman.png";

export const RightSide = () => {
  return (
    <div className="relative flex flex-1">
      <FloatingStats />
      <Image src={workingman} alt={"A working man"} className={"md:justify-center md:mx-auto scale-75 justify-end md:scale-100 md:h-min"} />
      <Image src={workingwoman} alt={"A working woman"} className={"absolute scale-50 md:scale-100 -bottom-10 -left-24 justify-center md:h-min"} />
    </div>
  );
};
