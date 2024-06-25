import type { Meta, StoryObj } from "@storybook/vue3";

import BrieButton from "./BrieButton.vue";

const meta: Meta<typeof BrieButton> = {
  title: "BrieButton",
  component: BrieButton,
  render: (args) => ({
    setup() {
      return { args };
    },
    components: { BrieButton },
    template: '<BrieButton v-bind="args">Simple Button</BrieButton>',
  }),
  args: {
    disabled: false,
    busy: false,
    icon: "",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BrieButton>;

export const Primary: Story = {
  args: {},
};

export const WithIcon: Story = {
  args: {
    icon: "mdi:send",
  },
};
