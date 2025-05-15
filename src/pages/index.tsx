import {
  AboutUsSection,
  BlogSection,
  CallerSection,
  IndustriesSection,
  OurProjectsSection,
  ServicesSection,
  TechnologiesSection,
} from '@/components/sections';
import { Banner } from '@/components/ui';

export default function Home() {
  return (
    <div>
      <h1>crocode v2</h1>
      <IndustriesSection />
      <ServicesSection />
      <Banner title='ABOUT CROCODE' />
      <TechnologiesSection />
      <CallerSection />
      <OurProjectsSection />
      <AboutUsSection />
      <BlogSection />
    </div>
  );
}
