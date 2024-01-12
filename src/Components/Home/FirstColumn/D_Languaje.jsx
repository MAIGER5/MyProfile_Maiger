
export const D_Languaje = () => {
  return (
    <div className='row text-white container m-auto border border-0 pb-3' style={{width:'93%'}}>
        <div className="col-4 text-dark">
            <p className="text-white text-center">Spanish</p>
            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-dark text-primary" style={{width: '100%'}}>100%</div>
            </div>
        </div>
        <div className="col-4 text-dark">
            <p className="text-white text-center">English</p>
            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-dark text-primary" style={{width: '70%'}}>70%</div>
            </div>
        </div>
        <div className="col-4 text-dark">
            <p className="text-white text-center">French</p>
            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-dark text-primary" style={{width: '10%'}}>10%</div>
            </div>
        </div>

    </div>
  )
}
