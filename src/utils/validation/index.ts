export const emailRules = {
  required: 'This field is required',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Invalid email',
  },
};

export const telRules = {
  required: 'This field is required',
  pattern: {
    value: /^\+?[0-9\s\-()]{10,}$/,
    message: 'Invalid Phone number',
  },
};

export const nameRules = {
  required: 'This field is required',
  pattern: {
    value: /^[A-Za-zА-Яа-яЁё]{3,}$/,
    message: 'Invalid Name',
  },
};
