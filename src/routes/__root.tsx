import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { AnimatePresence } from 'motion/react';

import { Toaster } from '@/components/ui/sonner';
import App from '@/features/app/app';

export const Route = createRootRoute({
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();

  return (
    <>
      <App>
        <AnimatePresence mode="wait" key={location.pathname}>
          <Outlet />
        </AnimatePresence>
        <Toaster />
      </App>
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  );
}
