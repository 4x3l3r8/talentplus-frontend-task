"use client";
import React, { useState } from "react";
import { AccordionLayout } from "./AccordionLayout";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="flex flex-col items-center justify-center mb-4 md:mb-12">
      <AccordionLayout title="is there a free trial available?" index={1} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution
        and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform
        in the worldd definition.
      </AccordionLayout>

      <AccordionLayout title="can i change my plan later?" index={2} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution
        and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform
        in the worldd definition.
      </AccordionLayout>
      <AccordionLayout title="are the courses lifetime?" index={3} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution
        and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform
        in the worldd definition.
      </AccordionLayout>
      <AccordionLayout title="do i get certified after taking courses?" index={4} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution
        and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform
        in the worldd definition.
      </AccordionLayout>
      <AccordionLayout title="how do i reach out to mentors?" index={5} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution
        and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform
        in the worldd definition.
      </AccordionLayout>
      <AccordionLayout title="do we get job ready after taking courses?" index={6} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution
        and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform
        in the worldd definition.
      </AccordionLayout>
    </div>
  );
};

export { Accordion };
