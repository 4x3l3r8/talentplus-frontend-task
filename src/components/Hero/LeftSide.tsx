import React from "react";
import { Button } from "../shared";
import { BsArrowUpRight } from "react-icons/bs";
import Person1 from "../../../public/images/person1.png";
import Person2 from "../../../public/images/person2.png";
import Person3 from "../../../public/images/person3.png";
import Person4 from "../../../public/images/person4.png";
import Person5 from "../../../public/images/person5.png";
import Image from "next/image";

export const LeftSide = () => {
  return (
    <div className="flex flex-col justify-center w-full h-auto gap-4 text-center md:gap-5 md:text-left md:h-full md:w-1/2">
      <h3 className="px-2 text-3xl font-bold text-white md:text-6xl font-clash">Grow your skills to advance your career path </h3>
      <p className="px-2 text-xs text-white capitalize md:mr-48 md:text-base font-satoshi">
        build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
      </p>
      <div className="flex items-stretch gap-2 align-middle md:gap-5 md:px-2">
        <Button
          size="lg"
          color="primary"
          className="flex items-center justify-center flex-1 gap-1 px-4 text-xs bg-transparent border border-white md:px-5 md:flex-none py-auto md:text-base"
        >
          Get Started Now <BsArrowUpRight />
        </Button>
        <Button size="lg" color="white" className="">
          Enroll Now
        </Button>
      </div>
      <div className="flex justify-center md:justify-start">
        <div className="flex h-auto px-2 -space-x-4">
          <Image className="inline-block w-10 h-10 md:h-12 md:w-auto" src={Person1} alt={"person"} />
          <Image className="inline-block w-10 h-10 md:h-12 md:w-auto" src={Person2} alt={"person"} />
          <Image className="inline-block w-10 h-10 md:h-12 md:w-auto" src={Person3} alt={"person"} />
          <Image className="inline-block w-10 h-10 md:h-12 md:w-auto" src={Person4} alt={"person"} />
          <Image className="inline-block w-10 h-10 md:h-12 md:w-auto" src={Person5} alt={"person"} />
        </div>

        <div className="flex flex-col -space-y-2 text-center text-white font-clash">
          <span className="text-lg font-bold md:text-2xl">255k+</span>
          <span className="text-xs font-light md:text-base">Previews</span>
        </div>
      </div>
    </div>
  );
};
