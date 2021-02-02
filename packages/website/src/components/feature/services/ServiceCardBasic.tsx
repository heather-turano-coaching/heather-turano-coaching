import { IServiceBasic } from "@heather-turano-coaching/domain";
import { FC } from "react";

export const ServiceCardBasic: FC<IServiceBasic> = (props) => {
  return <div>{JSON.stringify(props, null, 4)}</div>;
};
