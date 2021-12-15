import React, { FC } from 'react';
import Image from 'next/image';
import { CheckIcon } from '../../svgs';
import Logo from '../../../public/img/svg/logo.svg';
import VizaDoc from '../../../public/img/svg/viza_doc.svg';

const MainBanner: FC = () => {
  return (
    <div className="relative w-full px-5 pt-5 pb-7 mt-14">
      <div className="flex flex-col lg:flex-row lg:justify-between relative xl:w-300 xl:mx-auto pt-5 md:pt-14 pb-7 lg:pb-0 w-full bg-primary-500 rounded-xl overflow-hidden">
        <div className="absolute w-64 lg:w-1/2 h-64 lg:h-1/2 xl:h-4/6 opacity-10 right-offset lg:right-1/4 lg:left-1/4 top-offset lg:top-1/4 xl:top-1/6">
          <Logo width="100%" height="100%" />
        </div>
        <div>
          <h1 className="w-72 sm:w-auto md:w-112 lg:w-90 xl:w-112 mx-5 lg:mx-10 mb-4 lg:mb-5 font-graphikSemi xl:font-graphikBold font-semibold text-4xl xl:text-5.5xl text-left sm:text-center md:text-left text-white not-italic">
            Get your International Driving Permit in 2 hours
          </h1>
          <div className="px-5 lg:px-10">
            <p className="inline sm:flex sm:justify-center md:justify-start sm:flex-row md:flex-col font-inter font-normal text-white text-base xl:text-xl not-italic">
              <span>Driving overseas?&nbsp;</span>
              <span>Drive or rent a car in 150+ countries with IDP</span>
            </p>
          </div>

          <div className="mx-5 sm:mx-auto lg:mx-10 sm:flex sm:justify-center lg:justify-start">
            <button className="w-full sm:w-80 lg:w-50 h12 mt-4 lg:mt-5 py-3 rounded-md bg-secondary-500 font-inter font-medium text-base leading-6 not-italic text-black text-center shadow-btn active:shadow-btn-active active:outline-none z-30">
              Apply for IDP
            </button>
          </div>
          <div className="block mx-auto mt-4 lg:m-3 mb-8 sm:mb-8 lg:mb-8 sm:ml-5 lg:mx-10 text-white text-center lg:text-left font-inter font-normal text-sm not-italic">
            <p>Printed + digital IDP starts from $49</p>
            <p>Digital IDP is sent in max. 2 hours</p>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:flex-col-reverse lg:pr-16 xl:pr-20">
          {/*FIRST FIGURE */}
          <div className="block lg:hidden w-auto h-auto relative object-contain">
            <div className="block w-full">
              <VizaDoc width="100%" height="100%" />
            </div>
          </div>
          {/*SECOND FIGURE */}
          <div className="hidden lg:block relative">
            <div className="block relative w-101.4 xl:w-138 h-75 xl:h-102 mx-auto z-30">
              <Image src="/img/banner/viza_doc.png" alt="viza documents" layout="fill" objectFit="fill" />
            </div>
            <div className="block absolute w-230 h-8.5 -left-2/3 lg:-left-52 xl:-left-64 bottom-28 z-10">
              <Image src="/img/banner/road_horizon.png" alt="viza documents" layout="fill" objectFit="fill" />
            </div>
          </div>

          <div className="mx-5 lg:mx-auto lg:w-88 lg:h-auto lg:mb-3 xl:mb-8">
            <ul
              v-for="item in items"
              className="flex justify-center flex-wrap lg:flex-wrap-reverse font-inter font-normal text-sm lg:text-base not-italic text-white"
            >
              {['Instant approval', 'Valid for 1-3 years', 'UN regulated travel document'].map((elem, idx) => {
                return (
                  <li key={`${elem} + ${idx}`} className="flex flex-row justify-start items-center ml-1.5 first:ml-0">
                    <CheckIcon classSVG="w-6 h-6 mr-1 fill-current text-secondary-500" />
                    <span>{elem}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainBanner;
