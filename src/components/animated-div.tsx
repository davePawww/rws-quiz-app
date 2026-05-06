import { motion, type HTMLMotionProps } from 'motion/react';

import { cn } from '@/lib/utils';

export default function AnimatedDiv({
  children,
  ref,
  className,
  ...props
}: HTMLMotionProps<'div'>) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'tween', duration: 0.5, ease: 'circOut' }}
      className={cn(className)}
      style={{ willChange: 'transform, opacity' }} // ← offload to GPU
      {...props}
    >
      {children}
    </motion.div>
  );
}
