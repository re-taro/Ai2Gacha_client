// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ThemeCard } from ".";

type T = typeof ThemeCard;
type Story = ComponentStoryObj<T>;

export default {
  args: {
    theme: "この財布の魅力",
    itemId: "test",
    bids: 100,
  },
  component: ThemeCard,
} as ComponentMeta<T>;

export const Default: Story = {};
export const Tag: Story = {
  args: {
    isTag: true,
  },
};
