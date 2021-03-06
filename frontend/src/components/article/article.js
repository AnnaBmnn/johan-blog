import React from "react"
import Img from "gatsby-image"

import ArticleHeaderComponent from "../articleHeader/articleHeader"
import PlaylistsComponent from "../playlists/playlists"
import MediasComponent from "../medias/medias"

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
        <div
          className={`grid__col-6--center grid__col-12-m grid__col-10-s ${articleStyles.article__txt}`}
        >
          <MDXProvider>
            <MDXRenderer>
              {articleData.childStrapiArticleContent.childMdx.body}
            </MDXRenderer>
          </MDXProvider>
        </div>
        <div className={`grid__col-10--center`}>
          {articleData.Playlists ? (
            <PlaylistsComponent playlists={articleData.Playlists} />
          ) : (
            ""
          )}
          {articleData.medias ? (
            <MediasComponent medias={articleData.medias} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default Article
