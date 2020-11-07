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
      publishedAt
      Playlists {
        PlaylistUrl
      }
      Seo {
        metaDescription
        metaTitle
        shareImage {
          image {
            publicURL
          }
        }
      }
      image {
        publicURL
        childImageSharp {
          fluid {
            src
          }
        }
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
        image={articleData.Seo.shareImage.image.publicURL}
      />

      <ArticleComponent articleData={articleData}></ArticleComponent>
    </Layout>
  )
}

export default Article
