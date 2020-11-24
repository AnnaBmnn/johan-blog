import React, { useEffect, createRef } from "react"

import lottie from "lottie-web"

import animationVase from "../../json/vase.json"

import quatreCentQuatreStyles from "./404.module.scss"

const QuatreCentQuatre = ({ hero }) => {
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
    <section
      className={`${quatreCentQuatreStyles.quatreCentQuatre__container}`}
    >
      <div
        className={`${quatreCentQuatreStyles.quatreCentQuatre__anim}`}
        ref={animationVaseContainer}
      />
      <h1 className={`${quatreCentQuatreStyles.quatreCentQuatre__title}`}>
        Oh non...
      </h1>
      <p className={`${quatreCentQuatreStyles.quatreCentQuatre__txt}`}>
        Le contenu que vous recherchez a été déplacé ou n’existe plus.
      </p>
    </section>
  )
}

export default QuatreCentQuatre
