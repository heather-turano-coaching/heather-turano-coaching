import React from "react";

import { BlogCategories, BlogCategory } from "./BlogCategories";

export default {
  component: BlogCategories,
  title: "Blog|Categories"
};

const categories: BlogCategory[] = [
  {
    rawLabel: "category-instant",
    label: "instant",
    route: "/fact",
    img: require("../../.storybook/assets/stock/backlit-beach-color.jpg")
  },
  {
    rawLabel: "category-aloud",
    label: "aloud",
    route: "/close",
    img: require("../../.storybook/assets/stock/backlit-beach-clouds.jpg")
  },
  {
    rawLabel: "category-space",
    label: "space",
    route: "/century",
    img: require("../../.storybook/assets/stock/beach-clouds-dawn.jpg")
  },
  {
    rawLabel: "category-replied",
    label: "replied",
    route: "/identity",
    img: require("../../.storybook/assets/stock/beautiful-bloom-blooming.jpg")
  },
  {
    rawLabel: "category-valley",
    label: "valley",
    route: "/cell",
    img: require("../../.storybook/assets/stock/aquatic-plant-beautiful-bloom.jpg")
  },
  {
    rawLabel: "category-rather",
    label: "rather",
    route: "/table",
    img: require("../../.storybook/assets/stock/aquatic-bloom-blooming.jpg")
  }
];

export const base = () => <BlogCategories categories={categories} />;
