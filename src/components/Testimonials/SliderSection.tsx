"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import { TestimonialCard } from "./TetimonialCard";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

export const SliderSection: React.FC<{ noOfSlides: number }> = ({noOfSlides}) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: noOfSlides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    className: "py-16",
    // variableWidth: true
  };
  return (
    <Slider {...settings}>
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </Slider>
  );
};
