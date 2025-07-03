type User = {
  id: number;
  name: string;
  avatarUrl: string;
  comment: string;
};

export const usersData: User[] = [
  {
    id: 1,
    name: 'Анна Петрова',
    avatarUrl: '/avatars/anna.jpg',
    comment: 'Очень понравился сервис! Всё быстро, удобно и качественно.',
  },
  {
    id: 2,
    name: 'Иван Смирнов',
    avatarUrl: '/avatars/ivan.jpg',
    comment: 'Поддержка на высоте! Решили мой вопрос за 5 минут.',
  },
  {
    id: 3,
    name: 'Екатерина Орлова',
    avatarUrl: '/avatars/ekaterina.jpg',
    comment: 'Пользуюсь уже полгода — всё работает стабильно.',
  },
  {
    id: 4,
    name: 'Дмитрий Кузнецов',
    avatarUrl: '/avatars/dmitry.jpg',
    comment: 'Удобный интерфейс и приятный дизайн.',
  },
  {
    id: 5,
    name: 'Мария Белова',
    avatarUrl: '/avatars/maria.jpg',
    comment: 'Рекомендую всем друзьям — лучший опыт за последнее время!',
  },
  {
    id: 6,
    name: 'Алексей Соколов',
    avatarUrl: '/avatars/alexey.jpg',
    comment: 'Поначалу сомневался, но теперь очень доволен.',
  },
];
