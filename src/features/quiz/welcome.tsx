import AnimatedDiv from '@/components/animated-div';
import { AnimatedButton } from '@/components/ui/button';
import { useAnimateNavigation } from '@/features/quiz/use-animate-navigation';

export default function Welcome() {
  const { scope, animateAndNavigate } = useAnimateNavigation(
    '/difficulty',
    { opacity: 0, x: -100 },
    { duration: 0.8, ease: 'anticipate' },
  );

  return (
    <AnimatedDiv ref={scope} className="max-w-sm md:max-w-md">
      <h4 className="scroll-m-20 text-center text-xl font-semibold tracking-tight">
        Welcome to the Quiz Arena 📝
      </h4>
      <p className="text-muted-foreground mt-1 text-center text-sm font-medium md:max-w-sm">
        Where knowledge meets its match. Choose wisely, answer quickly, and try not to panic.
      </p>
      <AnimatedButton className="mx-auto mt-6 block" onClick={() => void animateAndNavigate()}>
        Start the Quiz!
      </AnimatedButton>
    </AnimatedDiv>
  );
}
