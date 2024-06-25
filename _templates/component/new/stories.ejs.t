---
to: lib/components/<%= Name %>/<%= Name %>.stories.ts
---
import type { Meta, StoryObj } from "@storybook/vue3";

import <%= Name %> from "./<%= Name %>.vue";

const meta: Meta<typeof <%= Name %>> = {
  title: "<%= Name.slice(1)%>",
  component: <%= Name %>,
  render: (args) => ({
    setup() {
      return { args };
    },
    components: { <%= Name %> },
    template: '<<%= Name %> v-bind="args" />',
  }),
  args: {

  },
  argTypes: {
    
  },
};

export default meta;
type Story = StoryObj<typeof <%= Name %>>;

export const Primary: Story = {
  args: {
  },
};
