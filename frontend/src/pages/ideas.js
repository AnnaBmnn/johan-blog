import React from "react"
import { graphql } from "gatsby"

import ArticlesComponent from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query Ideas {
    articles: allStrapiArticle(
      filter: { status: { eq: "published" } }
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          slug
          title
          image {
            publicURL
            childImageSharp {
              fixed(width: 660) {
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
    }
  }
`

const Ideas = ({ data }) => {
  const articles = data.articles.edges

  return (
    <Layout theme={`basic`} className={`is-intro`}>
      <Seo title={"Idées"} description={"voilà mes idées"} />
      <ArticlesComponent articles={articles} />
    </Layout>
  )
}

export default Ideas
