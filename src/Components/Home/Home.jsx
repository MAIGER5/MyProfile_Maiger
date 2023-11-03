import { B_CardImgPresent } from "./B_CardImgPresent"
import { A_FirstColumn } from "./FirstColumn/A_FirstColumn"
import { A_SecondColumn } from "./SecondColumn/A_SecondColumn"



export const Home = () => {
  return (

    <div>

      <div>
        <B_CardImgPresent/>
      </div>
      
      <div className="row col-12 bg-primary p-0 ">
        <div className="col-12 col-md-4  py-4">
          <A_FirstColumn/>
        </div>


        <div className="col-12 col-md-8 bg-primary p-0">
          <div className="w-100 p-4">
            <A_SecondColumn/>
          </div>
        </div>
      </div>
    </div>
  )
}
