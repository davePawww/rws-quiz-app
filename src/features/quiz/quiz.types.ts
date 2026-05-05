export type Difficulty = 'easy' | 'medium' | 'hard' | '';
export type Category = 'javascript' | 'react' | 'nodejs' | '';

export type QuizStore = {
  difficulty: Difficulty;
  category: Category;
  setDifficulty: (selectedDifficulty: Difficulty) => void;
  setCategory: (selectedCategory: Category) => void;
};
