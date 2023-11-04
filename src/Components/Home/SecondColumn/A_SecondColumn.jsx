import { B_CardEducationExp } from "./B_CardEducationExp"
import { C_CardServices } from "./C_CardServices"

export const A_SecondColumn = () => {
  return (
    <div className="">
      <div className="col text-white ps-4 fs-3 ">Education & Experience</div>
      <B_CardEducationExp/>
      <div className="col text-white ps-4 fs-3 ">Programing Services</div>
      <C_CardServices/>
    </div>
  )
}
