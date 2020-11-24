import React from "react"

import Layout from "../components/layout"
import QuatreCentQuatre from "../components/404/404"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <QuatreCentQuatre />
    </Layout>
  )
}

export default NotFoundPage
