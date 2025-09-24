export const emailRules = {
  required: 'To pole jest wymagane',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Nieprawidłowy adres e-mail',
  },
};

export const phoneRules = {
  required: 'To pole jest wymagane',
  validate: (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    return (
      cleaned.length >= 10 || 'Numer telefonu musi mieć co najmniej 10 cyfr'
    );
  },
};

export const nameRules = {
  required: 'To pole jest wymagane',
  pattern: {
    value: /^[A-Za-zА-Яа-яЁё]{3,}$/,
    message: 'Nieprawidłowe imię',
  },
};

export const checkboxRules = {
  required: {
    value: true,
    message: 'Musisz wyrazić zgodę, aby kontynuować',
  },
};
