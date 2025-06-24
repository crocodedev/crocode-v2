import { TInput } from '@/types/Input';
import { emailRules } from '@/utils/validation';

type TData = {
  title: string;
  background: {
    src: string;
    alt: string;
  };
  input: TInput;
};

export const data: TData = {
  title: 'Subscribe to our blog',
  background: {
    src: '/images/background.jpg',
    alt: 'background',
  },
  input: {
    name: 'email',
    type: 'email',
    label: 'Corporate E-mail',
    placeholder: 'Enter E-mail',
    rules: emailRules,
  },
};
