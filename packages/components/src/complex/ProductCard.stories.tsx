import React from "react";

import { ProductCard, ProductCardProps } from "./ProductCard";

export default {
  component: ProductCard,
  title: "Complex|Product Card",
};

const props: ProductCardProps = {
  description:
    "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
  name: "Inspired Mover",
  basePrice: {
    id: "TEST",
    unit_amount: 17900,
  },
  features: [
    "hall tight tobacco step milk",
    "pleasant birth space arrive practice",
    "find broad day circus tell",
    "laugh dig firm gate inch",
    "kitchen ground cut available wild",
    "bet there spirit from continent",
  ],
  handleClick: (priceId: string, priceInCents: number) => () => {
    console.log(priceId, priceInCents);
  },
  color: "#ebae5b",
  img:
    "//images.ctfassets.net/kdlm6cvqwimx/4WMm6C5LkQNLgTprZCr4f2/c7311619fe4b2e684fc43d9f027a6e61/MM100_inspired_logo-1024.png",
  imgAlt: "firefox",
};

export const base = () => (
  <div style={{ maxWidth: "300px" }}>
    <ProductCard {...props} />
  </div>
);
