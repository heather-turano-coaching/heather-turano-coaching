import { ButtonGroup } from "@htc/components/atomic";
import { IAction } from "@htc/lib/server/contentful/contentful";
import { Button } from "@material-ui/core";
import Link from "next/link";
import React, { FC, memo } from "react";

export const Actions: FC<{ actions: IAction[] | undefined }> = memo(
  function Actions({ actions }) {
    if (!actions || actions?.length === 0) {
      return null;
    }

    return (
      <ButtonGroup layout="inline" align="center">
        {actions.map(({ fields: action }) => {
          if (!action) {
            return null;
          }
          const Btn = (
            <Button
              size="large"
              key={action.label}
              variant={action?.type === "primary" ? "contained" : "outlined"}
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
);
