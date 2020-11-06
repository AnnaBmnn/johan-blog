import React from "react"
import { useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Logo from "../logo/logo"
import Img from "../../images/menu.svg"
import CloseImg from "../../images/close.svg"
import navStyles from "./nav.module.scss"

const Nav = ({ theme }) => {
  const [open, setOpen] = useState(false)

  const clickHandlerOpenMenu = () => {
    setOpen(true)
  }
  const clickHandlerCloseMenu = () => {
    setOpen(false)
  }

  return (
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
        <div>
          <div
            className={`${navStyles.nav__openBurger} js-open-burger`}
            onClick={clickHandlerOpenMenu}
          >
            Menu
          </div>
          {theme == "basic" ? <Logo className="is-outside"></Logo> : ""}
          <header
            className={`${navStyles.nav__container} ${
              open ? "is-open" : "is-close"
            }`}
          >
            <img
              src={CloseImg}
              className={navStyles.nav__close}
              onClick={clickHandlerCloseMenu}
            ></img>
            <nav>
              <ul className={`${navStyles.nav__list} ${navStyles.nav__menu}`}>
                {data.strapiHomepage.Nav.ListLinksLeft.map((item, i) =>
                  item.LinkTexte ? (
                    <li key={i} className={navStyles.nav__item}>
                      <Link
                        className={navStyles.nav__link}
                        to={`/${item.LinkUrl}`}
                        activeClassName={`is-active`}
                      >
                        {item.LinkTexte}
                      </Link>
                    </li>
                  ) : (
                    <div></div>
                  )
                )}
                <img src={Img} atl="leef" className={navStyles.nav__img}></img>
              </ul>
            </nav>
            <nav>
              <ul className={`${navStyles.nav__list} ${navStyles.nav__social}`}>
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
        </div>
      )}
    />
  )
}

export default Nav
