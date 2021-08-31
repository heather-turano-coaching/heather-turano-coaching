import { Actions } from "@htc/components/content";
import { IServiceTeachable } from "@htc/lib/server/contentful";
import React, { FC } from "react";

export const ServiceCardTeachable: FC<IServiceTeachable> = ({
  fields: { actions }
}) => {
  return <Actions actions={actions} />;
};
