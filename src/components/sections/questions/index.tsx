import { SectionLayout } from '@/components/sections/layout';
import { Title } from '@/components/ui';

import styles from './styles.module.scss';

const QUESTIONS = [
  { text: 'What does the cost consist of?', answer: 'Tralalero tralala' },
  {
    text: 'What models of cooperation do you have?',
    answer: 'Tralalero tralala',
  },
  {
    text: 'How is the work organized in the Crocode Team?',
    answer: 'Tralalero tralala',
  },
  {
    text: 'What service do I need?',
    answer: 'Tralalero tralala',
  },
  {
    text: 'What will I get as a result?',
    answer: 'Tralalero tralala',
  },
  {
    text: 'What the sages of work?',
    answer: 'Tralalero tralala',
  },
  {
    text: 'I don`t have the documentation ready. What to do?',
    answer: 'Tralalero tralala',
  },
  {
    text: 'How do you ensure the quality of your work?',
    answer: 'Tralalero tralala',
  },
];

export const QuestionsSection = () => {
  return (
    <SectionLayout>
      <Title text='QUESTIONS' anchor='right' />
      <div className={styles.container}>
        {QUESTIONS.map((question) => (
          <div className={styles.question} key={question.text}>
            <h2 className={styles.question__title}>{question.text}</h2>
            <p className={styles.question__answer}>{question.answer}</p>
            <p>+</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
