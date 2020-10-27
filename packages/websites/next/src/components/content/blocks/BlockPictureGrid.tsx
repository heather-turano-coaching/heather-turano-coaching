import { IBlockPictureGrid } from "lib/contentful";
import { FC } from "react";

export const BlockPictureGrid: FC<IBlockPictureGrid> = (props) => (
  <div>{JSON.stringify(props, null, 4)}</div>
);
