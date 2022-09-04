// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { MatchCard } from ".";

type T = typeof MatchCard;
type Story = ComponentStoryObj<T>;

export default {
  args: {
    score: 50,
    itemId: "smart phone",
    boardId: "test",
    bids: 100,
  },
  component: MatchCard,
} as ComponentMeta<T>;

export const Default: Story = {};
export const Card: Story = {
  args: {
    isSelect: false,
  },
};
export const HighScore: Story = {
  args: {
    score: 100,
  },
};
