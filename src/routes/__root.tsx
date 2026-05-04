import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import App from '@/features/app/app';

export const Route = createRootRoute({
  component: () => (
    <>
      <App>
        <Outlet />
      </App>
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  ),
});
