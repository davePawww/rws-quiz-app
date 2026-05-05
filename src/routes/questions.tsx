import { createFileRoute } from '@tanstack/react-router';

import { useQuizStore } from '@/features/quiz/quiz.store';

export const Route = createFileRoute('/questions')({
  component: RouteComponent,
});

function RouteComponent() {
  const questions = useQuizStore((state) => state.questions);

  return (
    <div className="space-y-2">
      {questions.map((q) => (
        <p key={q.id}>{q.question}</p>
      ))}
    </div>
  );
}
