import React from 'react';
import styles from './MyProyects.module.css'
import { SwiperProyects } from './swiper';

export const MyProyects = () => {
  return (
    <div className={` ${styles.portadaImage}`}>
      <div className={`${styles.swiperCard}`}>
        <SwiperProyects/>
      </div>
    </div>
  )
}
