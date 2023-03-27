import React from "react";
import { Banner } from "../Banner";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

const Hero = () => {
  return (
    <div className="flex flex-col h-auto bg-brand-600 md:bg-transparent md:h-screen">
      <div className="flex h-5/6 md:px-12">
        <div className="flex flex-col w-full space-y-10 md:flex-row px-9">
          <LeftSide />
          <RightSide />
        </div>
      </div>
      <Banner />
    </div>
  );
};

export { Hero };
