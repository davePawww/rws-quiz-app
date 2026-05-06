import { ArrowRight } from 'lucide-react';
import { memo } from 'react';

import { AnimatedButton } from '@/components/ui/button';

export const SubmitAnswerBtn = memo(function SubmitAnswerBtn({
  onSubmit,
}: {
  onSubmit: () => void;
}) {
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
});
