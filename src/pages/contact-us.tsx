import { ContactUsForm, ContactUsMap, Hero } from '@/components/sections';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: `Tell us about your project`.toUpperCase(),
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
