import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <header>header</header>
      {children}
      <footer>footer</footer>
    </>
  );
};

export default Layout;
