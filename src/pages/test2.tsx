/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AboutUs,
  Advanteges,
  Banner,
  Blog,
  BlogCatalog,
  CardGrid,
  CardImageFive,
  Cases,
  ContactUsForm,
  ContactUsMap,
  DedicatedSoftware,
  Expections,
  Footer,
  GetStarted,
  Header,
  Hero,
  Industries,
  Info,
  MVP,
  ModelsSectionTemplate,
  OfferingsTemplate,
  OurFigures,
  OurProject,
  Questions,
  Specialist,
  Subscribe,
  Technologies,
  TechnologyStack,
  WhyCrocode,
} from '@/components/sections';

const textData = {
  title: 'Achieving Client Satisfaction and User Engagement',
  texts: [
    'Within two months of intensive work, the project was successfully completed. Overall, the appearance of the online store was much better when the new visual elements were added in the process of product card design optimization. The client was 100% satisfied with the result, and the user experience on their site evidently showed an improvement.',
    `This project makes a great example of how close cooperation with the client, flexibility in solving the problems that emerge, and an individual approach to every request make it possible to solve even the most complicated tasks successfully. Crocode has proven to be able to listen to the client's needs attentively and go the extra mile of their expectations with professionalism and expertise from its specialists.`,
  ],
};

const banner1 = {
  showModels: false,
  title: `Engage with Crocode's Front-End Development Services`,
  texts: [
    'Within two months of intensive work, the project was successfully completed. Overall, the appearance of the online store was much better when the new visual elements were added in the process of product card design optimization. The client was 100% satisfied with the result, and the user experience on their site evidently showed an improvement.',
    `This project makes a great example of how close cooperation with the client, flexibility in solving the problems that emerge, and an individual approach to every request make it possible to solve even the most complicated tasks successfully. Crocode has proven to be able to listen to the client's needs attentively and go the extra mile of their expectations with professionalism and expertise from its specialists.`,
  ],
};

const banner2 = {
  showModels: true,
  title: `About Crocode`,
  texts: [
    'Within two months of intensive work, the project was successfully completed. Overall, the appearance of the online store was much better when the new visual elements were added in the process of product card design optimization. The client was 100% satisfied with the result, and the user experience on their site evidently showed an improvement.',
    `This project makes a great example of how close cooperation with the client, flexibility in solving the problems that emerge, and an individual approach to every request make it possible to solve even the most complicated tasks successfully. Crocode has proven to be able to listen to the client's needs attentively and go the extra mile of their expectations with professionalism and expertise from its specialists.`,
  ],
};

const CARDS_1 = [
  {
    text: 'Designing targeted banners to reflect the unique needs of the Arcus Nation audience and its diverse product range.',
    number: '01',
    color: 'green',
  },
  {
    text: 'Implementing a greyish background for product images to highlight the products and simplify website navigation.',
    number: '02',
  },
  {
    text: 'Ensuring new visual elements are compatible across a wide range of devices and browsers through detailed coding adjustments',
    number: '03',
    color: 'green',
  },
  {
    text: 'Leveraging a mix of technologies including HTML, CSS, JavaScript, Shopify Liquid, and PHP for comprehensive frontend and backend development.',
    number: '04',
  },
  {
    text: 'Fostering close cooperation with the client to adapt to emerging challenges and refine the project according to feedback.',
    number: '05',
    color: 'black',
  },
];

const CARDS_2 = [
  {
    title: 'Deployment and Launch',
    text: `Once testing is complete, the project is ready for deployment. This phase involves setting up the project on the client's servers or the appropriate hosting environment. Thorough deployment procedures ensure a smooth transition from development to production.`,
    color: 'green',
  },
  {
    title: 'Project Planning',
    text: 'Based on the gathered requirements, our team develops a comprehensive project plan. This includes defining project scope, timelines, resources needed, technology stack, milestones, and potential risks.',
  },
  {
    title: 'Design and Architecture',
    text: `The design phase involves creating wireframes, prototypes, and user interface designs. For software development projects, the architectural design is crucial, outlining the software's structure, components, and technologies to be used. This phase ensures that both the visual and technical aspects are well thought out.`,
    color: 'green',
  },
  {
    title: 'Testing and Quality Assurance',
    text: 'We subject the software to rigorous testing to identify and rectify any bugs, glitches, or inconsistencies. This includes functional, performance, security, and usability testing to guarantee that the end product meets the highest standards of quality.',
  },
  {
    title: 'Deployment and Launch',
    text: `Once testing is complete, the project is ready for deployment. This phase involves setting up the project on the client's servers or the appropriate hosting environment. Thorough deployment procedures ensure a smooth transition from development to production.`,
    color: 'black',
  },
];

const CARD_IMG = {
  cards: [
    {
      src: '/image.png',
      alt: 'image',
    },
    {
      src: '/image.png',
      alt: 'image',
    },
    {
      src: '/image.png',
      alt: 'image',
    },
    {
      src: '/image.png',
      alt: 'image',
    },
    {
      src: '/image.png',
      alt: 'image',
    },
  ],
  info: [
    {
      title: 'Tech',
      description: 'HTML, CSS, JavaScript, Shopify Liquid, PHP',
    },
    {
      title: 'Duration',
      description: '2 Months',
    },
    {
      title: 'Industry',
      description: 'Bags shop',
    },
    {
      title: 'Service',
      description: 'Visual fixes',
    },
  ],
};

const CONTACT_US = {
  image: {
    src: '/image.png',
    alt: 'image',
  },
  form: {
    title: 'CONTACT US',
    inputs: [
      {
        name: 'name',
        type: 'text',
        label: 'Your name',
        placeholder: 'Enter your name',
      },
      {
        name: 'email',
        type: 'email',
        label: 'Corporate E-mail',
        placeholder: 'Enter E-mail',
      },
      {
        name: 'tel',
        type: 'tel',
        label: 'Phone number',
        placeholder: '+1',
      },
    ],
    file: [
      {
        name: 'textarea',
        type: 'textarea',
        label: 'Your comments',
        placeholder: 'Brief information about the project',
      },
      {
        name: 'file',
        type: 'file',
      },
    ],
    checkbox: {
      name: 'checkbox',
      type: 'checkbox',
      label: 'By sending this form I confirm that I have read and accept the ',
    },
  },
};

const Test = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Hero title={'crocode'} /> */}
      {/* <AboutUs /> */}
      {/* <Advanteges /> */}
      {/* <Info title={textData.title} texts={textData.texts} /> */}
      {/* <Banner title={banner1.title} /> */}
      {/* <Banner title={banner2.title} texts={banner2.texts} /> */}
      {/* <Blog /> */}
      {/* <BlogCatalog /> */}
      {/* <CardImageFive cards={CARD_IMG.cards} info={CARD_IMG.info} /> */}
      {/* <CardGrid
        title='The Arcus Nation Project: A Comprehensive Overview'
        cards={CARDS_1}
      /> */}
      {/* <CardGrid title='Our process' cards={CARDS_2} /> */}
      {/* <Cases /> */}
      {/* <ContactUsForm image={CONTACT_US.image} form={CONTACT_US.form} /> */}
      {/* <ContactUsMap /> */}
      <DedicatedSoftware />
      <Expections />
      {/* <Industries title={''} items={[]} /> */}
      {/* <GetStarted
        title={'Get started on your journey to digital transformation!'}
      /> */}
      {/* <ModelsSectionTemplate /> */}
      <MVP />
      {/* <OfferingsTemplate /> */}
      <OurFigures />
      {/* <OurProject /> */}
      <Questions />
      <Specialist />
      <Subscribe />
      {/* <Technologies /> */}
      <TechnologyStack />
      <WhyCrocode />
      {/* <Footer /> */}
    </>
  );
};

export default Test;
