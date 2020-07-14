import { Typography } from "@heather-turano-coaching/components";
import { makeReset } from "@heather-turano-coaching/design-system";
import React, { FC } from "react";
import styled from "styled-components";

import { FrameworkLink } from "../general";
import { NavLinkType } from "../layout";
import { fontColor } from "./FooterNav";

const StyledFooterNavLinkList = styled.ul`
  ${makeReset("list")};

  a {
    ${makeReset("anchor")}
  }
`;

export const FooterNavLinkList: FC<{ list: NavLinkType[] }> = ({ list }) => (
  <StyledFooterNavLinkList>
    {list.map((item) => (
      <li key={item.route}>
        <FrameworkLink to={item.route}>
          <Typography fontSize="xs" fontColor={fontColor} variant="paragraph">
            {item.label}
          </Typography>
        </FrameworkLink>
      </li>
    ))}
  </StyledFooterNavLinkList>
);
