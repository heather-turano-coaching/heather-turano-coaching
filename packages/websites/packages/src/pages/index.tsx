/* eslint-disable @typescript-eslint/camelcase */
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

function devAndProdValues<ValueType = string>({
  dev,
  prod
}: {
  dev: ValueType;
  prod: ValueType;
}): ValueType {
  if (process.env.NODE_ENV !== "production") {
    return dev;
  }
  return prod;
}

const singleCoachingSessionPrice = 16500;

const individualCoachingPackages: HTCPackage[] = [
  {
    productId: devAndProdValues({
      dev: "prod_HZDRpgTiOg2mST",
      prod: "prod_HZEMqGcVGpspPy"
    }),
    name: "Single Coaching Session",
    logo: "",
    features: ["45 minute one-on-one coaching session"],
    color: makeColor({ scalable: { color: "primary" } }),
    basePrice: {
      id: devAndProdValues<string>({
        dev: "price_1H9uVuEQ8UKSDRmCorYn2eTP",
        prod: "price_1H9uUTEQ8UKSDRmCugLrubPy"
      }),
      unit_amount: devAndProdValues<number>({
        dev: singleCoachingSessionPrice,
        prod: singleCoachingSessionPrice
      })
    }
  },
  {
    productId: devAndProdValues({
      dev: "prod_HZDZ2KleQok6oo",
      prod: "prod_HZEMgHWvNfebcT"
    }),
    name: "Coaching Package - 8 Sessions",
    logo: "",
    features: [
      "8, 45-min coaching sessions. Discount of $72 when you purchase 8 sessions. Each session is $90 with the package"
    ],
    color: makeColor({ scalable: { color: "secondary" } }),
    basePrice: {
      id: devAndProdValues({ dev: "null", prod: "null" }),
      unit_amount: devAndProdValues<number>({
        dev: singleCoachingSessionPrice * 8,
        prod: singleCoachingSessionPrice * 8
      })
    },
    couponPrice: {
      id: devAndProdValues({
        dev: "price_1H9uYHEQ8UKSDRmClwmwaX2z",
        prod: "price_1H9uSgEQ8UKSDRmCFrUf8MB1"
      }),
      unit_amount: devAndProdValues<number>({ dev: 124000, prod: 124000 })
    }
  },
  {
    productId: devAndProdValues({
      dev: "prod_HZDf5Eh5TI3Bgv",
      prod: "prod_HZEMGuZalSifGo"
    }),
    name: "Coaching Package - 10 Sessions",
    logo: "",
    features: [
      "10, 45-min coaching sessions. Discount of $190 when you purchase 10 sessions. Each session is $80 with this package."
    ],
    color: makeColor({ scalable: { color: "accent" } }),
    basePrice: {
      id: devAndProdValues({ dev: "null", prod: "null" }),
      unit_amount: devAndProdValues<number>({
        dev: singleCoachingSessionPrice * 10,
        prod: singleCoachingSessionPrice * 10
      })
    },
    couponPrice: {
      id: devAndProdValues({
        dev: "price_1H9uaaEQ8UKSDRmCEVspEDae",
        prod: "price_1H9uLfEQ8UKSDRmCkHH2gQWb"
      }),
      unit_amount: devAndProdValues<number>({ dev: 150000, prod: 150000 })
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
