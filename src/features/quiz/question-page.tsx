import { useLocation } from '@tanstack/react-router';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';

import AnimatedDiv from '@/components/animated-div';
import { Choice } from '@/features/quiz/choice';
import { useQuizStore } from '@/features/quiz/quiz.store';
import { SubmitAnswerBtn } from '@/features/quiz/submit-asnwer-btn';
import TimeRemaining from '@/features/quiz/time-remaining';
import { useAnimateNavigation } from '@/hooks/use-animate-navigation';

export default function QuestionPage() {
  const { pathname } = useLocation();
  const questions = useQuizStore((state) => state.questions);
  const currentIndex = useQuizStore((state) => state.currentIndex);
  const incrementCurrentIndex = useQuizStore((state) => state.incrementCurrentIndex);
  const { scope, animateAndNavigate } = useAnimateNavigation();
  const addToAnswers = useQuizStore((state) => state.addToAnswers);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const addTenPoints = useQuizStore((state) => state.addTenPoints);
  const score = useQuizStore((state) => state.score);

  const handleSubmit = () => {
    addToAnswers(selectedAnswer);
    if (selectedAnswer === questions[currentIndex].answer) {
      addTenPoints();
    }
    if (currentIndex + 1 === questions.length) {
      return void animateAndNavigate(
        { opacity: 0, x: -100 },
        { type: 'tween', duration: 0.6, ease: 'easeInOut' },
        `/results`,
      );
    } else {
      void animateAndNavigate(
        { opacity: 0, x: -100 },
        { type: 'tween', duration: 0.6, ease: 'easeInOut' },
        `/questions/${questions[currentIndex + 1]?.id}`,
        incrementCurrentIndex,
      );
    }
  };

  return (
    <AnimatePresence key={pathname}>
      <AnimatedDiv ref={scope} className="space-y-8">
        <div className="flex items-center justify-between">
          <TimeRemaining animateAndNavigate={animateAndNavigate} selectedAnswer={selectedAnswer} />
          <p className="text-muted-foreground text-sm">Score: {score}</p>
        </div>
        <h4 className="scroll-m-20 text-center text-xl font-semibold tracking-tight">
          {questions[currentIndex].question}
        </h4>
        <div className="grid grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-none">
          {questions[currentIndex].choices.map((c) => (
            <Choice
              key={c}
              choice={c}
              selectedAnswer={selectedAnswer}
              onClick={() => setSelectedAnswer(c)}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-sm">
            Question {currentIndex + 1} of {questions.length}
          </p>
          <SubmitAnswerBtn onSubmit={handleSubmit} />
        </div>
      </AnimatedDiv>
    </AnimatePresence>
  );
}
