import React, { FC, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface HeaderProps {
  modalLangCurrHandler: () => void;
}

const Header: FC<HeaderProps> = ({ modalLangCurrHandler }) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const openSidebarHandler = (): void => {
    setOpenSidebar(true);
  };
  const closeSidebarHandler = (): void => {
    setOpenSidebar(false);
  };
  const changeLangCurrency = (): void => {
    closeSidebarHandler();
    modalLangCurrHandler();
  };

  return (
    <div className="fixed w-full top-0 z-100">
      <Navbar openSidebar={openSidebarHandler} modalLangCurrHandler={modalLangCurrHandler} />
      <Sidebar isOpenSidebar={openSidebar} closeSidebar={closeSidebarHandler} changeLangCurrency={changeLangCurrency} />
    </div>
  );
};
export default Header;
