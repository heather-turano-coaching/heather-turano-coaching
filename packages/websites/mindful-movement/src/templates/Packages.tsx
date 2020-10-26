import { gql, useMutation } from "@apollo/client";
import {
  ContentfulRichText,
  HTCPackagePrice,
  Heading,
  ProductCard,
  Section,
  Typography,
  makeFlex
} from "@heather-turano-coaching/components";
import { makeResponsive } from "@heather-turano-coaching/core/design-system";
import { navigate } from "@reach/router";
import { loadStripe } from "@stripe/stripe-js";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";

export const stripePromise = loadStripe(
  process.env.GATSBY_HTC_STRIPE_PUBLISHABLE_KEY as string
);

export const CHECKOUT_MINDFUL_MOVEMENT = gql`
  mutation($priceId: String!) {
    checkoutMindfulMovement(priceId: $priceId) {
      id
    }
  }
`;

export const handleStripeRedirect = async (
  sessionId: string
): Promise<void | string> => {
  // When the customer clicks on the button, redirect them to Checkout.
  const stripe = await stripePromise;
  if (stripe) {
    const { error } = await stripe.redirectToCheckout({
      sessionId
    });

    if (error) {
      return error.message;
    }
  }
};

const StyledContainer = styled.div`
  text-align: center;
`;

export const StyledCardContainer = styled.div`
  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: css`
      ${makeFlex("row", "space-between", "flex-start")};

      & > * {
        width: 33.333%;
      }
    `
  })}
`;

export interface HTCPackage {
  productId: string;
  order: number;
  name: string;
  logo: string;
  features: string[];
  color: string;
  basePrice: HTCPackagePrice;
  couponPrice?: HTCPackagePrice;
}

interface PackagesTemplateProps {
  pageContext: {
    title: string;
    descriptionRich: string;
    description?: string;
    packages: HTCPackage[];
  };
}

export const PackagesTemplate: FC<PackagesTemplateProps> = ({
  pageContext: { title, description, descriptionRich, packages }
}) => {
  const [runCheckoutMutation, { data, error }] = useMutation<
    {
      checkoutMindfulMovement: { id: string };
    },
    { priceId: string }
  >(CHECKOUT_MINDFUL_MOVEMENT);

  const [stripeCheckoutFailure, setStripeCheckoutFailure] = useState<
    string | undefined
  >(undefined);

  const handleClick = useCallback(
    (
      priceId: HTCPackagePrice["id"],
      priceInCents: HTCPackagePrice["unit_amount"]
    ) => () => {
      if (priceInCents === 0) {
        navigate("sign-up");
      } else {
        runCheckoutMutation({ variables: { priceId } });
      }
    },
    [runCheckoutMutation]
  );

  useEffect(() => {
    if (data) {
      handleStripeRedirect(data.checkoutMindfulMovement.id).then(
        (stripeError) => {
          if (stripeError) {
            setStripeCheckoutFailure(stripeError);
          }
        }
      );
    }

    if (error) {
      console.log(JSON.stringify(error));
    }
  }, [data, error]);

  return (
    <StyledContainer>
      <Section
        styleType="blank"
        background={{ scalable: { color: "light", scale: 2 } }}
      >
        <Heading fontSize="h1" fontFamily="Playfair Display">
          {title}
        </Heading>
        <br />
        {!description ? (
          <ContentfulRichText
            richText={descriptionRich}
            copyProps={{
              variant: "paragraph",
              fontSize: "sm"
            }}
          />
        ) : (
          <Typography variant="paragraph" fontSize="sm">
            {description}
          </Typography>
        )}
        <StyledCardContainer>
          {useMemo(
            () =>
              packages
                .sort((a, b) => a.order - b.order)
                .map(
                  ({
                    productId,
                    name,
                    basePrice,
                    couponPrice,
                    features,
                    color,
                    logo
                  }) => {
                    return (
                      <ProductCard
                        key={productId}
                        name={name}
                        basePrice={basePrice}
                        couponPrice={couponPrice}
                        features={features}
                        handleClick={handleClick}
                        color={color}
                        img={logo}
                        imgAlt={name.split(" ").join("-")}
                      />
                    );
                  }
                ),
            [packages, handleClick]
          )}
        </StyledCardContainer>
        {stripeCheckoutFailure && <span>{stripeCheckoutFailure}</span>}
      </Section>
    </StyledContainer>
  );
};

export default PackagesTemplate;
