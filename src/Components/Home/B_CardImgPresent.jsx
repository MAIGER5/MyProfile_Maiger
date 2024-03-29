// import imgCardPresent from '../../Multimedia/Images/imgCardPresent.png'
import git from '../../Multimedia/Images/git2.png'
// import imgDinamic from '../../Multimedia/Images/imgDinamic.gif';
import styles from './Home.module.css'
import { Link } from 'react-router-dom'


export const B_CardImgPresent = () => {
  return (
    <div className="position-relative border-1" style={{height:'500px'}}>
      <div style={{width:'100%', height:'500px', overflow:'hidden'}}>
        <img src={git} alt="" className={styles.imgCardPresent}/>
      </div>
      <div className='position-absolute top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center px-5 '>
        <div className="card border-info border-0 bg-transparent">
          <div className="row  border-dark border-1 d-flex justify-content-center">
            <div className="col-12 col-sm-12 border border-0">
              <div className="card-body ps-0 p-md-5">
                <h1 className="card-subtitle text-white fs-6 pb-3">
                  Hi there! I'm
                </h1>
                <h1 className="card-title text-white fw-medium fs-1 ">
                  MAIGER
                </h1>
                <h1 className="card-title text-warning fw-bold 1 pb-3" style={{fontSize:'45px'}}>
                  OVALLE RUZ
                </h1>
                <h1 className="card-text text-white fs-5 pb-4">
                  Full Stack Developer & Telecommunications Engineer
                </h1>
                <Link to={'/MyProyects'} className={`btn rounded-0 fw-bolder w-50 ${styles.botonProyects}`}>My Proyects</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}
