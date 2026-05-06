import type { Meta, StoryObj } from '@storybook/react-vite';

import QuestionPage from '@/features/quiz/question-page';
import { useQuizStore } from '@/features/quiz/quiz.store';

const mockQuestions = [
  {
    id: 58,
    difficulty: 'hard',
    question: 'What does useImperativeHandle customize?',
    choices: ['Props', 'Ref exposure', 'Memoization', 'Effects'],
    answer: 'Ref exposure',
  },
  {
    id: 59,
    difficulty: 'hard',
    question: 'What is code splitting used for?',
    choices: ['Reducing bundle size', 'Splitting CSS', 'Writing components', 'Managing props'],
    answer: 'Reducing bundle size',
  },
  {
    id: 60,
    difficulty: 'hard',
    question: 'What does lazy() do in React?',
    choices: [
      'Creates routes',
      'Loads components dynamically',
      'Caches state',
      'Prevents re-renders',
    ],
    answer: 'Loads components dynamically',
  },
];

const meta = {
  title: 'Quiz/Question Page',
  component: QuestionPage,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      useQuizStore.setState({
        questions: mockQuestions,
        currentIndex: 0,
      });
      return <Story />;
    },
  ],
} satisfies Meta<typeof QuestionPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
