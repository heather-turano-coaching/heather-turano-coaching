import { gql, useMutation } from "@apollo/client";
import { HTCPackagePrice } from "@heather-turano-coaching/core/components";
import { loadStripe } from "@stripe/stripe-js";
import { navigate } from "gatsby";
import { useCallback, useEffect, useState } from "react";

export const stripePromise = loadStripe(
  process.env.GATSBY_HTC_STRIPE_PUBLISHABLE_KEY as string
);

export const CHECKOUT = gql`
  mutation checkoutHeatherTuranoCoaching($priceId: String!) {
    checkoutHeatherTuranoCoaching(priceId: $priceId) {
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

export const useStripeCheckout = ({
  urlIfPriceIs0
}: {
  urlIfPriceIs0: string;
}) => {
  const [runCheckoutQuery, { data, error }] = useMutation<
    {
      checkoutHeatherTuranoCoaching: { id: string };
    },
    { priceId: string }
  >(CHECKOUT, {});

  const [stripeCheckoutFailure, setStripeCheckoutFailure] = useState<
    string | undefined
  >(undefined);

  const handleClick = useCallback(
    (
      priceId: HTCPackagePrice["id"],
      priceInCents: HTCPackagePrice["unit_amount"]
    ) => () => {
      runCheckoutQuery({ variables: { priceId } });
      if (priceInCents === 0) {
        navigate("sign-up");
      } else {
      }
    },
    [runCheckoutQuery]
  );

  useEffect(() => {
    if (data) {
      handleStripeRedirect(data.checkoutHeatherTuranoCoaching.id).then(
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

  return {
    checkout: handleClick,
    stripeCheckoutFailure,
    data
  };
};
