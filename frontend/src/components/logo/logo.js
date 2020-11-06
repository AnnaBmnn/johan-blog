import React from "react"
import { Link } from "gatsby"

import logoStyles from "./logo.module.scss"

const Logo = ({ className }) => {
  return (
    <Link to={`/`} className={`${logoStyles.logo} ${className}`}>
      <h2 className={`${logoStyles.logo} ${className}`}>Johan Pham</h2>
    </Link>
  )
}

export default Logo
