// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ItemCard } from ".";

type T = typeof ItemCard;
type Story = ComponentStoryObj<T>;

export default {
  args: {
    title: "wallet",
    imagePath: "/_test/test.png",
    itemId: "test",
    progress: 60,
    remaining: 100,
    isExhibit: false,
    isPossession: false,
  },
  component: ItemCard,
} as ComponentMeta<T>;

export const Default: Story = {};
export const Exhibit: Story = {
  args: {
    isExhibit: true,
    bids: 100,
  },
};
export const Possession: Story = {
  args: {
    isPossession: true,
  },
};
