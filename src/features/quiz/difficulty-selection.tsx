import AnimatedDiv from '@/components/animated-div';
import { AnimatedButton } from '@/components/ui/button';
import { useQuizStore } from '@/features/quiz/quiz.store';
import type { Difficulty } from '@/features/quiz/quiz.types';
import { useAnimateNavigation } from '@/hooks/use-animate-navigation';

const difficulties = [
  {
    label: 'Easy',
    value: 'easy',
  },
  {
    label: 'Medium',
    value: 'medium',
  },
  {
    label: 'Hard',
    value: 'hard',
  },
] as const;

export default function DifficultySelection() {
  const { setDifficulty } = useQuizStore.getState();
  const { scope, animateAndNavigate } = useAnimateNavigation(
    '/category',
    { opacity: 0, x: -100 },
    { type: 'tween', duration: 0.6, ease: 'easeInOut' },
  );

  const handleSelectDifficulty = async (difficulty: Difficulty) => {
    setDifficulty(difficulty);
    await animateAndNavigate();
  };

  return (
    <AnimatedDiv ref={scope} className="max-w-sm space-y-4 md:max-w-md">
      <h4 className="scroll-m-20 text-center text-xl font-semibold tracking-tight">
        Select your difficulty
      </h4>
      <div className="flex flex-col items-center gap-2 md:flex-row">
        {difficulties.map(({ label, value }) => (
          <AnimatedButton
            key={value}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            variant="outline"
            className="h-20 w-36"
            onClick={() => void handleSelectDifficulty(value)}
          >
            {label}
          </AnimatedButton>
        ))}
      </div>
    </AnimatedDiv>
  );
}
