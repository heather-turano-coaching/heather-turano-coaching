require("dotenv").config();
const api = require("./.prepare/api");

module.exports = {
  env: {
    NEXT_GHOST_API_KEY: process.env.NEXT_GHOST_API_KEY,
    NEXT_CONTENTFUL_SPACE_ID: process.env.NEXT_CONTENTFUL_SPACE_ID,
    NEXT_CONTENTFUL_ACCESS_TOKEN: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
    COMMENTO_ORIGIN: process.env.COMMENTO_ORIGIN,
    SERVERLESS_API: process.env.SERVERLESS_API,
  },
  async generateBuildId() {
    return require("./package.json").version;
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    /**
     * SVGR
     * https://github.com/gregberge/svgr/tree/master/packages/webpack
     */
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            dimensions: false,
          },
        },
        "url-loader",
      ],
    });
    config.module.rules.push({
      test: /\.(png|jpg|jpeg)$/,
      use: ["url-loader"],
    });

    return config;
  },
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    if (!dev) {
      const [{ authors }, { posts }, categories, { tags }] = await Promise.all([
        api.getAllAuthors(),
        api.getAllPosts(),
        api.getAllCategories(),
        api.getAllTags(),
      ]);

      const authorPages = authors.reduce(
        (accum, author) => ({
          ...accum,
          [`/authors/${author.slug}`]: {
            page: "/authors/[slug]",
            query: { slug: author.slug },
          },
        }),
        {}
      );

      const postPages = posts.reduce(
        (accum, post) => ({
          ...accum,
          [`/post/${post.slug}`]: {
            page: "/post/[slug]",
            query: { slug: post.slug },
          },
        }),
        {}
      );

      const categoryPages = categories.reduce(
        (accum, category) => ({
          ...accum,
          [`/categories/${category.slug}`]: {
            page: "/categories/[slug]",
            query: { slug: category.slug },
          },
        }),
        {}
      );

      const tagPages = tags.reduce(
        (accum, tag) => ({
          ...accum,
          [`/tags/${tag.slug}`]: {
            page: "/tags/[slug]",
            query: { slug: tag.slug },
          },
        }),
        {}
      );

      return {
        ...authorPages,
        ...postPages,
        ...categoryPages,
        ...tagPages,
        "/": { page: "/" },
      };
    }
    return defaultPathMap;
  },
};
