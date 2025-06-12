import { Banner, GetStarted, Info } from '@/components/sections';

const textData = {
  title: 'Achieving Client Satisfaction and User Engagement',
  texts: [
    'Within two months of intensive work, the project was successfully completed. Overall, the appearance of the online store was much better when the new visual elements were added in the process of product card design optimization. The client was 100% satisfied with the result, and the user experience on their site evidently showed an improvement.',
    `This project makes a great example of how close cooperation with the client, flexibility in solving the problems that emerge, and an individual approach to every request make it possible to solve even the most complicated tasks successfully. Crocode has proven to be able to listen to the client's needs attentively and go the extra mile of their expectations with professionalism and expertise from its specialists.`,
  ],
};

const banner = {
  showModels: true,
  title: `Engage with Crocode's Front-End Development Services`,
  texts: [
    'Within two months of intensive work, the project was successfully completed. Overall, the appearance of the online store was much better when the new visual elements were added in the process of product card design optimization. The client was 100% satisfied with the result, and the user experience on their site evidently showed an improvement.',
    `This project makes a great example of how close cooperation with the client, flexibility in solving the problems that emerge, and an individual approach to every request make it possible to solve even the most complicated tasks successfully. Crocode has proven to be able to listen to the client's needs attentively and go the extra mile of their expectations with professionalism and expertise from its specialists.`,
  ],
};

const Test = () => {
  return (
    <>
      <Info title={textData.title} texts={textData.texts} />
      <Banner
        title={banner.title}
        showModels={banner.showModels}
        // texts={banner.texts}
      />
      <GetStarted
        title={'Get started on your journey to digital transformation!'}
      />
    </>
  );
};

export default Test;
