import { createFileRoute, redirect } from '@tanstack/react-router';

import CategorySelection from '@/features/quiz/category-selection';
import { useQuizStore } from '@/features/quiz/quiz.store';

export const Route = createFileRoute('/category')({
  beforeLoad: () => {
    const { difficulty } = useQuizStore.getState();
    if (!difficulty) {
      return redirect({ to: '/difficulty' });
    }
  },
  component: CategorySelection,
});
