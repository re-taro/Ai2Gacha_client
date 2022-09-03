// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button } from ".";

type T = typeof Button;
type Story = ComponentStoryObj<T>;

export default {
  args: {
    children: "This is test",
  },
  component: Button,
} as ComponentMeta<T>;

export const Default: Story = {};
export const Disable: Story = {
  args: {
    disable: true,
  },
};
export const Negative: Story = {
  args: {
    isNegative: true,
  },
};
export const Border: Story = {
  args: {
    isNegative: true,
    border: true,
  },
};
