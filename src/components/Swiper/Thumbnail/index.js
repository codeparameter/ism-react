import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import "./index.css"

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export function Slides(pics) {
    return <>
        {
        pics.map(pic => 
                          <SwiperSlide key={pic.id}>
                              <img src={`${process.env.REACT_APP_PROTOCOL}://${pic.url}`} 
                                  width="690" height="440" alt="alt pic" />
                          </SwiperSlide>
                      )
        }
    </>
};

export default function Thumbnail({pics}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const Pics = Slides(pics);

  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbnail"
      >
        {Pics}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbnail-nav"
      >
        {Pics}
      </Swiper>
    </>
  );
}
