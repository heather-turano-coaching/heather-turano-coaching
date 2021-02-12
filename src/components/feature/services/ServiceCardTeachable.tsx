import { IServiceTeachable } from "@htc/domain";
import { Actions } from "components/content/actions";
import { FC } from "react";

export const ServiceCardTeachable: FC<IServiceTeachable> = ({
  fields: { actions }
}) => {
  return <Actions actions={actions} />;
};
