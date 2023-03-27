import React from "react";
import { Button } from "../shared";
import { IoMdVolumeHigh } from "react-icons/io";
import { MdOutlineSettingsInputAntenna, MdOutlineDescription } from "react-icons/md";

export const LeftSide = () => {
  return (
    <div className="flex flex-col items-center flex-1 gap-3 md:items-start md:gap-9 py-7">
      <h3 className="text-[24px] md:text-[56px] text-center md:text-start font-bold leading-[36px] md:leading-[70px] text-[#000F24] font-clash ">
        High quality video, audio & live classes
      </h3>
      <p className="text-[#A1A1A1] text-center md:text-start text-base capitalize md:pr-48">
        high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </p>
      <Button color="primary" size="lg" className="w-max">
        View Courses
      </Button>
      <div className="flex w-full">
        <div className="flex flex-col justify-center w-3/6 gap-4 md:items-start md:min-w-4/6 md:max-w-5/6">
          <div className="flex gap-4">
            <div className="flex items-center gap-4 p-5 bg-white rounded-lg">
              <div className="p-2 rounded bg-[#3FA96A] bg-opacity-25">
                <IoMdVolumeHigh color="#3FA96A" />
              </div>
              <span className="font-bold">Audio Classes</span>
            </div>

            <div className="flex items-center gap-4 p-5 bg-white rounded-lg">
              <div className="p-2  rounded bg-[#F69E8E] bg-opacity-25">
                <MdOutlineSettingsInputAntenna color="#F69E8E" />
              </div>
              <span className="font-bold">Live Classes</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-4 p-5 bg-white rounded-lg w-max">
              <div className="p-2 rounded bg-[#9269CD] bg-opacity-25">
                <IoMdVolumeHigh color="#9269CD" />
              </div>
              <span className="font-bold">Recorded Classes</span>
            </div>

            <div className="flex items-center gap-4 p-5 bg-white rounded-lg">
              <div className="p-2  rounded bg-[#5978CF] bg-opacity-25">
                <MdOutlineDescription color="#5978CF" />
              </div>
              <span className="font-bold">50+ Notes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
