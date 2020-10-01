import React from "react"

import SeparatorSvg from "../../inline/separator.inline.svg"
import separatorImg from "../../images/separator.png"

import separatorStyles from "./separator.module.scss"

const Separator = ({}) => {
  return (
    <div className={separatorStyles.separator}>
      <SeparatorSvg />
    </div>
  )
}

export default Separator
