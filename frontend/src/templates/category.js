import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query Category($slug: String!) {
    articles: allStrapiArticle(
      filter: { status: { eq: "published" }, category: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          slug
          title
          category {
            name
          }
        }
      }
    }
    category: strapiCategory(slug: { eq: $slug }) {
      name
    }
  }
`

const Category = ({ data }) => {
  const category = data.category.name

  return (
    <Layout>
      <Seo
        title={category + " - Strapi Gatsby Blog Starter"}
        description={category + " on my blog"}
      />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category}</h1>
        </div>
      </div>
    </Layout>
  )
}

export default Category
