import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ArticleComponent from "../components/article/article"

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
      strapiId
      title
      content
      Seo {
        metaDescription
        metaTitle
      }
      Playlists {
        PlaylistUrl
      }
      medias {
        url
      }

      childStrapiArticleContent {
        childMdx {
          body
        }
      }
    }
  }
`

const Article = ({ data }) => {
  const articleData = data.strapiArticle
  return (
    <Layout theme={`basic`} className={`is-intro`}>
      <Seo
        title={articleData.Seo.metaTitle}
        description={articleData.Seo.metaDescription}
      />

      <ArticleComponent articleData={articleData}></ArticleComponent>
    </Layout>
  )
}

export default Article
