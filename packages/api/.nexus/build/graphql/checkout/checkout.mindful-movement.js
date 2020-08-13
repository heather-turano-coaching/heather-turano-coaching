"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const nexus_1 = require("nexus");
const schema_1 = require("nexus/components/schema");
const stripe = require("stripe")(process.env.HTC_STRIPE_SECRET_KEY);
nexus_1.schema.extendType({
    type: "Mutation",
    definition(t) {
        t.field("checkoutMindfulMovement", {
            type: "StripeCheckoutSession",
            description: "Creates a stripe checkout session for a mindful movement 100 purchase",
            args: {
                priceId: schema_1.stringArg({ required: true })
            },
            resolve: (_, { priceId }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                try {
                    const session = yield stripe.checkout.sessions.create({
                        payment_method_types: ["card"],
                        line_items: [
                            {
                                price: priceId,
                                quantity: 1
                            }
                        ],
                        mode: "payment",
                        success_url: `${process.env.HTC_MINDFUL_MOVEMENT_REDIRECT_ROOT_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
                        cancel_url: `${process.env.HTC_MINDFUL_MOVEMENT_REDIRECT_ROOT_URL}/cancel-payment`
                    });
                    return session;
                }
                catch (error) {
                    throw new Error(error);
                }
            })
        });
    }
});
//# sourceMappingURL=checkout.mindful-movement.js.map