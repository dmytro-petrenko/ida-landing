import React, { FC } from 'react';
import Link from 'next/link';
import { HamburgerIcon } from '../../../svgs';
import Logo from '../../../../public/img/svg/logo-header.svg';
import BtnSelectLang from './BtnSelectLang';
import BtnChangeLangCurrency from './BtnChangeLangCurrency';

interface NavbarProps {
  openSidebar: () => void;
  modalLangCurrHandler: () => void;
}

const Navbar: FC<NavbarProps> = ({ openSidebar, modalLangCurrHandler }) => {
  return (
    <div>
      <header className="flex flex-row justify-between lg:justify-start items-center w-full h-14 lg:h-16 px-3 xl:px-6 bg-gray-50 ">
        <div className="flex justify-center items-center lg:hidden w-10 h-14 lg:h-16 " onClick={openSidebar}>
          <HamburgerIcon classSVG="w-4.24 sm:w-6 h-3.75 sm:h-[1.33rem] fill-current text-gray-500" />
        </div>
        <div className="block w-42 xl:w-56 h-7.5 xl:h-10">
          <Logo width="100%" height="100%" />
        </div>
        <div className="hidden lg:flex flex-row justify-between items-center w-full ml-12">
          <nav className="lg:block">
            <ul className="flex flex-row justify-between items-center w-106 xl:w-125 h-16 ">
              {['Home', 'Pricing', 'Countries', 'Why do I need an IDP?', 'Car Rental'].map((elem, idx) => {
                return (
                  <li
                    key={`${elem} + ${idx}`}
                    className="font-inter font-medium text-sm xl:text-base text-gray-500 hover:text-primary-500"
                  >
                    <Link href="#">
                      <a>{elem}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="hidden lg:flex flex-row justify-between items-center w-88 xl:w-100">
            <div onClick={modalLangCurrHandler}>
              <BtnChangeLangCurrency />
            </div>
            <Link href="#">
              <a className="font-inter font-medium text-sm text-gray-500 hover:text-primary-500">Sign in</a>
            </Link>
            <button className="px-4 py-2 bg-primary-500 rounded-md font-inter font-medium text-sm xl:text-base text-gray-50 shadow-btn active:shadow-btn-active active:outline-none">
              Apply for IDP
            </button>
          </div>
        </div>
        <div className="block lg:hidden">
          <BtnSelectLang />
        </div>
      </header>
    </div>
  );
};
export default Navbar;
