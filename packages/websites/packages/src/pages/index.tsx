import {
  HTCPackagePrice,
  Heading,
  ProductCard,
  Section,
  Typography,
  makeFlex
} from "@heather-turano-coaching/components";
import {
  makeColor,
  makeResponsive
} from "@heather-turano-coaching/design-system";
import { SEO } from "@heather-turano-coaching/gatsby";
import React from "react";
import styled, { css } from "styled-components";

import { Layout } from "../components";
import { useStripeCheckout } from "../hooks/useStripeCheckout";

export interface HTCPackage {
  productId: string;
  name: string;
  logo: string;
  features: string[];
  color: string;
  basePrice: HTCPackagePrice;
  couponPrice?: HTCPackagePrice;
}

function devAndProdValues<ValueType>(
  devValue: ValueType,
  prodValue: ValueType
) {
  if (process.env.NODE_ENV !== "production") {
    return devValue;
  }
  return prodValue;
}

const individualCoachingPackages: HTCPackage[] = [
  {
    productId: devAndProdValues("prod_HZDRpgTiOg2mST", "prod_HZEMqGcVGpspPy"),
    name: "Single Coaching Session",
    logo: "",
    features: ["45 minute one-on-one coaching session"],
    color: makeColor({ scalable: { color: "primary" } }),
    basePrice: {
      id: devAndProdValues(
        "price_1H050REQ8UKSDRmCoEwSE0uv",
        "price_1H05u4EQ8UKSDRmCszA0wiI8"
      ),
      unit_amount: devAndProdValues<number>(9900, 9900)
    }
  },
  {
    productId: devAndProdValues("prod_HZDZ2KleQok6oo", "prod_HZEMgHWvNfebcT"),
    name: "Coaching Package - 8 Sessions",
    logo: "",
    features: [
      "8, 45-min coaching sessions. Discount of $72 when you purchase 8 sessions. Each session is $90 with the package"
    ],
    color: makeColor({ scalable: { color: "secondary" } }),
    basePrice: {
      id: devAndProdValues("null", "null"),
      unit_amount: devAndProdValues<number>(79200, 79200)
    },
    couponPrice: {
      id: devAndProdValues(
        "price_1H058pEQ8UKSDRmCPWQzvAPE",
        "price_1H05tyEQ8UKSDRmCY3VXWHXN"
      ),
      unit_amount: devAndProdValues<number>(72000, 72000)
    }
  },
  {
    productId: devAndProdValues("prod_HZDf5Eh5TI3Bgv", "prod_HZEMGuZalSifGo"),
    name: "Coaching Package - 10 Sessions",
    logo: "",
    features: [
      "10, 45-min coaching sessions. Discount of $190 when you purchase 10 sessions. Each session is $80 with this package."
    ],
    color: makeColor({ scalable: { color: "accent" } }),
    basePrice: {
      id: devAndProdValues("null", "null"),
      unit_amount: devAndProdValues<number>(99000, 99000)
    },
    couponPrice: {
      id: devAndProdValues(
        "price_1H05DqEQ8UKSDRmC0zLbKouZ",
        "price_1H05tpEQ8UKSDRmCEBRTGliG"
      ),
      unit_amount: devAndProdValues<number>(79900, 79900)
    }
  }
];

export const StyledCardContainer = styled.div`
  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: css`
      ${makeFlex("row", "space-between", "flex-start")};

      & > * {
        width: 33.333%;
      }
    `
  })}
`;

const IndexPage = () => {
  const { checkout } = useStripeCheckout({ urlIfPriceIs0: "" });

  return (
    <Layout>
      <SEO
        pageTitle="Packages"
        pageDescription="A collection of coaching packges offered through Heather Turano Coaching"
      />
      <Section styleType="blank">
        <Heading fontSize="h1" fontFamily="Playfair Display">
          Coaching Packages
        </Heading>
        <br />
        <Typography variant="paragraph" fontSize="sm">
          These pacakges are a collection of coaching sessions that you can
          purchase a-la carte or as a group. Purchasing the packages in a group
          lowers the cost of the individual coaching session.
        </Typography>
        <StyledCardContainer>
          {individualCoachingPackages.map(
            ({
              productId,
              name,
              basePrice,
              couponPrice,
              features,
              color,
              logo
            }) => (
              <ProductCard
                key={productId}
                name={name}
                basePrice={basePrice}
                couponPrice={couponPrice}
                features={features}
                handleClick={checkout}
                color={color}
                img={logo}
                imgAlt={name.split(" ").join("-")}
              />
            )
          )}
        </StyledCardContainer>
      </Section>
    </Layout>
  );
};

export default IndexPage;
