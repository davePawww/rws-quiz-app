import { createFileRoute, redirect } from '@tanstack/react-router';

import QuestionPage from '@/features/quiz/question-page';
import { useQuizStore } from '@/features/quiz/quiz.store';

export const Route = createFileRoute('/questions/$id')({
  beforeLoad: () => {
    const { questions } = useQuizStore.getState();
    if (questions.length === 0) {
      return redirect({ to: '/difficulty' });
    }
  },
  component: QuestionPage,
});
