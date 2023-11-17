import { B_CardImgPresent } from "./B_CardImgPresent"
import { A_FirstColumn } from "./FirstColumn/A_FirstColumn"
import { A_SecondColumn } from "./SecondColumn/A_SecondColumn"


export const Home = () => {
  return (

    <div className="bg-primary">

      <div>
        <B_CardImgPresent/>
      </div>
      
      <div className="row  p-0 px-md-5 ">
        <div className="col-12 col-md-4  p-4">
          <A_FirstColumn/>
        </div>


        <div className="col-12 col-md-8  p-4 ">
            <A_SecondColumn/>
        </div>
      </div>
    </div>
  )
}
