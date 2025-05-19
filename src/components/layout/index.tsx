import React, { PropsWithChildren } from 'react';

import { Footer } from '@/components/ui';

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <header>header</header>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
