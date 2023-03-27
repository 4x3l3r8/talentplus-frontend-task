import React from "react";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

const Hero = () => {
  return (
    <div className="h-auto md:h-screen">
      <div className="flex w-screen h-5/6">
        <div className="flex flex-col w-full md:flex-row px-9">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export { Hero };
