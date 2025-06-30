import {
  Advanteges,
  ContactUsForm,
  Expections,
  GetStarted,
  Hero,
  OurProject,
  Specialist,
  Technologies,
} from '@/components/sections';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: 'CUSTOM SOFTWARE DEVELOPMENT',
  },
};

const CustomSoftwareDevelopmentPage = () => {
  return (
    <>
      <Hero {...PROPS_SECTIONS.hero} />
      <Advanteges />
      <Specialist />
      <Expections />
      <GetStarted />
      <Technologies />
      <OurProject />
      <ContactUsForm />
    </>
  );
};

export default CustomSoftwareDevelopmentPage;
