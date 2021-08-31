import { Actions } from "@htc/components/content";
import { IServiceQuickAction } from "@htc/lib/contentful/contentful.types";
import React, { FC } from "react";

export const ServiceCardQuickAction: FC<IServiceQuickAction> = ({
  fields: { actions }
}) => {
  return <Actions actions={actions} />;
};
