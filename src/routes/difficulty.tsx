import { createFileRoute } from '@tanstack/react-router';

import AnimatedDiv from '@/components/animated-div';
import { useAnimateNavigation } from '@/features/quiz/use-animate-navigation';

export const Route = createFileRoute('/difficulty')({
  component: RouteComponent,
});

function RouteComponent() {
  const { scope } = useAnimateNavigation(
    '/difficulty',
    { opacity: 0, x: -100 },
    { duration: 0.6, ease: 'anticipate' },
  );

  return (
    <AnimatedDiv ref={scope} className="max-w-sm md:max-w-md">
      animated div
    </AnimatedDiv>
  );
}
