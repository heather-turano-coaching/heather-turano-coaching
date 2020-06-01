import { objectType, stringArg } from "@nexus/schema";
const stripe = require("stripe")(process.env.HTC_STRIPE_SECRET_KEY);

// const StripePaymentTypeEnum = enumType({
//   name: "StripePaymentTypeEnum",
//   members: {
//     CARD: "card",
//   },
// });

const CheckoutSession = objectType({
  name: "CheckoutSession",
  definition(t) {
    t.string("id", {
      description:
        "The checkout session id that is used when a customer clicks on a product purchase button",
    });
  },
});

export const queries = objectType({
  name: "Query",
  definition(t) {
    t.crud.post();
    t.crud.user();

    t.list.field("feed", {
      type: "Post",
      resolve: (_, args, ctx) => {
        return ctx.prisma.post.findMany({
          where: { published: true },
        });
      },
    });

    // Remove this eventually
    t.list.field("feedSecured", {
      type: "Post",
      resolve: (_, args, ctx) => {
        return ctx.prisma.post.findMany({
          where: { published: true },
        });
      },
    });

    t.field("checkout", {
      type: CheckoutSession,
      args: {
        priceId: stringArg({ required: true }),
      },
      resolve: async (_, { priceId }, ctx) => {
        try {
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
              {
                price: priceId,
                quantity: 1,
              },
            ],
            mode: "payment",
            success_url: `${process.env.HTC_MINDFUL_MOVEMENT_REDIRECT_ROOT_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.HTC_MINDFUL_MOVEMENT_REDIRECT_ROOT_URL}/cancel-payment`,
          });
          return session;
        } catch (error) {
          console.log(error);
          throw new Error(error);
        }
      },
    });

    t.list.field("filterPosts", {
      type: "Post",
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (_, { searchString }, ctx) => {
        return ctx.prisma.post.findMany({
          where: {
            OR: [
              { title: { contains: searchString } },
              { content: { contains: searchString } },
            ],
          },
        });
      },
    });
  },
});
