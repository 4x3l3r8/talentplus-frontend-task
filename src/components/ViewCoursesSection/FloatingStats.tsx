import React from "react";
import Person1 from "../../../public/images/person1.png";
import Person2 from "../../../public/images/person2.png";
import Person3 from "../../../public/images/person3.png";
import Person4 from "../../../public/images/person4.png";
import Person5 from "../../../public/images/person5.png";
import Image from "next/image";

export const FloatingStats = () => {
  return (
    <div className="absolute flex flex-col px-3 text-center bg-white rounded-lg -left-10 top-1/4">
      <span className="text-sm font-bold capitalize">255k+ enrolled students</span>
      <div className="flex h-auto px-2 -space-x-4">
        <Image className="inline-block w-10 h-10 md:h-12 md:w-auto" src={Person1} alt={"person"} />
        <Image className="inline-block w-10 h-10 md:h-12 md:w-auto" src={Person2} alt={"person"} />
        <Image className="inline-block w-10 h-10 md:h-12 md:w-auto" src={Person3} alt={"person"} />
        <Image className="inline-block w-10 h-10 md:h-12 md:w-auto" src={Person4} alt={"person"} />
        <Image className="inline-block w-10 h-10 md:h-12 md:w-auto" src={Person5} alt={"person"} />
      </div>
    </div>
  );
};
