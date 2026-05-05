import { create } from 'zustand';

import type { QuizStore, Difficulty } from './quiz.types';

export const useQuizStore = create<QuizStore>((set) => ({
  difficulty: '',
  setDifficulty: (selectedDifficulty: Difficulty) => set({ difficulty: selectedDifficulty }),
}));
