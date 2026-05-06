import { create } from 'zustand';

import type { QuizStore, Difficulty, Category } from '@/features/quiz/quiz.types';
import questionsJson from '@/questions.json';

export const useQuizStore = create<QuizStore>((set, get) => ({
  difficulty: '',
  category: '',
  questions: [],
  currentIndex: 0,
  timePerQuestion: 0,
  answers: [],
  score: 0,
  setDifficulty: (selectedDifficulty: Difficulty) => {
    const timer = selectedDifficulty === 'easy' ? 30 : selectedDifficulty === 'medium' ? 45 : 60;
    set({ difficulty: selectedDifficulty, timePerQuestion: timer });
  },
  setCategory: (selectedCategory: Category) => set({ category: selectedCategory }),
  loadQuestions: () => {
    const { difficulty, category } = get();
    const filteredQuestions = questionsJson.categories
      .find((c) => category === c.id)
      ?.questions.filter((q) => q.difficulty === difficulty);

    set({ questions: filteredQuestions });
  },
  incrementCurrentIndex: () => set((state) => ({ currentIndex: state.currentIndex + 1 })),
  addToAnswers: (answer: string) => set((state) => ({ answers: [answer, ...state.answers] })),
  addTenPoints: () => set((state) => ({ score: state.score + 10 })),
}));
