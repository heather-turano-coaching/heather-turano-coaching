const contentful = require("contentful");
const stripe = require("stripe")(process.env.HTC_STRIPE_SECRET_KEY);
const path = require("path");

const contentfulClient = contentful.createClient({
  space: process.env.HTC_MINDFUL_MOVEMENT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.HTC_MINDFUL_MOVEMENT_CONTENTFUL_ACCESS_TOKEN
});

exports.sourceNodes = async ({
  actions,
  reporter,
  createNodeId,
  createContentDigest
}) => {
  const { createNode } = actions;

  reporter.success("---- Getting Stripe Prices and Data ----");

  const [stripePricesData, contentfulProductInformation] = await Promise.all([
    stripe.prices.list({
      // for some strange reason you have to tell stripe
      // to give you x amount of items in the list
      // https://stripe.com/docs/api/prices/list#list_prices-limit
      limit: 100,
      expand: ["data.product"],
      type: "one_time",
      active: true
    }),
    contentfulClient.getEntries({
      content_type: "package"
    })
  ]);

  reporter.success("getting prices from stripe and building node...");
  stripePricesData.data.forEach((price) => {
    createNode({
      ...price,
      parent: null,
      children: [],
      internal: {
        type: `StripePrice`,
        mediaType: `text/html`,
        content: JSON.stringify(price),
        contentDigest: createContentDigest(price)
      }
    });
  });
  reporter.success("getting prices from stripe and building node... complete.");

  /**
   * This is the GraphQL node that is created to be used for
   * the main page. This node should be statically queried
   * and not used in any dynamic `export.createPage` method
   *
   * We loop through all of the contentful packages
   * to get the enhanced information... then as we're doing that
   * we loop through all of the stripe prices to see which
   * is the base price and that also matches the _current_ productId
   */
  reporter.success("getting packages from contentful and linking to prices...");
  contentfulProductInformation.items.forEach(
    ({ fields: contentfulProduct }) => {
      const productKeyId = `stripeProductId__${process.env.NODE_ENV}`;
      const resolvedProductId = contentfulProduct[productKeyId];

      const basePrice = stripePricesData.data.reduce((accum, price) => {
        if (
          price.product.id === resolvedProductId &&
          price.metadata.type === "base"
        ) {
          return price;
        }
        return accum;
      }, {});

      const node = {
        ...contentfulProduct,
        logo: contentfulProduct.logo.fields.file.url,
        productId: resolvedProductId,
        basePrice,
        couponPrice: undefined
      };

      const nodeMeta = {
        id: createNodeId(resolvedProductId),
        parent: null,
        children: [],
        internal: {
          type: `StripeProductAndPrice`,
          mediaType: `text/html`,
          content: JSON.stringify(node),
          contentDigest: createContentDigest(node)
        }
      };

      createNode({
        ...node,
        ...nodeMeta
      });
    }
  );
  reporter.success(
    "getting packages from contentful and linking to prices... complete."
  );

  /**
   * This creates the GraphQL node that should be used
   * to create the coupon pages
   *
   * Use this node in the `exports.createPage` to create
   * dynamic pricing pages
   */
  reporter.success(
    "creating coupon nodes against entries in stripe price meta data..."
  );
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
        contentDigest: createContentDigest(couponSlug)
      }
    };

    createNode({
      slug: couponSlug,
      ...nodeMeta
    });
  });

  reporter.success(
    "creating coupon nodes against entries in stripe price meta data... complete."
  );
};

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter
}) => {
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
          features
          color
          logo {
            file {
              url
            }
          }
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
            name
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
          logo: productMetaData.logo.file.url,
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
          )
        };
      }
    );

    reporter.success(JSON.stringify(packages, null, 4));

    createPage({
      path: `/${coupon.slug}`,
      component: path.resolve(`./src/templates/Packages.tsx`),
      context: {
        title: "MM100 - Coupon",
        description: coupon.slug.split("-").join(" ").toUpperCase(),
        packages
      }
    });
  });

  // Disclosures
  const disclosureResult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (disclosureResult.errors) {
    reporter.panicOnBuild(`Error while querying for disclosure documents`);
    return;
  }

  disclosureResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.slug) {
      createPage({
        path: node.frontmatter.slug,
        component: require.resolve(`./src/templates/Disclosures.tsx`),
        context: {
          slug: node.frontmatter.slug
        }
      });
    }
  });
};
