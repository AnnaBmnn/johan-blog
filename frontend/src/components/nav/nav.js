import React, { useEffect, createRef, useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import lottie from "lottie-web"
import animationLeef from "../../json/leef.json"
import Logo from "../logo/logo"
import Img from "../../images/menu.svg"
import Hover1Img from "../../images/1.svg"
import Hover2Img from "../../images/2.svg"
import Hover3Img from "../../images/3.svg"
import Hover4Img from "../../images/4.svg"
import Hover5Img from "../../images/5.svg"
import Hover6Img from "../../images/6.svg"
import CloseImg from "../../images/Close.svg"
import BurgerImg from "../../images/burger.svg"
import navStyles from "./nav.module.scss"

const Nav = ({ theme }) => {
  const HoverImgs = [Hover1Img, Hover2Img, Hover3Img]
  const Hover2Imgs = [Hover4Img, Hover5Img, Hover6Img]
  const body = document.querySelector(body)
  const [open, setOpen] = useState(false)
  let animationLeefContainer = createRef()

  const clickHandlerOpenMenu = () => {
    setOpen(true)
    body.classList.add("burgerOpen")
  }
  const clickHandlerCloseMenu = () => {
    setOpen(false)
    body.classList.add("burgerClose")
  }
  const handleBtnKeyUpClose = event => {
    event = event || window.event
    if (event.keyCode === 32) {
      // contrôle la touche espace
      this.clickHandlerCloseMenu(event)
    }
  }
  const handleBtnKeyUpOpen = event => {
    event = event || window.event
    if (event.keyCode === 32) {
      // contrôle la touche espace
      this.clickHandlerOpenMenu(event)
    }
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
            role="button"
            tabindex="0"
            onKeyUp={handleBtnKeyUpOpen}
          >
            <img src={BurgerImg} alt></img>
          </div>
          <Logo
            className={`is-outside  ${theme == "basic" ? "" : "is-for-index"}`}
          ></Logo>
          <header
            className={`${navStyles.nav__container} ${
              open ? "is-open" : "is-close"
            }`}
          >
            <img
              src={CloseImg}
              className={navStyles.nav__close}
              onClick={clickHandlerCloseMenu}
              onKeyUp={handleBtnKeyUpClose}
              role="button"
              tabindex="0"
            ></img>
            <nav>
              <ul className={`${navStyles.nav__list} ${navStyles.nav__menu}`}>
                {data.strapiHomepage.Nav.ListLinksLeft.map((item, i) =>
                  item.LinkTexte ? (
                    <li key={i} className={navStyles.nav__item}>
                      {i === 0 ? (
                        <AniLink
                          fade
                          duration={0.3}
                          className={navStyles.nav__link}
                          to={`/${item.LinkUrl}`}
                          activeClassName={`is-active`}
                          alt={item.LinkTexte}
                        >
                          {item.LinkTexte}
                        </AniLink>
                      ) : (
                        <a
                          className={navStyles.nav__link}
                          href={item.LinkUrl}
                          target="_blank"
                          alt={item.LinkTexte}
                          rel="noreferrer"
                        >
                          {item.LinkTexte}
                        </a>
                      )}

                      <img
                        className={navStyles.nav__linkBg}
                        src={HoverImgs[i]}
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
                      <a
                        className={navStyles.nav__link}
                        href={item.LinkUrl}
                        target="_blank"
                        rel="noreferrer"
                        alt={item.LinkTexte}
                      >
                        {item.LinkTexte}
                      </a>
                      <img
                        className={navStyles.nav__linkBg}
                        src={Hover2Imgs[i % 3]}
                        alt=""
                      ></img>
                    </li>
                  ) : (
                    <li></li>
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
