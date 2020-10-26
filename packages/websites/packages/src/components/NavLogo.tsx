import { makeFlex } from "@heather-turano-coaching/core/components";
import React, { FC, memo } from "react";
import styled from "styled-components";

// @ts-ignore
import image from "../../static/favicon.png";

export const StyledNavLogo = styled.div`
  height: 100%;
  max-width: 200px;
  ${makeFlex("row", "center", "center")};

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

export const NavLogo: FC = memo(() => {
  return (
    <StyledNavLogo>
      <img src={image} alt="mindful-movement-100-logo" />
    </StyledNavLogo>
  );
});
