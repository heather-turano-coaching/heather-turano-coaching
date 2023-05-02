/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FeaturePageComponent } from "@htc/features/page";
import { useRouter } from "next/router";
import React, { useRef } from "react";

import { withPromotionPageLayout } from "./Promotion.layout";
import { IPromotion } from "@htc/lib/contentful/contentful.types";
import {
  Button,
  Container,
  ContentfulRichText,
  Input,
  Title
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
import { AudiencefulForm } from "../form";
import { Catch } from "@htc/components/atomic/molecules";

export type PromotionPageProps = {
  promotion: IPromotion;
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
      <Catch
        // @ts-ignore
        imgSrc={img.src}
        imgAlt="not available yet"
        signUpCopy="Check back soon or sign up for the HTC newsletter below to get notified when new promotions become available!"
      >
        We&apos;re sorry. This promotion is not active yet.
      </Catch>
    );
  }

  if (isAfter(todayRef.current, endDateRef.current)) {
    return (
      <Catch
        // @ts-ignore
        imgSrc={img.src}
        imgAlt="expired"
        signUpCopy="Sign up for the HTC newsletter below to get notified when new promotions become available!"
      >
        We&apos;re sorry. This promotion has expired.
      </Catch>
    );
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
          <AudiencefulForm action={promotion.fields.audiencefulPostActionUrl}>
            <Input
              label="Email Address"
              type="text"
              name="email"
              id="email"
              placeholder="youremail@yourdomain.com"
              required
              style={{
                marginBottom: makeRem(16)
              }}
            />
            <Button
              type="submit"
              label="Sign up!"
              styleType="secondary"
              style={{
                width: "100%"
              }}
            />
          </AudiencefulForm>
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
