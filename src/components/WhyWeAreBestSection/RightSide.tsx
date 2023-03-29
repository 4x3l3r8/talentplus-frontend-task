import React from "react";
import { MdCastForEducation, MdGroups2, MdOutlineSchedule, MdLocalAtm } from "react-icons/md";

export const RightSide = () => {
  return (
    <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-3 py-24 md:gap-10 md:mr-24">
      <div className="px-6 py-8 bg-white rounded-lg">
        <div className="flex flex-col gap-4">
          <div className="bg-[#4C7FBD] text-2xl p-4 text-white w-max rounded">
            <MdCastForEducation />
          </div>
          <div className="mt-4">
            <h6 className="text-lg font-bold capitalize">experienced mentors</h6>
            <p className="leading-[28px] text-xs capitalize text-[#A1A1A1]">
              high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher
              resolution and quality than standard definition.
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 py-8 bg-white rounded-lg">
        <div className="flex flex-col gap-4">
          <div className="bg-[#AECD5E] text-2xl p-4 text-white w-max rounded">
            <MdOutlineSchedule />
          </div>
          <div className="mt-4">
            <h6 className="text-lg font-bold capitalize">one-on-one meetings</h6>
            <p className="leading-[28px] text-xs capitalize text-[#A1A1A1]">
              high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher
              resolution and quality than standard definition.
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 py-8 bg-white rounded-lg">
        <div className="flex flex-col gap-4">
          <div className="bg-[#ED6BA6] text-2xl p-4 text-white w-max rounded">
            <MdGroups2 />
          </div>
          <div className="mt-4">
            <h6 className="text-lg font-bold capitalize">one-on-one meetings</h6>
            <p className="leading-[28px] text-xs capitalize text-[#A1A1A1]">
              high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher
              resolution and quality than standard definition.
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 py-8 bg-white rounded-lg">
        <div className="flex flex-col gap-4">
          <div className="bg-[#EA6B45] text-2xl p-4 text-white w-max rounded">
            <MdLocalAtm />
          </div>
          <div className="mt-4">
            <h6 className="text-lg font-bold capitalize">affordable prices</h6>
            <p className="leading-[28px] text-xs capitalize text-[#A1A1A1]">
              high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher
              resolution and quality than standard definition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
