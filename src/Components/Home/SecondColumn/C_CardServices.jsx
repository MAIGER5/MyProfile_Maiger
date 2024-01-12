import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';


export const C_CardServices = () => {
  return (
    <div className="container row row-cols-1 row-cols-lg-3 g-4 g-sm-0 pb-5 border border-0 mx-auto p-4 p-sm-0 ">

      <div className="col p-1 p-md-3 p-lg-4">
        <div className="card h-100 rounded-0 bg-success shadow">
          <i className="bi bi-braces-asterisk card-img-top fs-1 text-warning px-4 pt-3  d-flex justify-content-center"></i>
          <div className="card-body text-black px-4 ">
            <h5 className="card-title d-flex justify-content-center text-center text-warning pb-2">Full Stack Developer</h5>
            <p className="card-text text-center text-white">Design and Planning of Client-server Architecture. </p>
          </div>
        </div>
      </div>
      <div className="col p-1 p-md-3 p-lg-4">
        <div className="card h-100 rounded-0 bg-secondary shadow">
          <i className="bi bi-filetype-scss card-img-top fs-1 text-warning px-4 pt-3  d-flex justify-content-center"></i>
          <div className="card-body text-black px-4 ">
            <h5 className="card-title d-flex justify-content-center text-center text-warning pb-2">Front-End Developer</h5>
            <p className="card-text text-center text-white">Website Optimization using HTML, CSS and JS. </p>
          </div>
        </div>
      </div>
      <div className="col p-1 p-md-3 p-lg-4">
        <div className="card h-100 rounded-0 bg-secondary shadow">
          <i className="bi bi-database-fill-add card-img-top fs-1 text-warning px-4 pt-3  d-flex justify-content-center"></i>
          <div className="card-body text-black px-4 ">
            <h5 className="card-title d-flex justify-content-center text-center text-warning pb-2">Back-End Developer</h5>
            <p className="card-text text-center text-white">Implementation Web APP using NodeJS & Postgres, Sequelize. </p>
          </div>
        </div>
      </div>
      <div className="col p-1 p-md-3 p-lg-4">
        <div className="card h-100 rounded-0 bg-secondary shadow">
          <i className="bi bi-hdd-rack-fill card-img-top fs-1 text-warning px-4 pt-3  d-flex justify-content-center"></i>
          <div className="card-body text-black px-4 ">
            <h5 className="card-title d-flex justify-content-center text-center text-warning pb-2">Systems Integration & APIs </h5>
            <p className="card-text text-center text-white">Incorporation of New Capabilities Through Application Interaction. </p>
          </div>
        </div>
      </div>
      <div className="col p-1 p-md-3 p-lg-4">
        <div className="card h-100 rounded-0 bg-secondary shadow">
          <i className="bi bi-info-circle-fill card-img-top fs-1 text-warning px-4 pt-3  d-flex justify-content-center"></i>
          <div className="card-body text-black px-4 ">
            <h5 className="card-title d-flex justify-content-center text-center text-warning pb-2">Customized Solutions</h5>
            <p className="card-text text-center text-white">Diagnosis, Optimization and Maintenance of Web App.. </p>
          </div>
        </div>
      </div>
      <div className="col p-1 p-md-3 p-lg-4">
        <div className="card h-100 rounded-0 bg-secondary shadow">
          <i className="bi bi-file-earmark-pdf-fill card-img-top fs-1 text-warning px-4 pt-3  d-flex justify-content-center"></i>
          <div className="card-body text-black px-4 ">
            <h5 className="card-title d-flex justify-content-center text-center text-warning pb-2">Graphic Design</h5>
            <p className="card-text text-center text-white">Balance between creativity and common sense, through professional visual aesthetics.. </p>
          </div>
        </div>
      </div>

    </div>
  )
}
