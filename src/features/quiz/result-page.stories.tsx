import type { Meta, StoryObj } from '@storybook/react-vite';

import { useQuizStore } from '@/features/quiz/quiz.store';
import ResultPage from '@/features/quiz/result-page';

const mockQuestions = [
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is the capital of France?',
    choices: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    id: 2,
    difficulty: 'medium',
    question: 'What is the largest planet in our solar system?',
    choices: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Jupiter',
  },
];

const mockAnswers = ['Paris', 'Mars'];

const meta = {
  title: 'Quiz/ResultPage',
  component: ResultPage,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      useQuizStore.setState({
        questions: mockQuestions,
        answers: mockAnswers,
        score: 10,
      });

      return <Story />;
    },
  ],
} satisfies Meta<typeof ResultPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
