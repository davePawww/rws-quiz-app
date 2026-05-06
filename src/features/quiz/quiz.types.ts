export type Difficulty = 'easy' | 'medium' | 'hard' | '';
export type Category = 'javascript' | 'react' | 'nodejs' | '';
export type Question = {
  id: number;
  difficulty: string;
  question: string;
  choices: string[];
  answer: string;
};

export type QuizStore = {
  difficulty: Difficulty;
  category: Category;
  questions: Question[];
  currentIndex: number;
  setDifficulty: (selectedDifficulty: Difficulty) => void;
  setCategory: (selectedCategory: Category) => void;
  loadQuestions: () => void;
  incrementCurrentIndex: () => void;
};
