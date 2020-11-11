import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Moment from "react-moment"

import sommaireStyles from "./sommaire.module.scss"

const Sommaire = ({ articles }) => {
  return (
    <ul className={sommaireStyles.sommaire__section}>
      {articles.map((article, i) => {
        return (
          <li className={sommaireStyles.sommaire__item} key={article.node.slug}>
            <Moment
              format="DD.MM.YYYY"
              className={sommaireStyles.sommaire__date}
            >
              {article.node.published_at}
            </Moment>
            <AniLink
              fade
              duration={0.3}
              to={`/article/${article.node.slug}`}
              className={sommaireStyles.sommaire__link}
              alt={sommaireStyles.sommaire__title}
            >
              <span
                className={sommaireStyles.sommaire__title}
              >{`${article.node.title}`}</span>
            </AniLink>
          </li>
        )
      })}
    </ul>
  )
}

export default Sommaire
