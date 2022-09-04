// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ItemCard } from ".";

type T = typeof ItemCard;
type Story = ComponentStoryObj<T>;

export default {
  args: {
    type: "select",
    title: "wallet",
    imagePath: "/_test/test.png",
    itemId: "test",
  },
  component: ItemCard,
} as ComponentMeta<T>;

export const Default: Story = {};
export const Choose: Story = {
  args: {
    type: "choose",
    chooseItemId: "wallet",
  },
};
export const Exhibit: Story = {
  args: {
    type: "exhibit",
    bids: 100,
  },
};
export const Submit: Story = {
  args: {
    type: "submit",
  },
};
export const Tile: Story = {
  args: {
    type: "tile",
  },
};
