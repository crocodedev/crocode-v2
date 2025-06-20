import { TInput } from '@/types/types';

type TForm = {
  title: string;
  inputs: TInput[];
  checkbox: TInput;
  file: TInput[];
};

export const form: TForm = {
  title: 'CONTACT US',
  inputs: [
    {
      type: 'text',
      label: 'Your name',
      placeholder: 'Enter your name',
    },
    {
      type: 'email',
      label: 'Corporate E-mail',
      placeholder: 'Enter E-mail',
    },
    {
      type: 'tel',
      label: 'Phone number',
      placeholder: '+1',
    },
  ],
  file: [
    {
      type: 'textarea',
      label: 'Your comments',
      placeholder: 'Brief information about the project',
    },
    {
      type: 'file',
    },
  ],
  checkbox: {
    type: 'checkbox',
    label: 'By sending this form I confirm that I have read and accept the ',
  },
};
