import { gql, useLazyQuery } from "@apollo/client";
import {
  Button,
  Heading,
  Section,
  Typography,
} from "@heather-turano-coaching/components";
import { loadStripe } from "@stripe/stripe-js";
import { graphql, useStaticQuery } from "gatsby";
import { FC, useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";

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

type ProductOffering = { name: string; id: string; images: string };

const StyledContainer = styled.div`
  text-align: center;
`;

export const Pricing: FC = () => {
  const [runCheckoutQuery, { called, loading, data, error }] = useLazyQuery<
    {
      checkout: { id: string };
    },
    { priceId: string }
  >(CHECKOUT, { ssr: false });

  const {
    allStripeProduct: { nodes: products },
    contentfulPageHome,
  } = useStaticQuery<{
    allStripeProduct: { nodes: ProductOffering[] };
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
      allStripeProduct {
        nodes {
          name
          id
          images
        }
      }
    }
  `);
  const [stripeCheckoutFailure, setStripeCheckoutFailure] = useState<
    string | undefined
  >(undefined);

  const handleClick = (priceId: ProductOffering["id"]) => () => {
    runCheckoutQuery({ variables: { priceId } });
  };

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
        {products.map((product) => (
          <Button
            label={product.name}
            onClick={handleClick(product.id)}
            disabled={called && loading}
          />
        ))}
        {stripeCheckoutFailure && <span>{stripeCheckoutFailure}</span>}
      </Section>
    </StyledContainer>
  );
};
