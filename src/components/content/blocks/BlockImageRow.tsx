import { IBlockImageRow } from "@htc/lib/contentful";
import { FC } from "react";

export const BlockImageRow: FC<IBlockImageRow> = (props) => (
  <div>{JSON.stringify(props, null, 4)}</div>
);
