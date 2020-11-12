import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PlaylistsComponent from "../components/playlists/playlists"
import CreditsComponent from "../components/credits/credits"
import AnimationsComponent from "../components/animations/animations"
import HeroComponent from "../components/hero/hero"

// import "../assets/css/main.css"

const IndexPage = () => (
  <Layout theme={`main`}>
    <StaticQuery
      query={graphql`
        query {
          strapiHomepage {
            Hero {
              HeroTitle
              HeroContent
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
        <>
          <div className={`grid `}>
            <div className={`grid__col-8`}>
              <AnimationsComponent />
              <HeroComponent hero={data.strapiHomepage.Hero} />
            </div>
            <div className={`grid__col-12 grid__col-10-s`}>
              <PlaylistsComponent playlists={data.strapiHomepage.Playlists} />
            </div>
          </div>
          <CreditsComponent credits={data.strapiHomepage.Credits} />
        </>
      )}
    />
  </Layout>
)

export default IndexPage
