import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs } from 'swiper';
import productGalleryType from '../../@types/ProductGallery.types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ProductGallery: React.FC<productGalleryType> = ({
  productImages,
}: productGalleryType) => {
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
        {productImages &&
          productImages.map((item, index) => (
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
        className="mt-52 w-[338px]"
      >
        {productImages &&
          productImages.map((item, index) => (
            <SwiperSlide key={index} className="!mx-10 !h-66 !w-66 rounded-xxs">
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
