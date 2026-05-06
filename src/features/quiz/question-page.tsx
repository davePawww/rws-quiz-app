import { ArrowRight } from 'lucide-react';

import AnimatedDiv from '@/components/animated-div';
import { AnimatedButton } from '@/components/ui/button';
import { useQuizStore } from '@/features/quiz/quiz.store';
import { useAnimateNavigation } from '@/hooks/use-animate-navigation';

export default function QuestionPage() {
  const questions = useQuizStore((state) => state.questions);
  const currentIndex = useQuizStore((state) => state.currentIndex);
  const incrementCurrentIndex = useQuizStore((state) => state.incrementCurrentIndex);
  const { scope, animateAndNavigate } = useAnimateNavigation();

  const handleSubmit = async () => {
    await animateAndNavigate(
      { opacity: 0, x: -100 },
      { type: 'tween', duration: 0.6, ease: 'easeInOut' },
      `/questions/${questions[currentIndex + 1]?.id}`,
      incrementCurrentIndex,
    );
  };

  return (
    <AnimatedDiv ref={scope} className="space-y-8">
      <h4 className="scroll-m-20 text-center text-xl font-semibold tracking-tight">
        {questions[currentIndex].question}
      </h4>
      <div className="grid grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-none">
        {questions[currentIndex].choices.map((c) => (
          <Choice key={c} choice={c} />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-sm">
          Question {currentIndex + 1} of {questions.length}
        </p>
        <SubmitAnswerBtn onSubmit={() => void handleSubmit()} />
      </div>
    </AnimatedDiv>
  );
}

function Choice({ choice }: { choice: string }) {
  return (
    <AnimatedButton
      key={choice}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      variant="outline"
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="h-16"
    >
      {choice}
    </AnimatedButton>
  );
}

function SubmitAnswerBtn({ onSubmit }: { onSubmit: () => void }) {
  return (
    <AnimatedButton
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      onClick={onSubmit}
    >
      Submit <ArrowRight />
    </AnimatedButton>
  );
}
