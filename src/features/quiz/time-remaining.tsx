import { useEffect, useState } from 'react';

import { useQuizStore } from '@/features/quiz/quiz.store';
import { useAnimateNavigation } from '@/hooks/use-animate-navigation';
import { useTimer } from '@/hooks/use-timer';
import { formatTimer } from '@/utils/format-timer';

export default function TimeRemaining({
  animateAndNavigate,
  selectedAnswer,
}: {
  animateAndNavigate: ReturnType<typeof useAnimateNavigation>['animateAndNavigate'];
  selectedAnswer: string;
}) {
  const timePerQuestion = useQuizStore((state) => state.timePerQuestion);
  const addToAnswers = useQuizStore((state) => state.addToAnswers);
  const [remainingTime, setRemainingTime] = useState(timePerQuestion);

  const { stop } = useTimer(() => {
    setRemainingTime((prev) => {
      if (prev <= 1) {
        return 0;
      }
      return prev - 1;
    });
  });

  useEffect(() => {
    if (remainingTime === 0) {
      const { currentIndex, questions, incrementCurrentIndex, addTenPoints } =
        useQuizStore.getState();
      stop();
      addToAnswers(selectedAnswer);
      if (selectedAnswer === questions[currentIndex].answer) {
        addTenPoints();
      }
      void animateAndNavigate(
        { opacity: 0, x: -100 },
        { type: 'tween', duration: 0.6, ease: 'easeInOut' },
        `/questions/${questions[currentIndex + 1]?.id}`,
        incrementCurrentIndex,
      );
    }
  }, [remainingTime, stop, animateAndNavigate, addToAnswers, selectedAnswer]);

  return (
    <p className="text-muted-foreground text-sm">Time Remaining: {formatTimer(remainingTime)}</p>
  );
}
