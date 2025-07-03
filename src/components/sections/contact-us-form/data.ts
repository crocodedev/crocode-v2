import { TInput } from '@/types/types';
import {
  nameRules,
  emailRules,
  phoneRules,
  checkboxRules,
} from '@/utils/validation';

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
      name: 'name',
      type: 'text',
      label: 'Your name',
      placeholder: 'Enter your name',
      rules: nameRules,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Corporate E-mail',
      placeholder: 'Enter E-mail',
      rules: emailRules,
    },
    {
      name: 'phone',
      type: 'tel',
      label: 'Phone number',
      rules: phoneRules,
    },
  ],
  file: [
    {
      name: 'comments',
      type: 'textarea',
      label: 'Your comments',
      placeholder: 'Brief information about the project',
    },
    {
      name: 'file',
      type: 'file',
    },
  ],
  checkbox: {
    name: 'checkbox',
    type: 'checkbox',
    label: 'By sending this form I confirm that I have read and accept the ',
    rules: checkboxRules,
  },
};
