import React from "react"

import heroStyles from "./hero.module.scss"

const Hero = ({ hero }) => (
  <section className={heroStyles.hero}>
    <h1 className={heroStyles.hero__title}>{hero.HeroTitle}</h1>
    <p className={heroStyles.hero__txt}>{hero.HeroText}</p>
  </section>
)

export default Hero
