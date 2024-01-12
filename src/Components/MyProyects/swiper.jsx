import React from 'react';
import { CardModel } from './CardModel';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Proyects from './DataBase.js';

export const SwiperProyects = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {
            Proyects.map((pro)=>(
                <SwiperSlide key={pro.id}>
                    <CardModel
                        image={pro.image}
                        title={pro.title}
                        description={pro.description}
                        date={pro.date}
                    />
                </SwiperSlide>
            ))
        }
      ...
    </Swiper>
  );
};