import React from "react"
import ReactMarkdown from "react-markdown"

import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import heroStyles from "./hero.module.scss"

const Hero = ({ hero }) => (
  <section className={`${heroStyles.hero}`}>
    <div className={heroStyles.hero__txt}>
      <ReactMarkdown>{hero.HeroContent}</ReactMarkdown>
    </div>
  </section>
)

export default Hero
