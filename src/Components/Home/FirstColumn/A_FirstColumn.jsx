import { B_CardPicture } from "./B_CardPicture"
import { C_CardInformationBasic } from "./C_CardInformationBasic"
import { D_Languaje } from "./D_Languaje"
import { E_ProgrammingLevel } from "./E_ProgrammingLevel"
import { F_Framworks } from "./F_Framworks"

export const A_FirstColumn = () => {
  return (
    <div className="">
      <B_CardPicture/>
      <C_CardInformationBasic/>
      <D_Languaje/>
      <E_ProgrammingLevel/>
      <F_Framworks/>
    </div>
  )
}
