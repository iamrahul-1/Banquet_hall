import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";

import "./styles.css";
// Images

import one from "../../assets/one.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";

export default function ImageCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src={one} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide2} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide3} />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
