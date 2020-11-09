import React, { useEffect, createRef } from "react"

import lottie from "lottie-web"
import animationFire from "../../json/fire.json"
import animationFireTache from "../../images/fire__tache.png"
import animationObjects from "../../json/objects.json"
import animationLeef from "../../json/leef.json"
import imgGuitare from "../../images/guitare.svg"
import imgTente from "../../images/tente.svg"
import imgVase from "../../images/vase.svg"
import animationsStyles from "./animations.module.scss"

const App = () => {
  let animationFireContainer = createRef()
  let animationObjectsContainer = createRef()
  let animationLeefContainer = createRef()

  useEffect(() => {
    const animFire = lottie.loadAnimation({
      container: animationFireContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationFire,
    })
    const animObjects = lottie.loadAnimation({
      container: animationObjectsContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationObjects,
    })
    const animLeef = lottie.loadAnimation({
      container: animationLeefContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationLeef,
    })
    return () => {
      animFire.destroy()
      animLeef.destroy()
      animObjects.destroy()
    }
  }, [])

  return (
    <div className="App">
      <div
        className={`${animationsStyles.animations__fire}`}
        ref={animationFireContainer}
      />
      <img
        className={`${animationsStyles.animations__fireTache}`}
        src={animationFireTache}
        alt="la couleur du feu"
      />
      <div
        className={`${animationsStyles.animations__objects}`}
        ref={animationObjectsContainer}
      />
      <div
        className={`${animationsStyles.animations__leef}`}
        ref={animationLeefContainer}
      />
      <img
        className={`${animationsStyles.animations__guitare}`}
        src={imgGuitare}
        alt="la guitare"
      />

      <img
        className={`${animationsStyles.animations__vase}`}
        src={imgVase}
        alt="le vase"
      />
      <img
        className={`${animationsStyles.animations__tente}`}
        src={imgTente}
        alt="la tente"
      />
    </div>
  )
}

export default App
