import { createFileRoute } from '@tanstack/react-router';

import QuestionPage from '@/features/quiz/question-page';

export const Route = createFileRoute('/questions/$id')({
  component: QuestionPage,
});
