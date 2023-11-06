import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';


export const CardStudy = () => {
  return (
    <div className="container col col-cols-1 py-5 border border-0 mx-auto ">
      <div className="m-auto d-flex justify-content-center border border-0">
        <i className="bi bi-bookmark-star-fill fs-2 text-dark "></i>
        {/* <i className="bi bi-mortarboard-fill fs-2 text-warning "></i> */}
        <h1 className='fs-4 text-warning fw-normal text-center p-2'>Education</h1>
      </div>
      <div className="col p-1 border border-0">
        <div className="card h-100 rounded-0 bg-transparent shadow">
          <div className="row g-0">
            <div className="col-3 border border-0">
              <i className="bi bi-code card-img-top fs-2 text-warning  pt-3  d-flex justify-content-center"></i>
            </div>
            <div className="col-8 border border-0">
              <div className="card-body">
                <h6 className="card-title text-start text-white fw-normal ">Full Stack Developer (HENRY) <br /><a href="" className='text-dark text-decoration-none' style={{fontSize:'12px'}}>2022</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col p-1  border border-0">
        <div className="card h-100 rounded-0 bg-transparent shadow">
          <div className="row g-0">
            <div className="col-3 border border-0">
              <i className="bi bi-code card-img-top fs-2 text-warning  pt-3  d-flex justify-content-center"></i>
            </div>
            <div className="col-8 border border-0">
              <div className="card-body">
                <h6 className="card-title text-start text-white fw-normal">Specialist in Occupational H & S  (UNIR)<br /><a href="" className='text-dark text-decoration-none' style={{fontSize:'12px'}}>2021-2022</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col p-1  border border-0">
        <div className="card h-100 rounded-0 bg-transparent shadow">
          <div className="row g-0">
            <div className="col-3 border border-0">
              <i className="bi bi-code card-img-top fs-2 text-warning  pt-3  d-flex justify-content-center"></i>
            </div>
            <div className="col-8 border border-0">
              <div className="card-body">
                <h6 className="card-title text-start text-white  fw-normal">Telecommunication Engineer (Colombian Navy)<br /><a href="" className='text-dark text-decoration-none' style={{fontSize:'12px'}}>2015-2020</a> </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col p-1  border border-0">
        <div className="card h-100 rounded-0 bg-transparent shadow">
          <div className="row g-0">
            <div className="col-3 border border-0">
              <i className="bi bi-code card-img-top fs-2 text-warning  pt-3  d-flex justify-content-center"></i>
            </div>
            <div className="col-8 border border-0">
              <div className="card-body">
                <h6 className="card-title text-start text-white  fw-normal">Electromagnetic Communications Technologist <br /><a href="" className='text-dark text-decoration-none' style={{fontSize:'12px'}}>1998-1999</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col p-1  border border-0">
        <div className="card h-100 rounded-0 bg-transparent shadow">
          <div className="row g-0">
            <div className="col-3 border border-0">
              <i className="bi bi-code card-img-top fs-2 text-warning  pt-3  d-flex justify-content-center"></i>
            </div>
            <div className="col-8 border border-0">
              <div className="card-body">
                <h6 className="card-title text-start text-white  fw-normal">Full Stack Developer</h6>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  )
}
