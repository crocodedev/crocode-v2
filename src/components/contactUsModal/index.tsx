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
    isShow: true,
    form: {
      title: 'get in touch with us',
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
      ],
      message: {
        text: 'By leaving your data you agree to the',
      },
      link: {
        href: '/',
        text: 'Privacy Policy',
      },
    },
  };

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <PopupContactUs isShow={POPUP.isShow} form={POPUP.form} />
    </Portal>
  ) : null;
};

export default ContactUSModal;
