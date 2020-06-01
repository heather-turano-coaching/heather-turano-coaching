export {};
// import { useLazyQuery } from "@apollo/client";
// import {
//   Heading,
//   ProductCard,
//   Section,
//   Typography,
// } from "@heather-turano-coaching/components";
// import React, { useCallback, useEffect, useMemo, useState } from "react";

// import { Layout, SEO } from "../components";
// import {
//   CHECKOUT,
//   ProductOffering,
//   StyledCardContainer,
//   stripePromise,
// } from "../features/Pricing";

// const Couponpar = ({
//   pathContext: {
//     // @ts-ignore
//     data: { data },
//   },
// }) => {
//   console.log(data);
//   const [stripeCheckoutFailure, setStripeCheckoutFailure] = useState<
//     string | undefined
//   >(undefined);
//   const [runCheckoutQuery, { data: stripeData, error }] = useLazyQuery<
//     {
//       checkout: { id: string };
//     },
//     { priceId: string }
//   >(CHECKOUT, { ssr: false });

//   const handleStripeRedirect = async (
//     sessionId: string
//   ): Promise<void | string> => {
//     // When the customer clicks on the button, redirect them to Checkout.
//     const stripe = await stripePromise;
//     if (stripe) {
//       const { error } = await stripe.redirectToCheckout({
//         sessionId,
//       });

//       if (error) {
//         return error.message;
//       }
//     }
//   };

//   const handleClick = useCallback(
//     (priceId: ProductOffering["stripePriceId"]) => () => {
//       runCheckoutQuery({ variables: { priceId } });
//     },
//     [runCheckoutQuery]
//   );

//   useEffect(() => {
//     if (stripeData) {
//       handleStripeRedirect(stripeData.checkout.id).then((stripeError) => {
//         if (stripeError) {
//           setStripeCheckoutFailure(stripeError);
//         }
//       });
//     }

//     if (error) {
//       console.log(JSON.stringify(error));
//     }
//   }, [stripeData, error]);

//   return (
//     <Layout>
//       <SEO title="OG" description="Prices for the OGs" />
//       <Section styleType="layered">
//         <Heading fontSize="h1" fontFamily="Playfair Display">
//           {data.contentfulPageHome.pricingTitle}
//         </Heading>
//         <br />
//         <Typography variant="label" fontSize="md">
//           {data.contentfulPageHome.pricingTitle}
//         </Typography>
//         <StyledCardContainer>
//           {useMemo(
//             () =>
//               data.allStripeProductAndPrice.nodes
//                 // @ts-ignore
//                 .sort((a, b) => a.order - b.order)
//                 // @ts-ignore
//                 .map((product) => {
//                   return (
//                     <ProductCard
//                       key={product.stripeProductId}
//                       name={product.name}
//                       priceInCents={
//                         product.stripePrice.unit_amount -
//                         product.stripePrice.unit_amount *
//                           (product.couponOg / 100)
//                       }
//                       features={product.features}
//                       onClick={handleClick(product.stripePriceId)}
//                       color={product.color}
//                       img={product.logo.fields.file.url}
//                       imgAlt={product.name.split(" ").join("-")}
//                     />
//                   );
//                 }),
//             [data.allStripeProductAndPrice.nodes, handleClick]
//           )}
//         </StyledCardContainer>
//       </Section>
//     </Layout>
//   );
// };

// export default Couponpar;
