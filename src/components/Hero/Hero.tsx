import React from "react";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

const Hero = () => {
  return (
    <div className="h-auto bg-brand-600 md:bg-transparent md:h-screen">
      <div className="flex h-5/6">
        <div className="flex flex-col w-full space-y-10 md:flex-row px-9">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export { Hero };
