import { Actions } from "@htc-website/components";
import { IServiceQuickAction } from "@htc/contentful";
import React, { FC } from "react";

export const ServiceCardQuickAction: FC<IServiceQuickAction> = ({
  fields: { actions }
}) => {
  return <Actions actions={actions} />;
};
