import Image from "next/image";
import React from "react";
import { FloatingStats } from "./FloatingStats";
import workingman from "../../../public/images/workingman.png";
import workingwoman from "../../../public/images/workingwoman.png";

export const RightSide = () => {
  return (
    <div className="relative flex flex-1">
      <FloatingStats />
      <Image src={workingman} alt={"A working man"} className={"justify-center mx-auto md:h-min"} />
      <Image src={workingwoman} alt={"A working woman"} className={"absolute -bottom-10 -left-24 justify-center md:h-min"} />
    </div>
  );
};
