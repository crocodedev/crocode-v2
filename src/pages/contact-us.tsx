import { ContactUsForm, ContactUsMap, Hero } from '@/components/sections';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: false,
    title: 'CONTACT US',
  },
};

const ContactUsPage = () => {
  return (
    <>
      <Hero {...PROPS_SECTIONS.hero} />
      <ContactUsForm />
      <ContactUsMap />
    </>
  );
};

export default ContactUsPage;
