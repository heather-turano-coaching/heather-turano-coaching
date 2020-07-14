const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, `../../../.env`),
});

const siteConfig = require("./src/gatsby/site.config");

const denyListedUrls = ["/cancel-payment", "/payment-success", "/404"];

module.exports = {
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: siteConfig.siteMetadataConfig,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: denyListedUrls,
      },
    },
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
          "../../../node_modules/@heather-turano-coaching/documents/disclosures"
        ),
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [
          {
            userAgent: "Googlebot",
            allow: "/",
            disallow: denyListedUrls,
            crawlDelay: 2,
          },
          {
            userAgent: "OtherBot",
            allow: "/",
            disallow: denyListedUrls,
            crawlDelay: 2,
          },
          {
            userAgent: "*",
            allow: "/",
            disallow: denyListedUrls,
            crawlDelay: 10,
            cleanParam: "ref /articles/",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: siteConfig.manifestConfig,
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          "/404",
          "/cancel-payment",
          "/index",
          "/payment-success",
          "/sign-up",
        ],
        workboxConfig: {
          cacheId: `mm100-offline-cache`,
          globPatterns: ["**/*"],
        },
      },
    },
  ],
};
