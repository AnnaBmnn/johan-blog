import React, { useEffect, createRef, useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import lottie from "lottie-web"
import animationLeef from "../../json/leef.json"
import Logo from "../logo/logo"
import Img from "../../images/menu.svg"
import HoverImg from "../../images/hover.svg"
import CloseImg from "../../images/Close.svg"
import BurgerImg from "../../images/burger.svg"
import navStyles from "./nav.module.scss"

const Nav = ({ theme }) => {
  const [open, setOpen] = useState(false)
  let animationLeefContainer = createRef()

  const clickHandlerOpenMenu = () => {
    setOpen(true)
  }
  const clickHandlerCloseMenu = () => {
    setOpen(false)
  }

  useEffect(() => {
    const animLeef = lottie.loadAnimation({
      container: animationLeefContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationLeef,
    })
    return () => {
      animLeef.destroy()
    }
  }, [])

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
            <img src={BurgerImg}></img>
          </div>
          <Logo
            className={`is-outside  ${theme == "basic" ? "" : "is-for-index"}`}
          ></Logo>
          <header
            className={`${navStyles.nav__container} ${
              open ? "is-open" : "is-close"
            } ${theme == "basic" ? "" : navStyles.nav__containerIndex}`}
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
                      <img
                        className={navStyles.nav__linkBg}
                        src={HoverImg}
                      ></img>
                    </li>
                  ) : (
                    <div></div>
                  )
                )}
                <div
                  className={`${navStyles.nav__img}`}
                  ref={animationLeefContainer}
                />
              </ul>
            </nav>
            <Logo className="is-inside"></Logo>

            <nav>
              <ul className={`${navStyles.nav__list} ${navStyles.nav__social}`}>
                {data.strapiHomepage.Nav.ListLinksRight.map((item, i) =>
                  item.LinkTexte ? (
                    <li key={i} className={navStyles.nav__item}>
                      <a className={navStyles.nav__link} href={item.LinkUrl}>
                        {item.LinkTexte}
                      </a>
                      <img
                        className={navStyles.nav__linkBg}
                        src={HoverImg}
                      ></img>
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
