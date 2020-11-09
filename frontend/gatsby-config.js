require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Johan Blog",
    titleTemplate: "%s · Unleash content",
    description: "Le blog de johan",
    url: process.env.API_URL || "http://localhost:1337", // No trailing slash allowed!
    image: "/uploads/default-image.jpeg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@AnnaBmnn",
    appleTouch: "src/images/gatsby-icon.png",
    favicon32: "src/images/gatsby-icon.png",
    favicon16: "src/images/gatsby-icon.png",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: ["article", "category", "user"],
        singleTypes: [`Homepage`],
        queryLimit: 1000,
      },
    },
    `gatsby-plugin-preact`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /inline/,
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#a2b4a8",
        theme_color: "#a2b4a8",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png",
      },
    },
    "gatsby-plugin-offline",
  ],
}
