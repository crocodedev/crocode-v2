import {
  AboutUs,
  CardGrid,
  CardImageFive,
  ContactUsForm,
  Hero,
  Info,
} from '@/components/sections';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: 'ARCUS',
  },
  banner: {
    title: `Engage with Crocode's Front-End Development Services`,
    showModels: false,
    image: {
      src: '/images/background.jpg',
      alt: 'background',
    },
  },
  cardGrid: {
    title: 'The Arcus Nation Project: A Comprehensive Overview',
    cards: [
      {
        text: `Designing targeted banners to reflect the unique needs of the Arcus Nation audience and its diverse product range.`,
        color: 'green',
        number: '01',
      },
      {
        text: `Implementing a greyish background for product images to highlight the products and simplify website navigation.`,
        number: '02',
      },
      {
        text: `Ensuring new visual elements are compatible across a wide range of devices and browsers through detailed coding adjustments`,
        color: 'green',
        number: '04',
      },
      {
        text: `Leveraging a mix of technologies including HTML, CSS, JavaScript, Shopify Liquid, and PHP for comprehensive frontend and backend development.`,
        number: '03',
      },
      {
        text: `Fostering close cooperation with the client to adapt to emerging challenges and refine the project according to feedback.`,
        color: 'black',
        number: '05',
      },
    ],
  },
  info1: {
    title: `Navigating Technical Challenges for a Seamless User Experience`,
    texts: [
      `During the project, the team encountered several technical difficulties. Probably the trickiest thing was to make sure that the new visual elements were really
      perfectly in place on every, even most exotic, possible device and browser, which required even some fine-tuning of the code and really pushing its limits. The
      technology entails the use of HTML, CSS, JavaScript for frontend development, and the store theme customization is Shopify Liquid, with PHP for backend
      development.`,
    ],
  },
  info2: {
    title: `Achieving Client Satisfaction and User Engagement`,
    texts: [
      `Within two months of intensive work, the project was successfully completed. Overall, the appearance of the online store was much better when the new visual
      elements were added in the process of product card design optimization. The client was 100% satisfied with the result, and the user experience on their site evidently showed an improvement.`,
      `This project makes a great example of how close cooperation with the client, flexibility in solving the problems that emerge, and an individual approach to every
      request make it possible to solve even the most complicated tasks successfully. Crocode has proven to be able to listen to the client's needs attentively and go the
      extra mile of their expectations with professionalism and expertise from its specialists.`,
    ],
  },
};

const ArcusPage = () => {
  return (
    <>
      <Hero {...PROPS_SECTIONS.hero} />
      <CardImageFive />
      <CardGrid {...PROPS_SECTIONS.cardGrid} />
      <Info {...PROPS_SECTIONS.info1} />
      <Info {...PROPS_SECTIONS.info2} />
      <AboutUs />
      <ContactUsForm />
    </>
  );
};

export default ArcusPage;
