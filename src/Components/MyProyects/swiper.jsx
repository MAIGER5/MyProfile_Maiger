import React from 'react';
import styles from './MyProyects.module.css'
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

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  };
  return (
    <div className={`border border-0  ${styles.portadaImage}`}>
      <div className="card bg-transparent border border-0">
        <div className="card-body" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <h1 className="card-title text-center text-danger fw-bold" style={{letterSpacing:'6px'}}>WEB APP PROYECTS</h1>
          <p className="card-text text-center text-danger">Explore My Proyects</p>
          <p className={` p-2 w-50 fw-bold fs-6 text-center rounded-5  ${styles.botonContact}`}>CONTACTO</p>
        </div>
      </div>
      <Swiper className={`border border-0 bg-transparent px-lg-2 px-xl-5 `}
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={2}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true,}}
        // scrollbar={{ draggable: true,  }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={breakpoints}
      >
          {
              Proyects.map((pro)=>(
                  <SwiperSlide className={`border border-0 px-5  `}  key={pro.id} >
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
    </div>
  );
};