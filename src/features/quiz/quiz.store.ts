import { create } from 'zustand';

import type { QuizStore, Difficulty, Category } from '@/features/quiz/quiz.types';

export const useQuizStore = create<QuizStore>((set) => ({
  difficulty: '',
  category: '',
  setDifficulty: (selectedDifficulty: Difficulty) => set({ difficulty: selectedDifficulty }),
  setCategory: (selectedCategory: Category) => set({ category: selectedCategory }),
}));
