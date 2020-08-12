"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nexus_1 = require("nexus");
nexus_1.schema.objectType({
    name: "StripeCheckoutSession",
    definition(t) {
        t.string("id", {
            description: "The checkout session id that is used when a customer clicks on a product purchase button"
        });
    }
});
//# sourceMappingURL=checkout.objects.js.map