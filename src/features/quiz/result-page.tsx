import AnimatedDiv from '@/components/animated-div';
import { AnimatedButton } from '@/components/ui/button';
import { useQuizStore } from '@/features/quiz/quiz.store';
import { useAnimateNavigation } from '@/hooks/use-animate-navigation';
import { cn } from '@/lib/utils';

export default function ResultPage() {
  const questions = useQuizStore((state) => state.questions);
  const answers = useQuizStore((state) => state.answers);
  const score = useQuizStore((state) => state.score);
  const resetQuiz = useQuizStore((state) => state.resetQuiz);
  const { scope, animateAndNavigate } = useAnimateNavigation();

  return (
    <AnimatedDiv ref={scope} className="container mx-auto my-10 flex flex-col items-center">
      <h1>Results</h1>
      <p>Your score: {score}</p>
      <ul className="text-muted-foreground mt-4 mb-4 space-y-2 text-sm">
        {questions.map((question, index) => (
          <li key={question.id}>
            <p>{question.question}</p>
            <p className={cn(`${answers[index] !== question.answer ? 'text-red-400' : ''}`)}>
              Your answer: {answers[index]}
            </p>
            <p>Correct answer: {question.answer}</p>
          </li>
        ))}
      </ul>
      <AnimatedButton
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98, y: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        onClick={() =>
          void animateAndNavigate(
            { opacity: 0, x: -100 },
            { type: 'tween', duration: 0.6, ease: 'easeInOut' },
            '/',
            resetQuiz,
          )
        }
      >
        Reset Quiz
      </AnimatedButton>
    </AnimatedDiv>
  );
}
