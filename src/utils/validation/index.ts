export const emailRules = {
  required: 'This field is required',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Invalid email',
  },
};

export const phoneRules = {
  required: 'This field is required',
  validate: (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    return cleaned.length >= 10 || 'The phone length cannot be less than 10';
  },
};

export const nameRules = {
  required: 'This field is required',
  pattern: {
    value: /^[A-Za-zА-Яа-яЁё]{3,}$/,
    message: 'Invalid Name',
  },
};

export const checkboxRules = {
  required: {
    value: true,
    message: 'You must agree to proceed',
  },
};
