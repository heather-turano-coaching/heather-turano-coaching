import { IBlockGrabber } from "lib/contentful";
import { FC } from "react";

export const BlockGrabber: FC<IBlockGrabber> = (props) => (
  <div>{JSON.stringify(props, null, 4)}</div>
);
