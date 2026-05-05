import type { Meta, StoryObj } from '@storybook/react-vite';

import DifficultySelection from '@/features/quiz/difficulty-selection';

const meta = {
  title: 'Quiz/Difficulty Selection',
  component: DifficultySelection,
  tags: ['autodocs'],
} satisfies Meta<typeof DifficultySelection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
