import { FeaturePageComponent } from "@htc/features/page";
import { useRouter } from "next/router";
import React from "react";

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

  if (router.isFallback) {
    return <div>Loading...</div>;
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
              <input type="text" name="b28-ft" tabIndex={-1} value="" />
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
