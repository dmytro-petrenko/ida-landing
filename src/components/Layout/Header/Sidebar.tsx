import React, { FC } from 'react';
import Link from 'next/link';
import { ArrowRight } from '../../../svgs';
import BtnChangeLangCurrency from './BtnChangeLangCurrency';

type SidebarProps = {
  isOpenSidebar: boolean;
  closeSidebar: () => void;
  changeLangCurrency: () => void;
};

const Sidebar: FC<SidebarProps> = ({ isOpenSidebar, closeSidebar, changeLangCurrency }) => {
  return (
    <React.Fragment>
      <div
        onClick={closeSidebar}
        className={`absolute top-0 left-0 w-screen h-screen bg-gray-800 z-[105] ${
          isOpenSidebar
            ? 'transition delay-500 duration-1000 easy-in-out transform bg-opacity-25'
            : 'transition delay-500 duration-1000 easy-in-out transform bg-opacity-0 hidden'
        }`}
      ></div>

      <div
        className={`absolute top-0 left-0 w-64 h-screen bg-gray-50 opacity-100 z-[110] ${
          isOpenSidebar
            ? 'transition duration-1000 easy-in-out transform translate-x-0'
            : 'transition duration-1000 easy-in-out transform -translate-x-64'
        }`}
      >
        <div className="flex justify-center items-center w-full h-15 bg-gray-100" onClick={changeLangCurrency}>
          <BtnChangeLangCurrency />
        </div>
        <div className="flex flex-col justify-between h-full">
          <nav className="block w-full mt-5 px-2">
            {['Home', 'Pricing', 'Countries', 'FAQ', 'Why do I need an IDP?', 'Verify IDP', 'Driving Guides'].map(
              (elem, idx) => {
                return (
                  <div
                    key={`${elem} + ${idx}`}
                    className="w-full py-3 px-4 font-inter font-normal text-base text-gray-700 hover:text-gray-50 hover:bg-primary-500 rounded-md"
                  >
                    <Link href="#">
                      <a>{elem}</a>
                    </Link>
                  </div>
                );
              },
            )}
          </nav>
          <div className="block w-full px-2 mb-20">
            <Link href="#">
              <a className="flex justify-center items-center group w-full h-12 px-2 rounded-md hover:bg-primary-500">
                <p className="mr-1 font-inter font-medium text-base text-gray-500 group-hover:text-gray-50">Sign in</p>
                <ArrowRight classSVG="stroke-current text-gray-500 group-hover:text-gray-50" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Sidebar;
