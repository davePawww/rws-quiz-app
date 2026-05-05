import type { Meta, StoryObj } from '@storybook/react-vite';

import AnimatedDiv from '@/components/animated-div';

const meta = {
  title: 'Components/AnimatedDiv',
  component: AnimatedDiv,
  tags: ['autodocs'],
  args: {
    children: 'This is an animated div',
  },
} satisfies Meta<typeof AnimatedDiv>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
