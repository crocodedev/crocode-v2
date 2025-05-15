import {
  IndustriesSection,
  ServicesSection,
  TechnologiesSection,
} from '@/components/sections';
import { Banner } from '@/components/ui/banner';

export default function Home() {
  return (
    <div>
      <h1>crocode v2</h1>
      <IndustriesSection />
      <ServicesSection />
      <Banner title='ABOUT CROCODE'></Banner>
      <TechnologiesSection />
    </div>
  );
}
