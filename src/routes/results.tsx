import { createFileRoute } from '@tanstack/react-router';

import ResultPage from '@/features/quiz/result-page';

export const Route = createFileRoute('/results')({
  component: ResultPage,
});
