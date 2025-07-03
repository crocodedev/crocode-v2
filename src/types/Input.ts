import { RegisterOptions } from 'react-hook-form';

export type TInput = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  rules?: RegisterOptions;
};
