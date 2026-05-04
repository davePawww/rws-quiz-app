import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import Container from '@/components/layout/components/container';
import Content from '@/components/layout/components/content';
import Footer from '@/components/layout/components/footer';
import Header from '@/components/layout/components/header';
import { useThemeSync } from '@/hooks/use-theme-sync';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  useThemeSync();

  return (
    <>
      <Container>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Container>
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  );
}
