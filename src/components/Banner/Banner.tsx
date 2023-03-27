import Image from "next/image";
import React from "react";
import zoom from "../../../public/images/zoom.png";
import stripe from "../../../public/images/stripe.png";
import monday from "../../../public/images/monday.png";
import slack from "../../../public/images/slack.png";
import dropbox from "../../../public/images/dropbox.png";

export const Banner = () => {
  return (
    <section className="flex items-center h-16 justify-center space-x-3 flex-grow md:space-x-12 bg-[#CCDBF0]">
      <Image src={zoom} alt={"zoom logo"} className={"h-2 w-12 md:w-fit md:h-1/5"} />
      <Image src={stripe} alt={"zoom logo"} className={"h-3 w-10 md:w-fit md:h-1/4"} />
      <Image src={monday} alt={"zoom logo"} className={"h-3 w-16 md:w-fit md:h-1/4"} />
      <Image src={slack} alt={"zoom logo"} className={"h-3 w-12 md:w-fit md:h-1/4"} />
      <Image src={dropbox} alt={"zoom logo"} className={"h-3 w-12 md:w-fit md:h-1/4"} />
    </section>
  );
};
