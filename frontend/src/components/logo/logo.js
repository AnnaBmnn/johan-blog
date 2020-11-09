import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import logoStyles from "./logo.module.scss"

const Logo = ({ className }) => {
  return (
    <AniLink
      fade
      duration={0.3}
      to={`/`}
      className={`${logoStyles.logo} ${className}`}
      alt={`Johan Pham`}
    >
      <h2 className={`${logoStyles.logo} ${className}`}>Johan Pham</h2>
    </AniLink>
  )
}

export default Logo
