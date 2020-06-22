/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { Tag } from "./Tag";
import { TagGroup } from "./TagGroup";

export default {
  component: Tag,
  title: "Classification|Tags",
};

export const baseDefault = () => <Tag text="mindfulness" />;
export const tag = () => <Tag tagType="tag" text="mindfulness" />;
export const category = () => <Tag tagType="category" text="mindfulness" />;
export const list = () => <Tag tagType="list" text="mindfulness" />;
export const groupedWithTagArray = () => (
  <TagGroup
    tags={[
      { text: "mindfulness" },
      { text: "grow" },
      { text: "except" },
      { text: "church" },
      { text: "separate" },
      { text: "mission" },
      { text: "day" },
      { text: "walk" },
      { text: "stems" },
    ]}
  />
);
export const groupedWithComposite = () => (
  <TagGroup>
    <a>
      <Tag text="mindfulness" />
    </a>
    <a>
      <Tag text="grow" />
    </a>
    <a>
      <Tag text="except" />
    </a>
    <a>
      <Tag text="church" />
    </a>
    <a>
      <Tag text="separate" />
    </a>
    <a>
      <Tag text="mission" />
    </a>
    <a>
      <Tag text="day" />
    </a>
    <a>
      <Tag text="walk" />
    </a>
    <a>
      <Tag text="stems" />
    </a>
  </TagGroup>
);
export const listGroupedWithTagArray = () => (
  <TagGroup
    tags={[
      { tagType: "list", text: "mindfulness" },
      { tagType: "list", text: "grow" },
      { tagType: "list", text: "except" },
      { tagType: "list", text: "church" },
      { tagType: "list", text: "separate" },
      { tagType: "list", text: "mission" },
      { tagType: "list", text: "day" },
      { tagType: "list", text: "walk" },
      { tagType: "list", text: "stems" },
    ]}
  />
);
export const listGroupedWithComposite = () => (
  <TagGroup>
    <a>
      <Tag tagType="list" text="mindfulness" />
    </a>
    <a>
      <Tag tagType="list" text="grow" />
    </a>
    <a>
      <Tag tagType="list" text="except" />
    </a>
    <a>
      <Tag tagType="list" text="church" />
    </a>
    <a>
      <Tag tagType="list" text="separate" />
    </a>
    <a>
      <Tag tagType="list" text="mission" />
    </a>
    <a>
      <Tag tagType="list" text="day" />
    </a>
    <a>
      <Tag tagType="list" text="walk" />
    </a>
    <a>
      <Tag tagType="list" text="stems" />
    </a>
  </TagGroup>
);
