import { IBlockGrabber } from "@heather-turano-coaching/domain";
import { FC } from "react";

export const BlockGrabber: FC<IBlockGrabber> = (props) => (
  <div>{JSON.stringify(props, null, 4)}</div>
);
