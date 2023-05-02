/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FeaturePageComponent } from "@htc/features/page";
import { useRouter } from "next/router";
import React, { FC, useRef } from "react";

import { withPromotionPageLayout } from "./Promotion.layout";
import { IPromotion } from "@htc/lib/contentful/contentful.types";
import {
  Button,
  Container,
  ContentfulRichText,
  Input,
  Title,
  Typography
} from "@htc/components/atomic";
import styled, { css } from "styled-components";
import {
  makeDesktopStyles,
  makeFontWeight,
  makeMobileStyles,
  makeRem
} from "@htc/theme";
import isBefore from "date-fns/isBefore";
import isAfter from "date-fns/isAfter";
import img from "@htc/images/032-chakra.png";

export type PromotionPageProps = {
  promotion: IPromotion;
};

const SCatch = styled("div")`
  display: grid;
  padding: ${makeRem(32)};
  height: 80vh;

  & > * {
    place-self: center;
    max-width: 80ch;
    text-align: center;
  }

  img {
    max-width: ${makeRem(200)};
    height: auto;
    margin-bottom: ${makeRem(32)};
  }
`;

const Catch: FC<{ children: string }> = ({ children }) => {
  return (
    <SCatch>
      <div>
        {/* @ts-ignore */}
        <img src={img.src} alt="namaste" />
        <Typography variant="paragraph" fontSize={"h5"}>
          {children}
        </Typography>
      </div>
    </SCatch>
  );
};

const SGrid = styled("div")`
  ${({ theme }) => css`
    ${makeDesktopStyles(theme)} {
      display: grid;
      grid-template-columns: ${makeRem(500)} 1fr;
    }
  `}
`;

const SLeft = styled("div")`
  ${({ theme }) => css`
    ${makeMobileStyles(theme)} {
      display: none;
    }
  `}
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SDiv = styled("div")`
  padding: ${makeRem(32)};

  strong {
    font-weight: ${makeFontWeight("black")};
  }
`;

export const PromotionPage: FeaturePageComponent<PromotionPageProps> = ({
  promotion
}) => {
  const router = useRouter();
  const todayRef = useRef(new Date());
  const startDateRef = useRef(new Date(promotion.fields.startDate));
  const endDateRef = useRef(new Date(promotion.fields.endDate));

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (isBefore(todayRef.current, startDateRef.current)) {
    return (
      <Catch>
        We&apos;re sorry. This promotion is not active yet. Check back soon!
      </Catch>
    );
  }

  if (isAfter(todayRef.current, endDateRef.current)) {
    return <Catch>We&apos;re sorry. This promotion has expired.</Catch>;
  }

  return (
    <SGrid>
      <SDiv>
        <Container>
          <Title size="md">{promotion.fields.title}</Title>
          <br />
          <ContentfulRichText
            richText={promotion.fields.description}
            copyProps={{
              variant: "paragraph"
            }}
          />
          <br />
          <form
            method="POST"
            action={promotion.fields.audiencefulPostActionUrl}
          >
            <Input
              label="Email Address"
              type="text"
              name="email"
              id="email"
              placeholder="youremail@yourdomain.com"
              required
            />
            <div
              style={{
                position: "absolute",
                left: -5000
              }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b28-ft"
                tabIndex={-1}
                value=""
                readOnly
              />
            </div>
            <br />
            <Button type="submit" label="Sign up!" styleType="secondary" />
          </form>
        </Container>
      </SDiv>
      <SLeft>
        <img
          src={promotion.fields.image.fields.file.url}
          alt={promotion.fields.image.fields.title}
        />
      </SLeft>
    </SGrid>
  );
};

PromotionPage.withPageLayout = withPromotionPageLayout;
