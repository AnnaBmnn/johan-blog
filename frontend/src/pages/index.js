import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PlaylistsComponent from "../components/playlists/playlists"
import CreditsComponent from "../components/credits/credits"
import HeroComponent from "../components/hero/hero"

// import "../assets/css/main.css"

const IndexPage = () => (
  <Layout theme={`main`}>
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
        <div>
          <HeroComponent hero={data.strapiHomepage.Hero} />
          <PlaylistsComponent playlists={data.strapiHomepage.Playlists} />
          <CreditsComponent credits={data.strapiHomepage.Credits} />
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
