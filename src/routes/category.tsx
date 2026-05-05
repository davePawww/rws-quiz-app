import { createFileRoute } from '@tanstack/react-router';

import CategorySelection from '@/features/quiz/category-selection';

export const Route = createFileRoute('/category')({
  component: CategorySelection,
});
