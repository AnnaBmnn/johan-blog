import React, { useEffect, createRef } from "react"
import lottie from "lottie-web"

import Layout from "../components/layout"
import SEO from "../components/seo"
import animationVase from "../json/vase.json"

const NotFoundPage = () => {
  let animationVaseContainer = createRef()

  useEffect(() => {
    const animVase = lottie.loadAnimation({
      container: animationVaseContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationVase,
    })
    return () => {
      animVase.destroy()
    }
  }, [])

  return (
    <Layout>
      <SEO title="404: Not found" />

      <div className={``} ref={animationVaseContainer} />
      <h1>Oh non</h1>
      <p>Le contenu que vous recherchez a été déplacé ou n’existe plus.</p>
    </Layout>
  )
}

export default NotFoundPage
