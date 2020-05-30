import { gql, useLazyQuery } from "@apollo/client";
import {
  Heading,
  ProductCard,
  Section,
  Typography,
  makeFlex,
} from "@heather-turano-coaching/components";
import { makeResponsive } from "@heather-turano-coaching/design-system";
import { loadStripe } from "@stripe/stripe-js";
import { graphql, useStaticQuery } from "gatsby";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import React from "react";
import styled, { css } from "styled-components";

const stripePromise = loadStripe(
  process.env.GATSBY_HTC_STRIPE_PUBLISHABLE_KEY as string
);

const CHECKOUT = gql`
  query checkout($priceId: String!) {
    checkout(priceId: $priceId) {
      id
    }
  }
`;

const handleStripeRedirect = async (
  sessionId: string
): Promise<void | string> => {
  // When the customer clicks on the button, redirect them to Checkout.
  const stripe = await stripePromise;
  if (stripe) {
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      return error.message;
    }
  }
};

type ProductOffering = {
  name: string;
  description: string;
  color: string;
  features: string[];
  stripePriceId: string;
  stripeProductId: string;
  stripePrice: {
    unit_amount: number;
  };
  logo: { fields: { file: { url: string } } };
};

const StyledContainer = styled.div`
  text-align: center;
`;

const StyledCardContainer = styled.div`
  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: css`
      ${makeFlex("row", "space-between", "flex-start")};

      & > * {
        width: 33.333%;
      }
    `,
  })}
`;

export const Pricing: FC = () => {
  const [runCheckoutQuery, { data, error }] = useLazyQuery<
    {
      checkout: { id: string };
    },
    { priceId: string }
  >(CHECKOUT, { ssr: false });

  const {
    allStripeProductAndPrice: { nodes: products },
    contentfulPageHome,
  } = useStaticQuery<{
    allStripeProductAndPrice: { nodes: ProductOffering[] };
    contentfulPageHome: {
      pricingTitle: string;
      pricingDescription: { pricingDescription: string };
    };
  }>(graphql`
    {
      contentfulPageHome {
        pricingTitle
        pricingDescription {
          pricingDescription
        }
      }
      allStripeProductAndPrice {
        nodes {
          name
          features
          color
          logo {
            fields {
              file {
                url
              }
            }
          }
          stripePriceId
          stripeProductId
          stripePrice {
            unit_amount
          }
        }
      }
    }
  `);
  const [stripeCheckoutFailure, setStripeCheckoutFailure] = useState<
    string | undefined
  >(undefined);

  const handleClick = useCallback(
    (priceId: ProductOffering["stripePriceId"]) => () => {
      runCheckoutQuery({ variables: { priceId } });
    },
    [runCheckoutQuery]
  );

  useEffect(() => {
    if (data) {
      handleStripeRedirect(data.checkout.id).then((stripeError) => {
        if (stripeError) {
          setStripeCheckoutFailure(stripeError);
        }
      });
    }

    if (error) {
      console.log(JSON.stringify(error));
    }
  }, [data, error]);

  return (
    <StyledContainer id="#about">
      <Section
        styleType="blank"
        background={{ scalable: { color: "light", scale: 2 } }}
      >
        <Heading fontSize="h1" fontFamily="Playfair Display">
          {contentfulPageHome.pricingTitle}
        </Heading>
        <br />
        <Typography variant="label" fontSize="md">
          {contentfulPageHome.pricingDescription.pricingDescription}
        </Typography>
        <StyledCardContainer>
          {useMemo(
            () =>
              products.reverse().map((product) => (
                <ProductCard
                  name={product.name}
                  // description={product.description}
                  priceInCents={product.stripePrice.unit_amount}
                  features={product.features}
                  onClick={handleClick(product.stripePriceId)}
                  color={product.color}
                  img={product.logo.fields.file.url}
                  imgAlt={product.name.split(" ").join("-")}
                />
              )),
            [products, handleClick]
          )}
        </StyledCardContainer>
        {stripeCheckoutFailure && <span>{stripeCheckoutFailure}</span>}
      </Section>
    </StyledContainer>
  );
};
