import { ContactUsForm } from '@/components/sections';

import { emailRules, nameRules, telRules } from '@/utils/validation';

const CONTACT_US = {
  image: {
    src: '/image.png',
    alt: 'image',
  },
  form: {
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
        name: 'tel',
        type: 'tel',
        label: 'Phone number',
        placeholder: '+1',
        rules: telRules,
      },
    ],
    file: [
      {
        name: 'textarea',
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
      rules: nameRules,
    },
  },
};

const Test = () => {
  return <ContactUsForm image={CONTACT_US.image} form={CONTACT_US.form} />;
};

export default Test;
