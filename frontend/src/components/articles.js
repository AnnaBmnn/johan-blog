import React from "react"
import ArticleComponent from "./article/article"

const Articles = ({ articles }) => {
  return (
    <div>
      {articles.map((article, i) => {
        return (
          <ArticleComponent
            articleData={article.node}
            key={`article__${article.node.slug}`}
          />
        )
      })}
    </div>
  )
}

export default Articles
