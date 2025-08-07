import { useEffect, useState } from 'react';

import { emailRules, nameRules } from '../../utils/validation';
import Portal, { createContainer } from '../portal';
import { PopupContactUs } from '../sections';

const MODAL_CONTAINER_ID = 'contactUs';

const ContactUSModal = () => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  const POPUP = {
    form: {
      title: 'Skontaktuj się z nami',
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
      ],
      message: {
        text: 'Przesyłając dane, wyrażasz zgodę na',
      },
      link: {
        href: '/',
        text: 'Politykę Prywatności',
      },
    },
  };

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <PopupContactUs form={POPUP.form} />
    </Portal>
  ) : null;
};

export default ContactUSModal;
