import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

export function useTimer(callback: () => void, delay: number = 1000) {
  const callbackRef = useRef(callback);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  // keep the callback updated
  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    timerRef.current = setInterval(() => callbackRef.current(), delay);
    return () => clearInterval(timerRef.current);
  }, [delay]);

  const stop = useCallback(() => clearInterval(timerRef.current), []);

  return { stop };
}
