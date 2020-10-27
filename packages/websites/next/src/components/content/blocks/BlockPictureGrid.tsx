import { IBlockPictureGrid } from "@heather-turano-coaching/domain";
import { FC } from "react";

export const BlockPictureGrid: FC<IBlockPictureGrid> = (props) => (
  <div>{JSON.stringify(props, null, 4)}</div>
);
