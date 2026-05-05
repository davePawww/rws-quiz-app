import { useNavigate } from '@tanstack/react-router';
import { useAnimate, type Transition } from 'motion/react';
import { useCallback } from 'react';
import { toast } from 'sonner';

export const useAnimateNavigation = (
  path: string,
  exitAnimation: { opacity: number; x: number },
  transition: Transition,
) => {
  const [scope, animate] = useAnimate();
  const navigate = useNavigate();

  const animateAndNavigate = useCallback(async () => {
    if (!scope.current) return;
    try {
      await animate(scope.current, exitAnimation, transition);
      await navigate({ to: path });
    } catch (err) {
      toast.error('There was an issue with the animation or navigation');
      console.error(err);
      await navigate({ to: '/' });
    }
  }, [path, exitAnimation, transition, animate, navigate, scope]);
  return { scope, animateAndNavigate };
};
