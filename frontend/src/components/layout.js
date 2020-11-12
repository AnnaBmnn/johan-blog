import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "../assets/styles/main.scss"

import Nav from "./nav/nav"
import Seo from "./seo"

const Layout = ({ children, theme }) => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          Seo {
            metaTitle
            metaDescription
            shareImage {
              image {
                publicURL
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Seo
          title={data.strapiHomepage.Seo.metaTitle}
          description={data.strapiHomepage.Seo.metaDescription}
          image={data.strapiHomepage.Seo.shareImage.image.url}
        />
        <Nav theme={theme} />
        <main className={`theme--${theme}`}>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
