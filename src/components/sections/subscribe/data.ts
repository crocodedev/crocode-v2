import { TInput } from '@/types/Input';

import { emailRules } from '@/utils/validation';

type TData = {
  title: string;
  background: {
    src: string;
    alt: string;
  };
  input: TInput;
  button: string;
};

export const data: TData = {
  title: 'Zapisz się do naszego bloga',
  background: {
    src: '/images/background.jpg',
    alt: 'tło',
  },
  input: {
    name: 'email',
    type: 'email',
    label: 'E-mail firmowy',
    placeholder: 'Wprowadź e-mail',
    rules: emailRules,
  },
  button: 'Subskrybować',
};
