import { graphql, useStaticQuery } from "gatsby";
import { FC } from "react";
import React from "react";

import PackagesTemplate from "../templates/Packages";

export const Pricing: FC = () => {
  const {
    allStripeProductAndPrice: { nodes: packages },
    contentfulPageHome: {
      pricingTitle: title,
      pricingDescription: description,
    },
  } = useStaticQuery<{
    allStripeProductAndPrice: { nodes: [] };
    contentfulPageHome: {
      pricingTitle: string;
      pricingDescription: { json: string };
    };
  }>(graphql`
    {
      contentfulPageHome {
        pricingTitle
        pricingDescription {
          json
        }
      }
      allStripeProductAndPrice {
        nodes {
          productId
          order
          name
          logo
          features
          color
          basePrice {
            id
            unit_amount
          }
        }
      }
    }
  `);

  return (
    <PackagesTemplate
      pageContext={{
        title: title,
        descriptionRich: description.json,
        packages: packages,
      }}
    />
  );
};
