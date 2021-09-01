import { Actions } from "@htc-website/components/content";
import { IServiceTeachable } from "@htc-website/lib/server/contentful";
import React, { FC } from "react";

export const ServiceCardTeachable: FC<IServiceTeachable> = ({
  fields: { actions }
}) => {
  return <Actions actions={actions} />;
};
