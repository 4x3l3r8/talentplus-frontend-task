"use client";
import React, { ReactNode } from "react";
import { IoIosRemove, IoIosAdd } from "react-icons/io";

export const AccordionLayout: React.FC<{
  title: string;
  children: ReactNode;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}> = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index: number) => activeIndex !== index && setActiveIndex(index);

  return (
    <>
      <div onClick={() => handleSetIndex(index)} className="flex justify-between md:w-1/2 py-6 p-2 mt-2 rounded cursor-pointer">
        <div className="flex">
          <div className={`text-2xl font-black capitalize text-black ${activeIndex === index && "text-brand-600"}`}>{title}</div>
        </div>
        <div className="flex items-center justify-center">
          {activeIndex !== index ? <IoIosAdd className="w-8 h-8" /> : <IoIosRemove className="w-8 h-8" />}
        </div>
      </div>

      {activeIndex === index && <div className="p-4 mb-6 md:w-1/2 shadow-3xl rounded-2xl shadow-cyan-500/50">{children}</div>}
      <div className="border-b-2 md:w-1/2 w-full"></div>
    </>
  );
};
