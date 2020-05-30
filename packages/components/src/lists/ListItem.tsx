import { makeInset } from "@heather-turano-coaching/design-system";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

import { Typography } from "../typography";
import { makeFlex } from "../utils";

export interface ListItemProps {
  label: string;
  tight?: boolean;
  icon?: ReactNode;
}

const StyledListItem = styled.li<{ tight: boolean }>`
  ${makeFlex("row", "flex-start", "center")};
  ${({ tight }) => {
    if (tight) return makeInset({ vertical: 4, horizontal: 8 });
    return makeInset({ vertical: 12, horizontal: 20 });
  }}
`;

export const ListItem: FC<ListItemProps> = ({ label, tight = false, icon }) => (
  <StyledListItem tight={tight}>
    {icon}
    <Typography variant="paragraph" fontSize="xs">
      {label}
    </Typography>
  </StyledListItem>
);
