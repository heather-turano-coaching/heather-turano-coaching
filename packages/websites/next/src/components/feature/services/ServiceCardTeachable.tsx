import { IServiceTeachable } from "@heather-turano-coaching/domain";
import { FC } from "react";

export const ServiceCardTeachable: FC<IServiceTeachable> = (props) => {
  return <div>{JSON.stringify(props, null, 4)}</div>;
};
