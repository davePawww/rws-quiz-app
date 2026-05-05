import type { Meta, StoryObj } from '@storybook/react-vite';

import CategorySelection from '@/features/quiz/category-selection';

const meta = {
  title: 'Quiz/Category Selection',
  component: CategorySelection,
  tags: ['autodocs'],
} satisfies Meta<typeof CategorySelection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
