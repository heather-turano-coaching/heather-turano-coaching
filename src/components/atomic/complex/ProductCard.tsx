import { rgba } from "polished";
import React, { FC, Fragment, memo, useMemo } from "react";
import styled, { css } from "styled-components";

import {
  makeColor,
  makeInset,
  makeOutset,
  makeResponsive,
  makeSize
} from "../../../../../src/design-system";
import { Heading, Line, List, ListItem, Typography } from "../display";
import { Button } from "../inputs";

export interface HTCPackagePrice {
  id: string;
  unit_amount: number;
}

export interface ProductCardProps {
  description?: string;
  name: string;
  features: string[];
  color: string;
  img?: string;
  imgAlt: string;
  basePrice: HTCPackagePrice;
  couponPrice?: HTCPackagePrice;
  handleClick: (priceId: string, priceInCents: number) => () => void;
}

const StyledProductCard = styled.div`
  text-align: center;
  padding: ${makeInset({ vertical: 20, horizontal: 20 })};
  box-shadow: rgba(50, 50, 50, 0.1) 0px 16px 32px,
    rgba(0, 0, 0, 0.07) 0px 6px 16px;
  border-radius: ${makeSize({ custom: 4 })};
  ${makeOutset({ vertical: "sm", horizontal: "sm" })};
  background: ${makeColor({ fixed: "light" })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: css`
      margin-left: 0;
      margin-right: 0;
    `
  })}
`;

const StyledProductImage = styled.img`
  height: ${makeSize({ custom: 150 })};
  display: block;
  margin: 0 auto;
`;

const StyledProductHeader = styled.header<{ productColor: string }>`
  ${makeInset({ vertical: "sm", horizontal: "sm" })};
  background: ${({ productColor }) => rgba(productColor, 0.2)};

  h5 {
    text-transform: uppercase;
    font-weight: 800;
    color: ${makeColor({ fixed: "dark" })};
  }
`;

const StyledProductPrice = styled.header<{
  productColor: string;
  strike?: boolean;
}>`
  ${makeInset({ vertical: "sm", horizontal: "sm" })};

  p {
    display: inline-block;
    color: ${({ productColor }) => productColor};
    font-weight: 800;
  }

  & > div {
    &:first-child {
      p {
        ${({ strike = false }) =>
          strike &&
          css`
            text-decoration: line-through;
          `}
      }
    }
  }
`;

const StyledProductFooter = styled.footer`
  ${makeInset({ vertical: 16, horizontal: 16 })};
  button {
    width: 100%;
  }
`;

export const ProductCard: FC<ProductCardProps> = ({
  name,
  basePrice,
  couponPrice,
  features,
  handleClick,
  color,
  img,
  imgAlt,
  description
}) => {
  const priceId = couponPrice?.id || basePrice.id;
  const unitAmount = couponPrice?.unit_amount || basePrice.unit_amount;
  const onClick = handleClick(priceId, unitAmount);

  return (
    <StyledProductCard>
      {img && <StyledProductImage src={img} alt={imgAlt} />}
      <StyledProductHeader productColor={color}>
        <Heading fontSize="h5">{name}</Heading>
        {description && (
          <Typography variant="paragraph" fontSize="xs">
            {description}
          </Typography>
        )}
      </StyledProductHeader>
      <StyledProductPrice productColor={color} strike={!!couponPrice?.id}>
        <div>
          {basePrice.unit_amount === 0 && (
            <Typography variant="paragraph" fontSize="h2">
              FREE!
            </Typography>
          )}
          {basePrice.unit_amount !== 0 && (
            <>
              <Typography variant="paragraph" fontSize="xs">
                $
              </Typography>
              <Typography variant="paragraph" fontSize="h2">
                {basePrice.unit_amount / 100}
              </Typography>
              <Typography variant="paragraph" fontSize="xs">
                .00
              </Typography>
            </>
          )}
        </div>
        {couponPrice?.id && (
          <div>
            {couponPrice.unit_amount === 0 && (
              <Typography variant="paragraph" fontSize="h2">
                FREE!
              </Typography>
            )}
            {couponPrice.unit_amount !== 0 && (
              <>
                <Typography variant="paragraph" fontSize="xs">
                  $
                </Typography>
                <Typography variant="paragraph" fontSize="h2">
                  {couponPrice.unit_amount / 100}
                </Typography>
                <Typography variant="paragraph" fontSize="xs">
                  .00
                </Typography>
              </>
            )}
          </div>
        )}
      </StyledProductPrice>
      <List>
        {useMemo(
          () =>
            features.map((feature, i) => (
              <Fragment key={i.toString()}>
                <ListItem key={feature} label={feature} />
                {i !== features.length - 1 && <Line />}
              </Fragment>
            )),
          [features]
        )}
      </List>
      <StyledProductFooter>
        <Button
          label={basePrice.unit_amount === 0 ? "Sign up" : "Purchase"}
          onClick={() => onClick()}
          styleType="secondary"
        />
      </StyledProductFooter>
    </StyledProductCard>
  );
};

export default memo(ProductCard);
