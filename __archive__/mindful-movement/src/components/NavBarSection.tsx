import { makeFlex } from "@heather-turano-coaching/components";
import { useBreakpoints } from "@heather-turano-coaching/core/hooks";
import React, { FC, useMemo } from "react";
import styled, { css } from "styled-components";

export type ComponentTypes = "div" | "ul";

const NavBarSectionCss = css`
  ${makeFlex("row", "flex-start", "center")};
  height: 100%;
`;

const componentTypeMap: { [key in ComponentTypes]: any } = {
  ul: styled.ul`
    ${NavBarSectionCss}
  `,
  div: styled.div`
    ${NavBarSectionCss}
  `
};

export type NavBarSectionProps = {
  component?: ComponentTypes;
  collapse?: boolean;
};

export const NavBarSection: FC<NavBarSectionProps> = ({
  component = "div",
  collapse = false,
  children
}) => {
  const Component = useMemo(() => componentTypeMap[component], [component]);
  const [windowWidth, { phoneLg }] = useBreakpoints();

  console.log();

  if (windowWidth < phoneLg && collapse) {
    console.log("close");
    return <></>;
    // return (
    //   <button>
    //     <Icon
    //       icon="bars"
    //       iconSize="lg"
    //       iconColor={{ scalable: { color: "secondary" } }}
    //     />
    //   </button>
    // );
  }
  return <Component>{children}</Component>;
};
