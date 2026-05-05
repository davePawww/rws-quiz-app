import type { Meta, StoryObj } from '@storybook/react-vite';

import Welcome from '@/features/quiz/welcome';

const meta = {
  title: 'Quiz/Welcome Screen',
  component: Welcome,
  tags: ['autodocs'],
} satisfies Meta<typeof Welcome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
