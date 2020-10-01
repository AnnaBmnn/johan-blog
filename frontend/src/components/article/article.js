import React from "react"
import Img from "gatsby-image"

import ArticleHeaderComponent from "../articleHeader/articleHeader"
import SeparatorComponent from "../separator/separator"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import articleStyles from "./article.module.scss"

const Article = ({ articleData }) => {
  return (
    <div>
      <div className={`grid ${articleStyles.article}`}>
        <ArticleHeaderComponent
          articleData={articleData}
        ></ArticleHeaderComponent>
        <div className={`grid__col-6--center ${articleStyles.article__txt}`}>
          <MDXProvider>
            <MDXRenderer>
              {articleData.childStrapiArticleContent.childMdx.body}
            </MDXRenderer>
          </MDXProvider>
        </div>
        <div className={`grid__col-10--center`}>
          <img src={articleData.image.publicURL}></img>
        </div>
      </div>
      <SeparatorComponent></SeparatorComponent>
    </div>
  )
}

export default Article
