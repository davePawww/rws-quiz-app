import { FaJs, FaNodeJs, FaReact } from 'react-icons/fa';

import AnimatedDiv from '@/components/animated-div';
import { AnimatedButton } from '@/components/ui/button';
import { useQuizStore } from '@/features/quiz/quiz.store';
import type { Category } from '@/features/quiz/quiz.types';
import { useAnimateNavigation } from '@/hooks/use-animate-navigation';

const categories = [
  {
    label: 'JavaScript',
    value: 'javascript',
    icon: FaJs,
  },
  {
    label: 'React',
    value: 'react',
    icon: FaReact,
  },
  {
    label: 'NodeJS',
    value: 'nodejs',
    icon: FaNodeJs,
  },
] as const;

export default function CategorySelection() {
  const { setCategory } = useQuizStore.getState();
  const { scope, animateAndNavigate } = useAnimateNavigation(
    '/questions',
    { opacity: 0, x: -100 },
    { type: 'tween', duration: 0.6, ease: 'easeInOut' },
  );

  const handleSelectCategory = async (category: Category) => {
    setCategory(category);
    await animateAndNavigate();
  };

  return (
    <AnimatedDiv ref={scope} className="max-w-sm space-y-4 md:max-w-md">
      <h4 className="scroll-m-20 text-center text-xl font-semibold tracking-tight">
        Select your category
      </h4>
      <div className="flex flex-col items-center gap-2 md:flex-row">
        {categories.map(({ label, value, icon: Icon }) => (
          <AnimatedButton
            key={value}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            variant="outline"
            className="h-20 w-36"
            onClick={() => void handleSelectCategory(value)}
          >
            <Icon size="22" /> {label}
          </AnimatedButton>
        ))}
      </div>
    </AnimatedDiv>
  );
}
