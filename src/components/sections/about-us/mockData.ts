type User = {
  name: string;
  avatarUrl: string;
  comment: string;
};

export const usersData: User[] = [
  {
    name: 'Анна Петрова',
    avatarUrl: '/avatars/anna.jpg',
    comment: 'Очень понравился сервис! Всё быстро, удобно и качественно.',
  },
  {
    name: 'Иван Смирнов',
    avatarUrl: '/avatars/ivan.jpg',
    comment: 'Поддержка на высоте! Решили мой вопрос за 5 минут.',
  },
  {
    name: 'Екатерина Орлова',
    avatarUrl: '/avatars/ekaterina.jpg',
    comment: 'Пользуюсь уже полгода — всё работает стабильно.',
  },
  {
    name: 'Дмитрий Кузнецов',
    avatarUrl: '/avatars/dmitry.jpg',
    comment: 'Удобный интерфейс и приятный дизайн.',
  },
  {
    name: 'Мария Белова',
    avatarUrl: '/avatars/maria.jpg',
    comment: 'Рекомендую всем друзьям — лучший опыт за последнее время!',
  },
  {
    name: 'Алексей Соколов',
    avatarUrl: '/avatars/alexey.jpg',
    comment: 'Поначалу сомневался, но теперь очень доволен.',
  },
];
