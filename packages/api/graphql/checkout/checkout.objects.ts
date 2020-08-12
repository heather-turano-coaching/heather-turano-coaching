import { schema } from "nexus";

schema.objectType({
  name: "StripeCheckoutSession",
  definition(t) {
    t.string("id", {
      description:
        "The checkout session id that is used when a customer clicks on a product purchase button"
    });
  }
});
