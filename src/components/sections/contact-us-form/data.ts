import { TInput } from '@/types/types';

import {
  checkboxRules,
  emailRules,
  nameRules,
  phoneRules,
} from '@/utils/validation';

type TForm = {
  title: string;
  inputs: TInput[];
  checkbox: TInput;
  file: TInput[];
};

export const form: TForm = {
  title: 'SKONTAKTUJ SIĘ Z NAMI',
  inputs: [
    {
      name: 'name',
      type: 'text',
      label: 'Twoje imię',
      placeholder: 'Wprowadź swoje imię',
      rules: nameRules,
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-mail firmowy',
      placeholder: 'Wprowadź e-mail',
      rules: emailRules,
    },
    {
      name: 'phone',
      type: 'tel',
      label: 'Numer telefonu',
      rules: phoneRules,
    },
  ],
  file: [
    {
      name: 'comments',
      type: 'textarea',
      label: 'Twoje uwagi',
      placeholder: 'Krótkie informacje o projekcie',
    },
    {
      name: 'file',
      type: 'file',
    },
  ],
  checkbox: {
    name: 'checkbox',
    type: 'checkbox',
    label: 'Wysyłając ten formularz, potwierdzam że zapoznałem/am się z ',
    rules: checkboxRules,
  },
};
