const contentful = require("contentful");
const stripe = require("stripe")(process.env.HTC_STRIPE_SECRET_KEY);

const contentfulClient = contentful.createClient({
  space: process.env.HTC_MINDFUL_MOVEMENT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.HTC_MINDFUL_MOVEMENT_CONTENTFUL_ACCESS_TOKEN,
});

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  const [
    stripePricesData,
    stripeProductsData,
    contentfulProductInformation,
  ] = await Promise.all([
    stripe.prices.list({ type: "one_time" }),
    stripe.products.list(),
    contentfulClient.getEntries({
      content_type: "package",
    }),
  ]);

  stripeProductsData.data.forEach((product) => {
    const price = stripePricesData.data.reduce((accum, price) => {
      if (price.product === product.id) {
        return price;
      }
      return accum;
    }, {});

    const productDetails = contentfulProductInformation.items.reduce(
      (accum, contentfulProduct) => {
        if (
          contentfulProduct.fields.stripeProductId === product.id &&
          contentfulProduct.fields.stripePriceId === price.id
        ) {
          return contentfulProduct.fields;
        }
        return accum;
      },
      {}
    );

    const nodeMeta = {
      parent: null,
      children: [],
      internal: {
        type: `StripeProductAndPrice`,
        mediaType: `text/html`,
        content: JSON.stringify(product),
        contentDigest: createContentDigest(product),
      },
    };

    createNode({
      ...product,
      ...nodeMeta,
      price,
      productDetails,
    });
  });
};
