type TData = {
  title: string;
  items: {
    id: string;
    text: string;
  }[];
};

export const DATA: TData = {
  title: 'CZEGO MOŻESZ SIĘ SPODZIEWAĆ',
  items: [
    {
      id: '01',
      text: 'Rozwój, testowanie, wydanie i wsparcie Twojego produktu. Modernizacja architektury. Tworzenie aplikacji w chmurze (Cloud Native) i opartych na mikrousługach (Microservices).',
    },
    {
      id: '02',
      text: 'Na bieżąco śledzimy trendy w rozwoju i doskonalimy nasze umiejętności. Dzięki temu nad Twoim projektem będą pracować profesjonaliści z potwierdzonym doświadczeniem.',
    },
    {
      id: '03',
      text: 'Strategiczne podejście oparte na wskaźnikach pozwala zobaczyć rzeczywiste rezultaty w liczbach.',
    },
  ],
};
