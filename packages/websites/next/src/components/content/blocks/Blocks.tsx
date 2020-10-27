import {
  IBlock,
  IBlockGrabber,
  IBlockImageRow,
  IBlockPictureGrid,
  IBlockTestimonial,
  IWebPageFields
} from "lib/contentful";
import { FC, FunctionComponent } from "react";

import { BlockGrabber } from "./BlockGrabber";
import { BlockImageRow } from "./BlockImageRow";
import { BlockPictureGrid } from "./BlockPictureGrid";
import { BlockSimple } from "./BlockSimple";
import { BlockTestimonial } from "./BlockTestimonial";

type BlockKeyExtractor<
  T extends { sys: { contentType: { sys: { id: string } } } }
> = T["sys"]["contentType"]["sys"]["id"];

type BlockMapKeys =
  | BlockKeyExtractor<IBlockGrabber>
  | BlockKeyExtractor<IBlockPictureGrid>
  | BlockKeyExtractor<IBlock>
  | BlockKeyExtractor<IBlockImageRow>
  | BlockKeyExtractor<IBlockTestimonial>;

const BlockMap = {
  blockGrabber: BlockGrabber,
  blockPictureGrid: BlockPictureGrid,
  blockImageRow: BlockImageRow,
  blockTestimonial: BlockTestimonial,
  block: BlockSimple
};

export const Blocks: FC<{ blocks: IWebPageFields["blocks"] }> = ({
  blocks
}) => {
  return (
    <>
      {blocks.map((block) => {
        const blockType = block.sys.contentType.sys.id;
        if (blockType === "block")
          return <BlockSimple {...(block as IBlock)} />;

        if (blockType === "blockGrabber")
          return <BlockGrabber {...(block as IBlockGrabber)} />;

        if (blockType === "blockImageRow")
          return <BlockImageRow {...(block as IBlockImageRow)} />;

        if (blockType === "blockPictureGrid")
          return <BlockPictureGrid {...(block as IBlockPictureGrid)} />;

        if (blockType === "blockTestimonial")
          return <BlockTestimonial {...(block as IBlockTestimonial)} />;

        console.error(
          "You should not be seeing this error. A block type wasn't properly mapped."
        );
        return null;
      })}
    </>
  );
};
