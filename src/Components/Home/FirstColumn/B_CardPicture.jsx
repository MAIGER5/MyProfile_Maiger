import yo from '../../../Multimedia/Images/yo.png'


export const B_CardPicture = () => {
  return (
    <div className='bg-secondary m-auto ' style={{width:'93%'}}>
      <div className="card m-auto bg-secondary border-0  p-0" style={{width:'70%'}}>
          <img src={yo} className="rounded-circle m-auto mt-3" alt="..." style={{width:'40%', objectFit:'cover', objectPosition:'center'}} />
        <div className="card-body">
          <h5 className="card-title text-white text-center">Maiger Ovalle Ruz</h5>
          <p className="card-text text-white text-center">Some quick example text to build on the card title and make up the   bulk of the  content.</p>
        </div>
      </div>
    </div>
  )
}
