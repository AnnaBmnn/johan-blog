import React, { useEffect, createRef } from "react"

import lottie from "lottie-web"
import animationFire from "../../json/fire.json"
import animationFireTache from "../../images/fire__tache.png"
import animationObjects from "../../json/objects.json"
import animationLeef from "../../json/leef.json"
import animationVase from "../../json/vase.json"
import animationGuitare from "../../json/guitare.json"
import imgTente from "../../images/tente.svg"
import animationsStyles from "./animations.module.scss"

const App = () => {
  let animationFireContainer = createRef()
  let animationObjectsContainer = createRef()
  let animationLeefContainer = createRef()
  let animationVaseContainer = createRef()
  let animationGuitareContainer = createRef()

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
    const animVase = lottie.loadAnimation({
      container: animationVaseContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationVase,
    })
    const animGuitare = lottie.loadAnimation({
      container: animationGuitareContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationGuitare,
    })
    return () => {
      animFire.destroy()
      animLeef.destroy()
      animObjects.destroy()
      animVase.destroy()
      animGuitare.destroy()
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
      <div
        className={`${animationsStyles.animations__guitare}`}
        ref={animationGuitareContainer}
      />
      <div
        className={`${animationsStyles.animations__vase}`}
        ref={animationVaseContainer}
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
