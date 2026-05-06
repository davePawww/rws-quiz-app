import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { Toaster } from '@/components/ui/sonner';
import App from '@/features/app/app';

export const Route = createRootRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <App>
        <Outlet />
        <Toaster />
      </App>
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  );
}
