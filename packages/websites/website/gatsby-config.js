/* eslint-disable @typescript-eslint/camelcase */
const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../../../.env")
});

const { websiteConfig } = require("./configs/site.config.js");
// const generateRSSFeed = require(`./src/utils/rss/generate-feed`);

module.exports = {
  pathPrefix: websiteConfig.pathPrefix,
  siteMetadata: websiteConfig.siteMetadataConfig,
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      }
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        dimensions: false
      }
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-typescript-checker",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
        name: `images`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: process.env.GHOST_API_URL,
        contentApiKey: process.env.GHOST_CONTENT_API_KEY
      }
    },
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
        )
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: { ...websiteConfig.manifestConfig, cache_busting_mode: "none" }
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        query: `
                {
                    allGhostPost {
                        edges {
                            node {
                                id
                                slug
                                updated_at
                                created_at
                                feature_image
                            }
                        }
                    }
                    allGhostPage {
                        edges {
                            node {
                                id
                                slug
                                updated_at
                                created_at
                                feature_image
                            }
                        }
                    }
                    allGhostTag {
                        edges {
                            node {
                                id
                                slug
                                feature_image
                            }
                        }
                    }
                    allGhostAuthor {
                        edges {
                            node {
                                id
                                slug
                                profile_image
                            }
                        }
                    }
                }`,
        mapping: {
          allGhostPost: {
            sitemap: `posts`
          },
          allGhostTag: {
            sitemap: `tags`
          },
          allGhostAuthor: {
            sitemap: `authors`
          },
          allGhostPage: {
            sitemap: `pages`
          }
        },
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`
        ],
        createLinkInHead: true,
        addUncaughtPages: true
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-remove-serviceworker`
  ]
};
