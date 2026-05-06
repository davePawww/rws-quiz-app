import { act, renderHook } from '@testing-library/react';
import type { Transition } from 'motion/react';
import { toast } from 'sonner';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { useAnimateNavigation } from '@/hooks/use-animate-navigation';

// --- Mocks ---
const mockNavigate = vi.fn();
vi.mock('@tanstack/react-router', () => ({
  useNavigate: () => mockNavigate,
}));

const mockAnimate = vi.fn();
const mockScope = { current: document.createElement('div') };
vi.mock('motion/react', () => ({
  useAnimate: () => [mockScope, mockAnimate],
}));

vi.mock('sonner', () => ({
  toast: { error: vi.fn() },
}));

// --- Tests ---
const path = '/difficulty';
const exitAnimation = { opacity: 0, x: -100 };
const transition: Transition = { duration: 0.6, ease: 'anticipate' };

describe('useAnimateNavigation', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    mockScope.current = document.createElement('div'); // restore between tests
    mockAnimate.mockResolvedValue(undefined);
    mockNavigate.mockResolvedValue(undefined);
  });

  it('returns scope and animateAndNavigate function', () => {
    const { result } = renderHook(() => useAnimateNavigation());

    expect(result.current.scope).toBe(mockScope);
    expect(typeof result.current.animateAndNavigate).toBe('function');
  });

  it('does nothing when scope.current is null', async () => {
    mockScope.current = null!;

    const { result } = renderHook(() => useAnimateNavigation());
    await act(() => result.current.animateAndNavigate(exitAnimation, transition, path));

    expect(mockAnimate).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('animates then navigates to the given path on success', async () => {
    const { result } = renderHook(() => useAnimateNavigation());
    await act(() => result.current.animateAndNavigate(exitAnimation, transition, path));

    expect(mockAnimate).toHaveBeenCalledWith(mockScope.current, exitAnimation, transition);
    expect(mockNavigate).toHaveBeenCalledWith({ to: path });
    expect(toast.error).not.toHaveBeenCalled();
  });

  it('shows toast and navigates to / when animate throws', async () => {
    mockAnimate.mockRejectedValue(new Error('animation failed'));

    const { result } = renderHook(() => useAnimateNavigation());
    await act(() => result.current.animateAndNavigate(exitAnimation, transition, path));

    expect(toast.error).toHaveBeenCalledWith('There was an issue with the animation or navigation');
    expect(mockNavigate).toHaveBeenCalledWith({ to: '/' });
  });

  it('shows toast and navigates to / when navigate throws', async () => {
    mockNavigate.mockRejectedValueOnce(new Error('navigation failed'));

    const { result } = renderHook(() => useAnimateNavigation());
    await act(() => result.current.animateAndNavigate(exitAnimation, transition, path));

    expect(toast.error).toHaveBeenCalledWith('There was an issue with the animation or navigation');
    expect(mockNavigate).toHaveBeenCalledWith({ to: '/' });
  });
});
