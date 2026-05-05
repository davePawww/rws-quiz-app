import { createFileRoute } from '@tanstack/react-router';

import Welcome from '@/features/quiz/welcome';

export const Route = createFileRoute('/')({
  component: Welcome,
});
