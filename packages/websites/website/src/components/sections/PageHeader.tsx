import {
  Heading,
  Typography,
  makeFlex,
} from "@heather-turano-coaching/components";
import {
  ColorProperties,
  ColorScalePosition,
} from "@heather-turano-coaching/design-system";
import {
  makeColor,
  makeInset,
  makeOutset,
  makeResponsive,
  makeRhythm,
  makeSize,
} from "@heather-turano-coaching/design-system";
import { useBreakpoints } from "@heather-turano-coaching/hooks";
import { useLocation } from "@reach/router";
import React, { FC, Fragment } from "react";
import styled from "styled-components";

import { FrameworkLink } from "../general";

interface PageHeaderProps {
  pageTitle: string;
  pageName?: string;
  titleColor?: ColorProperties;
}

const StyledLayoutPageHeader = styled.header`
  & > div {
    ${makeFlex("row", "flex-start", "center")};
    ${makeRhythm({ fontSize: "sm", top: 1, bottom: 0 })};

    ${makeResponsive({
      beginAt: "tabletLandscape",
      style: `
        ${makeRhythm({ fontSize: "sm", top: 1, bottom: 0 })};
      `,
    })}

    & > * {
      &:not(:last-child) {
        ${makeOutset({ right: 8 })};
      }
    }

    a {
      text-decoration-color: ${makeColor({
        scalable: { color: "gray", scale: 2 },
      })};
      cursor: pointer;
      transition: all 0.15s ease-in-out;

      &:hover {
        text-decoration: underline;
        color: ${makeColor({ scalable: { color: "gray", scale: 2 } })};
      }
    }

    & p {
      text-transform: uppercase;
    }
  }

  h1,
  h2 {
    text-transform: capitalize;
    ${makeInset({ bottom: 16 })};
    width: 100%;
    border-bottom: ${makeSize({ custom: 1 })} solid
      ${makeColor({ scalable: { color: "secondary", scale: 3 } })};
    line-height: 1.2;
    ${makeRhythm({ fontSize: "sm", top: 1, bottom: 0 })};
  }

  h4 {
    ${makeRhythm({ fontSize: "sm", top: 1, bottom: 1 })}
  }
`;

const basePathName = "blog";

const copy = ({
  label,
  scale,
}: {
  label: string;
  scale: ColorScalePosition;
}) => (
  <Typography
    key={label}
    variant="label"
    fontSize="xs"
    fontColor={{
      scalable: {
        color: "gray",
        scale: scale,
      },
    }}
  >
    {label}
  </Typography>
);

export const PageHeader: FC<PageHeaderProps> = ({
  pageTitle,
  titleColor = { scalable: { color: "secondary" } },
}) => {
  const location = useLocation();
  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  const routes = location.pathname.split("/");
  routes.pop();
  routes[routes.length - 1] = pageTitle;

  return (
    <StyledLayoutPageHeader>
      <div>
        {routes.map((route, index) =>
          index !== routes.length - 1 ? (
            <Fragment key={route}>
              <FrameworkLink to={`/${route}`}>
                {copy({
                  label: index === 0 ? basePathName : route,
                  scale: index !== routes.length - 1 ? 3 : 0,
                })}
              </FrameworkLink>
              {copy({
                label: "/",
                scale: 3,
              })}
            </Fragment>
          ) : (
            copy({
              label: index === 0 ? basePathName : route,
              scale: index !== routes.length - 1 ? 3 : 0,
            })
          )
        )}
      </div>
      <Heading
        fontSize={windowWidth <= tabletPortrait ? "h2" : "h1"}
        fontColor={titleColor}
      >
        {pageTitle}
      </Heading>
    </StyledLayoutPageHeader>
  );
};
