import React from "react"
import { Link } from "gatsby"

import logoStyles from "./logo.module.scss"

const Logo = ({}) => {
  return (
    <Link to={`/`} className={logoStyles.logo}>
      <h2 className={logoStyles.logo}>Johan Pham</h2>
    </Link>
  )
}

export default Logo
