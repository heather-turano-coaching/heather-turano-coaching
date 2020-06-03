const contentful = require("contentful");
const stripe = require("stripe")(process.env.HTC_STRIPE_SECRET_KEY);
const path = require("path");

const contentfulClient = contentful.createClient({
  space: process.env.HTC_MINDFUL_MOVEMENT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.HTC_MINDFUL_MOVEMENT_CONTENTFUL_ACCESS_TOKEN,
});

const reduceProductsToSingleProductById = (products, productId) =>
  products.reduce((accum, product) => {
    if (productId === product.id) {
      return product;
    }
    return accum;
  }, {});

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  console.log("---- Getting Stripe Prices and Data ----");

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

  console.log("> creating stripe prices...");
  stripePricesData.data.forEach((price) => {
    const priceNode = {
      ...price,
      product: reduceProductsToSingleProductById(
        stripeProductsData.data,
        price.product
      ),
      // metadata: {
      //   ...defaultPriceMetadata,
      //   ...stripe.metadata,
      // },
    };
    const nodeMeta = {
      parent: null,
      children: [],
      internal: {
        type: `StripePrice`,
        mediaType: `text/html`,
        content: JSON.stringify(priceNode),
        contentDigest: createContentDigest(priceNode),
      },
    };
    createNode({
      ...priceNode,
      ...nodeMeta,
    });
  });
  console.log("> creating stripe prices... complete.");

  console.log("> creating base products and prices...");
  contentfulProductInformation.items.forEach(
    ({ fields: contentfulProduct }) => {
      // get the product id from contentful
      const productKeyId = `stripeProductId__${process.env.NODE_ENV}`;
      const resolvedProductId = contentfulProduct[productKeyId];

      const stripeProduct = reduceProductsToSingleProductById(
        stripeProductsData.data,
        resolvedProductId
      );

      const stripePrice = stripePricesData.data.reduce((accum, price) => {
        if (
          price.product === resolvedProductId &&
          price.metadata.type === "base"
        ) {
          return price;
        }
        return accum;
      }, {});

      const nodeMeta = {
        id: createNodeId(resolvedProductId),
        parent: null,
        children: [],
        internal: {
          type: `StripeProductAndPrice`,
          mediaType: `text/html`,
          content: JSON.stringify(contentfulProduct),
          contentDigest: createContentDigest(contentfulProduct),
        },
      };

      createNode({
        ...contentfulProduct,
        stripeProductId: resolvedProductId,
        stripePriceId: stripePrice.id,
        ...nodeMeta,
        stripePrice,
        stripeProduct,
      });
    }
  );
  console.log("> creating base products and prices... complete.");

  console.log("> creating coupons from price meta data...");
  const coupons = stripePricesData.data.reduce((accum, price) => {
    if (
      !accum.includes(price.metadata.slug) &&
      typeof price.metadata.slug !== "undefined"
    ) {
      return [...accum, price.metadata.slug];
    }
    return accum;
  }, []);

  coupons.forEach((couponSlug) => {
    const nodeMeta = {
      id: createNodeId(couponSlug),
      parent: null,
      children: [],
      internal: {
        type: `StripeCouponFromMeta`,
        mediaType: `text/html`,
        content: JSON.stringify(couponSlug),
        contentDigest: createContentDigest(couponSlug),
      },
    };

    createNode({
      slug: couponSlug,
      ...nodeMeta,
    });
  });

  console.log("creating coupons from price meta data... complete.");
  console.log("----------------------------------------");
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query {
      allStripeCouponFromMeta {
        nodes {
          slug
        }
      }
      allContentfulPackage {
        nodes {
          stripeProductId__development
          stripeProductId__production
          order
          name
          logo {
            file {
              url
            }
          }
          features
          contentfulTitle
          color
        }
      }
      allStripePrice {
        nodes {
          id
          unit_amount
          metadata {
            slug
            type
          }
          product {
            id
          }
        }
      }
    }
  `);

  // Coupons
  result.data.allStripeCouponFromMeta.nodes.forEach((coupon) => {
    const packages = result.data.allContentfulPackage.nodes.map(
      (contentfulPackage) => {
        const productId =
          contentfulPackage[`stripeProductId__${process.env.NODE_ENV}`];
        const {
          stripeProductId__development,
          stripeProductId__production,
          ...productMetaData
        } = contentfulPackage;

        return {
          productId,
          ...productMetaData,
          basePrice: result.data.allStripePrice.nodes.reduce((accum, price) => {
            if (
              price.product.id === productId &&
              price.metadata.type === "base"
            ) {
              return price;
            }
            return accum;
          }, {}),
          couponPrice: result.data.allStripePrice.nodes.reduce(
            (accum, price) => {
              if (
                price.product.id === productId &&
                price.metadata.type === "coupon" &&
                price.metadata.slug === coupon.slug
              ) {
                return price;
              }
              return accum;
            },
            {}
          ),
        };
      }
    );

    console.log(packages);

    createPage({
      path: `/${coupon.slug}`,
      component: path.resolve(`./src/templates/coupon.tsx`),
      context: {
        data: {
          packages,
        },
      },
    });
  });
};
