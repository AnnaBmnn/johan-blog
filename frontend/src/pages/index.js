import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PlaylistsComponent from "../components/playlists"
import CreditsComponent from "../components/credits"

import "../assets/css/main.css"

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          strapiHomepage {
            Hero {
              HeroText
              HeroTitle
            }
            Playlists {
              PlaylistUrl
            }
            Credits {
              CreditsTitle
              CreditsList {
                CreditsListsLabel
                CreditsListName
                CreditsListUrl
              }
            }
          }
        }
      `}
      render={data => (
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>{data.strapiHomepage.Hero.HeroTitle}</h1>
            <p>{data.strapiHomepage.Hero.HeroText}</p>
          </div>
          <PlaylistsComponent playlists={data.strapiHomepage.Playlists} />
          <CreditsComponent credits={data.strapiHomepage.Credits} />
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
