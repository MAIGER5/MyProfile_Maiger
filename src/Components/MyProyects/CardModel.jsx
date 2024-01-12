import React from "react"


// eslint-disable-next-line react/prop-types
export const CardModel = ({ title, description, date, image }) => {
  return (
    <div className="card" style={{ width: '250px' }}>
      <img src={image} className={`card-img-top`} alt="" style={{height:'150px'}} />
      <div className="card-body">
        <h1 className="card-title fs-2"> {title} </h1>
        <p className="card-text">
          {description}
        </p>
        <p className='card-text'>
          <small className='text-body-secondary'> {date} </small>
        </p>
      </div>
    </div>
  )
}
