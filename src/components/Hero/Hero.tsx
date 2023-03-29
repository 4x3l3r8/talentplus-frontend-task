import React from "react";
import { Banner } from "../Banner";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

const Hero = () => {
  return (
    <div className="flex flex-col h-auto bg-brand-600 lg:bg-transparent lg:h-screen">
      <div className="flex h-5/6 lg:px-12">
        <div className="flex flex-col w-full space-y-10 lg:flex-row px-9">
          <LeftSide />
          <RightSide />
        </div>
      </div>
      <Banner />
    </div>
  );
};

export { Hero };
