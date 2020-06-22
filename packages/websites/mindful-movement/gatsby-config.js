const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, `../../../.env`),
});

module.exports = {
  siteMetadata: {
    title: `100 Days of Mindful Movement`,
    description: `Signup to join the 100 Days of Mindful Movement!`,
    author: `drew@imaginedelements.com`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        dimensions: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.HTC_MINDFUL_MOVEMENT_CONTENTFUL_SPACE_ID,
        accessToken: process.env.HTC_MINDFUL_MOVEMENT_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
        name: `images`,
      },
    },
    `gatsby-transformer-remark`,
    /**
     * @todo Turn this into a plugin inside of it's own directory
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: path.resolve(
          __dirname,
          "../../../node_modules/@heather-turano-coaching/documents/docs"
        ),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `100 Days of Mindful Movement`,
        short_name: `Mindful Movement 100`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `Mindful Movement 100`,
        icon: `static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Product"],
        secretKey: process.env.HTC_STRIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
