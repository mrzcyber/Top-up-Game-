"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";



export default function Slider({sliders}) {

  return (
    <div className=" relative  md:w-[1200px] h-[200px] md:h-[450px] rounded-xl overflow-hidden mb-10     border-1 border-gray-400/30 ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        spaceBetween={50}
        centeredSlides={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full "
      >
        {sliders?.map((slider) => (
          <SwiperSlide key={slider.id}>
            <Image
              src={slider.banner}
              alt="promo"
              fill
              className=" object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
