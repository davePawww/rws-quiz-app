import type { Meta, StoryObj } from '@storybook/react-vite';

import App from '@/features/app/app';

const meta = {
  title: 'App',
  component: App,
  args: {
    children: 'Hello App!',
  },
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
