import { createFileRoute } from '@tanstack/react-router';

import DifficultySelection from '@/features/quiz/difficulty-selection';

export const Route = createFileRoute('/difficulty')({
  component: DifficultySelection,
});
