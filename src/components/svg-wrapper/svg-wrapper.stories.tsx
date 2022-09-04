// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { SvgWrapper } from ".";

type T = typeof SvgWrapper;
type Story = ComponentStoryObj<T>;

export default {
  args: {
    path: "/statics/undraw_completed_re_cisp 1.svg",
  },
  component: SvgWrapper,
} as ComponentMeta<T>;

export const Default: Story = {};
