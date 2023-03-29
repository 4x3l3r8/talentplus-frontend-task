import React from "react";
import { Button } from "../shared";
import { CourseCard } from "./CourseCard";
import { courses } from "./Courses";

export const PopularSection = () => {
  const categories = [
    {
      id: 1,
      name: "All Categories",
    },
    {
      id: 2,
      name: "Design",
    },
    {
      id: 3,
      name: "Development",
    },
    {
      id: 4,
      name: "Marketing",
    },
  ];
  return (
    <div className="py-20 w-full flex flex-col bg-[#F8F9FC]">
      <div className="flex flex-col mx-auto text-center md:gap-2 md:w-4/6">
        <h3 className="text-[24px] md:text-[56px] capitalize text-center font-bold leading-[36px] md:leading-[70px] text-[#000F24] font-clash">
          browse our popular courses
        </h3>
        <span className="text-base w-3/5 mx-auto text-[#a1a1a1] capitalize">
          high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </span>
      </div>
      <div className="flex mx-auto justify-evenly md:w-3/6 md:my-12">
        {categories.map((cat) => (
          <button key={cat.id} className={"border-none focus:bg-white bg-transparent text-brand-500 font-bold text-base py-3 px-4 rounded"}>
            {cat.name}
          </button>
        ))}
      </div>
      <div className="grid w-full grid-cols-2 grid-rows-3 gap-6 px-3 lg:grid-cols-3 lg:grid-rows-2 lg:px-32">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
        
      </div>

      <div className="mx-auto py-9">
        <Button color="primary" size="lg">
          Explore All Courses
        </Button>
      </div>
    </div>
  );
};
