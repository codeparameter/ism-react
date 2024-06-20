import { SwiperSlide } from 'swiper/react';

export default function BlockSlides(block) {
    return <>
        {
        block.pics.map(pic => 
                            <SwiperSlide key={pic.id}>
                                <img src={`${process.env.REACT_APP_PROTOCOL}://${pic.url}`} />
                            </SwiperSlide>
                        )
        }
    </>
};
