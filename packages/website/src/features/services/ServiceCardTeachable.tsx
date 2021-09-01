import { Actions } from "@htc-website/components/actions";
import { IServiceTeachable } from "@htc/contentful";
import React, { FC } from "react";

export const ServiceCardTeachable: FC<IServiceTeachable> = ({
  fields: { actions }
}) => {
  return <Actions actions={actions} />;
};
