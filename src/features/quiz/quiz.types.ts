export type Difficulty = 'easy' | 'medium' | 'hard' | '';

export type QuizStore = {
  difficulty: Difficulty;
  setDifficulty: (selectedDifficulty: Difficulty) => void;
};
