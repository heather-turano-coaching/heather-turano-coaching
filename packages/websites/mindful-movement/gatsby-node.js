var stripe = require("stripe")(process.env.HTC_STRIPE_SECRET_KEY);

/**
 * Get the Prices back from the Stripe API
 */
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  stripe.prices.list(function (err, prices) {
    if (err) {
      throw new Error(err);
    }
    const nodeContent = JSON.stringify(prices);

    const nodeMeta = {
      id: createNodeId(`stripe-prices-data`),
      parent: null,
      children: [],
      internal: {
        type: `StripePrices`,
        mediaType: `text/html`,
        content: nodeContent,
        contentDigest: createContentDigest(prices),
      },
    };

    const node = Object.assign({}, prices, nodeMeta);
    createNode(node);
  });
};
