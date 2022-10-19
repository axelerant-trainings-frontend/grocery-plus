import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ProductGallery = ({ images }) => {
  const [activeThumb, setActiveThumb] = useState<SwiperCore>();
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        modules={[Thumbs]}
        grabCursor={true}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        className="h-308 w-294 rounded-sm"
      >
        {images &&
          images.map((item, index) => (
            <SwiperSlide key={index} className="relative overflow-hidden">
              <img
                src={item}
                alt="product gallery image"
                className="m-0 h-full w-full object-cover object-center p-0"
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Thumbs]}
        className="-left-[4px] mt-52"
      >
        {images &&
          images.map((item, index) => (
            <SwiperSlide key={index} className="!mx-15 !h-66 !w-66 rounded-xxs">
              <img
                src={item}
                alt="product gallery thumbnail"
                className="m-0 h-full w-full rounded-xxs object-cover object-center p-0"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default ProductGallery;
