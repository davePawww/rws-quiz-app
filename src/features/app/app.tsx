import Container from '@/components/layout/components/container';
import Content from '@/components/layout/components/content';
import Footer from '@/components/layout/components/footer';
import Header from '@/components/layout/components/header';
import { useThemeSync } from '@/hooks/use-theme-sync';
import type { ChildrenWrapperProps } from '@/types/common.types';

export default function App({ children }: ChildrenWrapperProps) {
  useThemeSync();

  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}
