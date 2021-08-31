import { IServiceBasic } from "@htc/lib/server/contentful";
import { FC } from "react";

export const ServiceCardBasic: FC<IServiceBasic> = (props) => {
  return <div>{JSON.stringify(props, null, 4)}</div>;
};
