import { gql, useLazyQuery } from "@apollo/client";
import {
  Button,
  Heading,
  Section,
  Typography,
} from "@heather-turano-coaching/components";
import { loadStripe } from "@stripe/stripe-js";
import { FC, useEffect, useState } from "react";
import React from "react";

const stripePromise = loadStripe(
  process.env.GATSBY_HTC_STRIPE_PUBLISHABLE_KEY as string
);

const CHECKOUT = gql`
  query testCheckout {
    checkout {
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

export const Pricing: FC = () => {
  const [runCheckoutQuery, { called, loading, data, error }] = useLazyQuery<{
    checkout: { id: string };
  }>(CHECKOUT, { ssr: false });
  const [stripeCheckoutFailure, setStripeCheckoutFailure] = useState<
    string | undefined
  >(undefined);

  const handleClick = () => () => {
    runCheckoutQuery();
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
    <Section styleType="blank">
      <div id="#about"></div>
      <Heading fontSize="h1" fontFamily="Playfair Display">
        Pricing
      </Heading>
      <br />
      <Typography variant="label" fontSize="md">
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Donec sed odio dui. Curabitur blandit tempus porttitor. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam.
      </Typography>
      <Button
        label="test stripe"
        onClick={handleClick()}
        disabled={called && loading}
      />
      {stripeCheckoutFailure && <span>{stripeCheckoutFailure}</span>}
    </Section>
  );
};
