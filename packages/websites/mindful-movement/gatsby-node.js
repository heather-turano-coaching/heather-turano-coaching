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

  contentfulProductInformation.items.forEach(
    ({ fields: contentfulProduct }) => {
      const stripeProductId =
        process.env.NODE_ENV === "production"
          ? contentfulProduct.stripeProductIdProd
          : contentfulProduct.stripeProductId;
      const stripePriceId =
        process.env.NODE_ENV === "production"
          ? contentfulProduct.stripePriceIdProd
          : contentfulProduct.stripePriceId;

      console.log(process.env.NODE_ENV, stripeProductId, stripePriceId);

      const stripePrice = stripePricesData.data.reduce((accum, price) => {
        if (price.product === stripeProductId && price.id === stripePriceId) {
          return price;
        }
        return accum;
      }, {});

      const stripeProduct = stripeProductsData.data.reduce((accum, product) => {
        if (stripeProductId === product.id) {
          return product;
        }
        return accum;
      }, {});

      console.log(stripeProduct, stripePrice);

      const nodeMeta = {
        id: createNodeId(stripeProductId),
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
        ...nodeMeta,
        stripePrice,
        stripeProduct,
      });
    }
  );

  console.log("----------     Success!   --------------");
  console.log("----------------------------------------");
};

// exports.createPages = async ({ graphql, actions: { createPage } }) => {
//   // **Note:** The graphql function call returns a Promise
//   // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
//   const result = await graphql(`
//     query {
//       contentfulPageHome {
//         pricingTitle
//         pricingDescription {
//           pricingDescription
//         }
//       }
//       allStripeProductAndPrice {
//         nodes {
//           name
//           features
//           color
//           order
//           logo {
//             fields {
//               file {
//                 url
//               }
//             }
//           }
//           stripePriceId
//           stripeProductId
//           stripePrice {
//             unit_amount
//           }
//           couponOg
//         }
//       }
//     }
//   `);

//   createPage({
//     path: "/coupon",
//     component: path.resolve(`./src/templates/coupon.tsx`),
//     context: {
//       data: result,
//     },
//   });
// };
