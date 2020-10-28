import { ButtonGroup } from "@heather-turano-coaching/core/components";
import { IAction, IBlockFields } from "@heather-turano-coaching/domain";
import { Button } from "@material-ui/core";
import Link from "next/link";
import React, { FC, memo } from "react";

export const Actions: FC<{ actions: IAction[] }> = memo(function Actions({
  actions
}) {
  if (actions?.length > 0) {
    return (
      <ButtonGroup layout="inline" align="center">
        {actions.map(({ fields: action }) => {
          const Btn = (
            <Button
              key={action.label}
              variant={action.type === "primary" ? "contained" : "outlined"}
              color={action.type}
            >
              {action.label}
            </Button>
          );
          if (action.internalExternal === "internal") {
            return (
              <Link href={action.url} key={action.url} passHref>
                {Btn}
              </Link>
            );
          }
          return (
            <a
              href={action.url}
              key={action.url}
              target="_blank"
              rel="noreferrer"
            >
              {Btn}
            </a>
          );
        }, [])}
      </ButtonGroup>
    );
  }

  return null;
});
