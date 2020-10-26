import { objectType } from "@nexus/schema";

export const CheckoutObjects = objectType({
  name: "StripeCheckoutSession",
  definition(t) {
    t.string("id", {
      description:
        "The checkout session id that is used when a customer clicks on a product purchase button"
    });
  }
});
