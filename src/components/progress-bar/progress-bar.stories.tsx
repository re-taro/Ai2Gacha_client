// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ProgressBar } from ".";

type T = typeof ProgressBar;
type Story = ComponentStoryObj<T>;

export default {
  args: {
    progress: 25,
  },
  component: ProgressBar,
} as ComponentMeta<T>;

export const Default: Story = {};
export const Half: Story = {
  args: {
    progress: 50,
  },
};
export const Subtle: Story = {
  args: {
    progress: 48.5,
  },
};
