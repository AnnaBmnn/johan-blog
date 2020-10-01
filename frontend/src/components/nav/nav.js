import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Logo from "../logo/logo"

import navStyles from "./nav.module.scss"

const Nav = ({ theme }) => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          Nav {
            ListLinksLeft {
              LinkTexte
              LinkUrl
            }
            ListLinksRight {
              LinkTexte
              LinkUrl
            }
          }
        }
      }
    `}
    render={data => (
      <header className={navStyles.nav__container}>
        <nav>
          <ul className={navStyles.nav__list}>
            {data.strapiHomepage.Nav.ListLinksLeft.map((item, i) =>
              item.LinkTexte ? (
                <li key={i} className={navStyles.nav__item}>
                  <Link className={navStyles.nav__link} to={item.LinkUrl}>
                    {item.LinkTexte}
                  </Link>
                </li>
              ) : (
                <div></div>
              )
            )}
          </ul>
        </nav>
        {theme == "basic" ? <Logo></Logo> : ""}
        <nav>
          <ul className={navStyles.nav__list}>
            {data.strapiHomepage.Nav.ListLinksRight.map((item, i) =>
              item.LinkTexte ? (
                <li key={i} className={navStyles.nav__item}>
                  <Link className={navStyles.nav__link} to={item.LinkUrl}>
                    {item.LinkTexte}
                  </Link>
                </li>
              ) : (
                <div></div>
              )
            )}
          </ul>
        </nav>
      </header>
    )}
  />
)

export default Nav
