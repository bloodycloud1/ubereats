import { FC, ReactNode } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

const Layout: FC<ReactNode> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
