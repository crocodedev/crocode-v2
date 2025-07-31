type User = {
  name: string;
  avatarUrl: string;
  comment: string;
};

export const usersData: User[] = [
  {
    name: 'Anna Nowak',
    avatarUrl: '/avatars/anna.jpg',
    comment:
      'Bardzo podobał mi się serwis! Wszystko szybko, wygodnie i wysokiej jakości.',
  },
  {
    name: 'Jan Kowalski',
    avatarUrl: '/avatars/ivan.jpg',
    comment:
      'Wsparcie na najwyższym poziomie! Rozwiązali mój problem w 5 minut.',
  },
  {
    name: 'Katarzyna Wiśniewska',
    avatarUrl: '/avatars/ekaterina.jpg',
    comment: 'Korzystam już od pół roku - wszystko działa stabilnie.',
  },
  {
    name: 'Marek Lewandowski',
    avatarUrl: '/avatars/dmitry.jpg',
    comment: 'Przyjazny interfejs i ładny design.',
  },
  {
    name: 'Agnieszka Wojciechowska',
    avatarUrl: '/avatars/maria.jpg',
    comment: 'Polecam wszystkim znajomym - najlepsze doświadczenie od dawna!',
  },
  {
    name: 'Piotr Dąbrowski',
    avatarUrl: '/avatars/alexey.jpg',
    comment:
      'Początkowo miałem wątpliwości, ale teraz jestem bardzo zadowolony.',
  },
];
