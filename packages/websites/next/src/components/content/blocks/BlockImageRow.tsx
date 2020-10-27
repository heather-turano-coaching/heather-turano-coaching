import { IBlockImageRow } from "@heather-turano-coaching/domain";
import { FC } from "react";

export const BlockImageRow: FC<IBlockImageRow> = (props) => (
  <div>{JSON.stringify(props, null, 4)}</div>
);
