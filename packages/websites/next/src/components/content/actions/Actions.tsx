import { ButtonGroup } from "@heather-turano-coaching/core/components";
import { IBlockFields } from "@heather-turano-coaching/domain";
import { Button } from "@material-ui/core";
import Link from "next/link";
import React, { FC, memo } from "react";

export const Actions: FC<{ actions: IBlockFields["actions"] }> = memo(
  function Actions({ actions }) {
    if (actions?.length > 0) {
      <ButtonGroup layout="inline" align="center">
        {actions.map(({ fields: action }) => {
          let extraProps = {};
          if (action.internalExternal === "internal") {
            extraProps = {
              component: Link
            };
          }
          return (
            <Button
              key={action.label}
              variant={action.type === "primary" ? "contained" : "outlined"}
              color={action.type}
              href={action.url}
              {...extraProps}
            >
              {action.label}
            </Button>
          );
        }, [])}
      </ButtonGroup>;
    }
    return null;
  }
);
