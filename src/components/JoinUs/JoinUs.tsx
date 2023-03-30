import Image from "next/image";
import React from "react";
import pattern from "../../../public/images/pattern2.svg";
import worldPeople from "../../../public/images/worldpeople.png";
import { Button } from "../shared";

export const JoinUs = () => {
  return (
    <div className="md:h-[calc(100vh-5vh)] h-auto flex flex-col bg-transparent relative">
      <Image src={pattern} alt={""} className={"absolute object-cover -z-[1] right-0 left-0 h-full w-screen bg-brand-600"} />
      <div className="flex flex-col pt-4 mx-auto text-center md:gap-2 md:w-4/6 md:py-14">
        <span className="w-3/5 mx-auto text-base text-white uppercase">join our community</span>
        <h3 className="text-[24px] md:text-[56px] capitalize text-center font-bold leading-[36px] md:leading-[70px] text-white font-clash">
          are you ready to connect with the future talent of the tech world
        </h3>
        <span className="w-3/5 mx-auto text-base text-white capitalize">meet up with other techstars and grow together</span>
      </div>
      <Image src={worldPeople} alt={"dotted out world map with small rounded images of people"} className={"mx-auto"} />
      <Button color="white" size="lg" className="mx-auto mt-5 mb-4">
        join our community
      </Button>
    </div>
  );
};
