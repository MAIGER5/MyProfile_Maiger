import React from "react";
import styles from './MyProyects.module.css'


// eslint-disable-next-line react/prop-types
export const CardModel = ({ title, description, date, image }) => {
  return (
    <div className={`card ${styles.swiperCard}`} >
      <img src={image} className={`card-img-top`} alt="" style={{}} />
      <div className="card-body bg-danger rounded-bottom-2">
        <h1 className="card-title fs-6 fw-medium text-center text-primry"> {title} </h1>
        <p className="card-text text-Primary" style={{fontSize:'14px'}}>
          {description}
        </p>
        <p className='card-text'>
          <small className='text-body-secondary'> {date} </small>
        </p>
      </div>
    </div>
  )
}
