import React, { FC } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  modalLangCurrHandler: () => void;
}

const Layout: FC<LayoutProps> = ({ children, modalLangCurrHandler }) => {
  return (
    <div className="block relative">
      <Header modalLangCurrHandler={modalLangCurrHandler} />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
