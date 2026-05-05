import { create } from 'zustand';

import type { QuizStore, Difficulty, Category } from '@/features/quiz/quiz.types';
import questionsJson from '@/questions.json';

export const useQuizStore = create<QuizStore>((set, get) => ({
  difficulty: '',
  category: '',
  questions: [],
  setDifficulty: (selectedDifficulty: Difficulty) => set({ difficulty: selectedDifficulty }),
  setCategory: (selectedCategory: Category) => set({ category: selectedCategory }),
  loadQuestions: () => {
    const { difficulty, category } = get();

    const filteredQuestions = questionsJson.categories
      .find((c) => category === c.id)
      ?.questions.filter((q) => q.difficulty === difficulty);

    set({ questions: filteredQuestions });
  },
}));
