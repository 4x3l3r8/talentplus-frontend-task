import Image from "next/image";
import React from "react";
import heroImage from "../../../public/images/heroImage.png";
import figma from "../../../public/images/figma.png";
import vscode from "../../../public/images/vscode.png";
import wordpress from "../../../public/images/wordpress.png";
import lightbulb from "../../../public/images/lightbulb.png";

export const RightSide = () => {
  return (
    <div className="relative flex w-full md:w-1/2 ">
      <Image src={heroImage} alt={"lady smiling"} className={"h-full mx-auto"} />
      <Image src={figma} alt={"figma logo"} className={"absolute -ml-9 md:ml-0 top-1/2 scale-50 md:scale-100 md:top-2/3"} />
      <Image src={vscode} alt={"vs code logo"} className={"absolute md:top-9 right-0 top-2 scale-50 md:scale-100 md:right-32"} />
      <Image src={wordpress} alt={"wordpress logo"} className={"absolute bottom-0 md:mb-0 md:mr-0 -mr-5 -mb-5 right-0 md:bottom-7 scale-50 md:scale-100 md:right-24"} />
      <Image src={lightbulb} alt={"light bulb"} className={"absolute -ml-9 -top-1/4 -left-1/4 md:top-0 md:left-0 md:scale-100 scale-50"} />
    </div>
  );
};
