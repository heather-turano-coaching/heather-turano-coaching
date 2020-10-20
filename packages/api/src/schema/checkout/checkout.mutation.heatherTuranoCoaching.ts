import { extendType, stringArg } from "@nexus/schema";

import { formatSchemaError } from "../../utils";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require("stripe")(process.env.HTC_STRIPE_SECRET_KEY);

export const CheckoutMutationHTC = extendType({
  type: "Mutation",
  definition(t) {
    t.field("checkoutHeatherTuranoCoaching", {
      type: "StripeCheckoutSession",
      description:
        "Creates a stripe checkout session for a heather turano coaching purchase",
      args: {
        priceId: stringArg({ required: true })
      },
      resolve: async (_, { priceId }) => {
        try {
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
              {
                price: priceId,
                quantity: 1
              }
            ],
            mode: "payment",
            success_url: `${
              process.env.HTC_MINDFUL_MOVEMENT_REDIRECT_ROOT_URL as string
            }/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${
              process.env.HTC_MINDFUL_MOVEMENT_REDIRECT_ROOT_URL as string
            }/cancel-payment`
          });
          return session;
        } catch (error) {
          throw new Error(
            formatSchemaError(
              "There was an error when trying to checkout with Heather Turano Coaching",
              error
            )
          );
        }
      }
    });
  }
});
