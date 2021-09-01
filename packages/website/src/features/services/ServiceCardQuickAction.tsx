import { Actions } from "@htc-website/components/content";
import { IServiceQuickAction } from "@htc-website/lib/contentful/contentful.types";
import React, { FC } from "react";

export const ServiceCardQuickAction: FC<IServiceQuickAction> = ({
  fields: { actions }
}) => {
  return <Actions actions={actions} />;
};
