type TData = {
  title: string;
  items: {
    id: string;
    title: string;
    text: string;
  }[];
};

export const DATA: TData = {
  title: 'Jakich specjalistów potrzebujesz do stworzenia gry?',
  items: [
    {
      id: '01',
      title: 'Programiści',
      text: 'W tym programista gameplayu, programista gier, programista UI, programista back-end, programista animacji i inni',
    },
    {
      id: '02',
      title: 'Projektant gier',
      text: 'Mówiąc krótko, są to osoby pracujące z grafiką 3D i wizualną stroną gier. To od nich zależy, w jaki sposób gracz postrzega postaci i środowisko gry',
    },
    {
      id: '03',
      title: 'Artyści',
      text: 'Ci specjaliści odpowiadają za rozwój całego świata gry: od postaci i fabuły po tekstury i dźwięk. Ich celem jest stworzenie atrakcyjnego produktu dla odbiorców',
    },
  ],
};
