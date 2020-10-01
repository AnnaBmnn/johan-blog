import React from "react"

import Moment from "react-moment"

import articleHeaderStyles from "./articleHeader.module.scss"

const ArticleHeader = ({ articleData }) => {
  return (
    <header
      className={`grid__col-8--center ${articleHeaderStyles.articleHeader}`}
    >
      <p className={articleHeaderStyles.articleHeader__date}>
        <Moment format="DD.MM.YYYY">{articleData.published_at}</Moment>
      </p>

      <h1 className={articleHeaderStyles.articleHeader__title}>
        {articleData.title}
      </h1>
    </header>
  )
}

export default ArticleHeader
