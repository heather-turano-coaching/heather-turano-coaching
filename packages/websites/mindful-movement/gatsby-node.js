/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
var stripe = require("stripe")(process.env.HTC_STRIPE_SECRET_KEY);

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  const [stripePricesData, stripeProductsData] = await Promise.all([
    stripe.prices.list({ type: "one_time" }),
    stripe.products.list(),
  ]);

  stripeProductsData.data.forEach((product) =>
    createNode(
      Object.assign({}, product, {
        parent: null,
        children: [],
        internal: {
          type: `StripeProductAndPrice`,
          mediaType: `text/html`,
          content: JSON.stringify(product),
          contentDigest: createContentDigest(product),
        },
        // convert to cents
        price: stripePricesData.data.filter(
          (price) => price.product !== product.id
        ),
      })
    )
  );
};
