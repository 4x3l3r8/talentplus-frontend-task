import Image, { StaticImageData } from "next/image";
import React from "react";
import working from "../../../public/images/working.png";
import person from "../../../public/images/author1.png";
import { AiFillStar } from "react-icons/ai";
import { MdSchedule, MdMenuBook } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";

interface ICourse {
  id: number;
  title: string;
  tag: string;
  duration: string;
  author: string;
  cost: number;
  rating: string;
  lesson: number;
  no_of_ratings: string;
  author_profile: StaticImageData;
  course_image: StaticImageData;
}

export const CourseCard: React.FC<{ course: ICourse }> = ({ course }) => {
  return (
    <div className="px-5 py-4 bg-white cursor-pointer rounded-2xl">
      <Image src={course.course_image} alt={"man working on laptop"} className={"object-contain w-full"} />
      <div className="flex justify-between my-3 text-xs">
        <span className="px-5 py-1 font-bold bg-blue-500 bg-opacity-20 text-brand-500 rounded-2xl">{course.tag}</span>

        <div className="text-[#a1a1a1] items-center inline-flex gap-2">
          <span className="flex items-center">
            {course.rating}
            <AiFillStar className="text-[#F7B435]" />
          </span>
          <span>({course.no_of_ratings})</span>
        </div>
      </div>

      <p className="font-semibold capitalize md:text-2xl md:pr-16 md:mt-4 md:mb-2 font-clash">{course.title}</p>

      <div className="flex justify-between my-3 text-xs">
        <span className="flex items-center gap-1 text-[#a1a1a1] text-base">
          <MdSchedule />
          {course.duration}
        </span>

        <span className="flex items-center gap-1 text-[#a1a1a1] text-base">
          <MdMenuBook />
          {course.lesson} Lessons
        </span>
      </div>

      <div className="flex justify-between mt-5 text-xs">
        <span className="flex items-center gap-1 text-base font-bold text-black">
          <Image src={course.author_profile} alt={"passport"} />
          {course.author}
        </span>

        <span className="flex items-center font-semibold md:text-xl text-brand-500">
          <TbCurrencyDollar className="m-0" />
          {course.cost.toFixed(2)}
        </span>
      </div>
    </div>
  );
};
