import {
  Benefits,
  ContactUsForm,
  DedicatedSoftware,
  Hero,
  OurProject,
  Technologies,
  WhyCrocode,
} from '@/components/sections';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: false,
    title: 'DEDICATED TEAM',
  },
};

const DedicatedTeamPage = () => {
  return (
    <>
      <Hero {...PROPS_SECTIONS.hero} />
      <WhyCrocode />
      <DedicatedSoftware />
      <Benefits />
      <Technologies />
      <OurProject />
      <ContactUsForm />
    </>
  );
};

export default DedicatedTeamPage;
