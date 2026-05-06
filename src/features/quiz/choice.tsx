import { memo } from 'react';

import { AnimatedButton } from '@/components/ui/button';

export const Choice = memo(function Choice({
  choice,
  selectedAnswer,
  onClick,
}: {
  choice: string;
  selectedAnswer: string;
  onClick: () => void;
}) {
  return (
    <AnimatedButton
      key={choice}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      variant={selectedAnswer === choice ? 'secondary' : 'outline'}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="h-16"
      onClick={onClick}
    >
      {choice}
    </AnimatedButton>
  );
});
