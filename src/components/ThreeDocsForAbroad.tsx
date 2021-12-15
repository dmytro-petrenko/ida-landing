import React, { FC } from 'react';
import Image from 'next/image';
import { Road } from '../svgs';

const ThreeDocsForAbroad: FC = () => {
  return (
    <div className="block relative w-auto xl:w-300 h-auto lg:h-[22.125rem] mx-5 xl:mx-auto">
      <div className="flex flex-col lg:flex-row justify-center xl:justify-start w-auto h-auto lg:h-[22.125rem] px-5 py-8 lg:py-0 lg:pt-14 bg-primary-50 rounded-xl">
        <div className="hidden lg:block object-bottom mr-12 xl:mr-24 xl:ml-13 z-50">
          <div className="block relative w-74 h-74">
            <Image src="/img/man-with-license.png" alt="idp document" layout="fill" objectFit="fill" />
          </div>
        </div>
        <div className="flex flex-col items-center lg:mb-7 object-bottom">
          <h3 className="w-68 lg:w-auto font-graphikMedium font-medium text-xl lg:text-2xl leading-6 lg:leading-8 text-primary-500 text-center lg:mx-auto mb-8 lg:mb-9">
            3 things you need while driving abroad
          </h3>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-row lg:flex-col items-center w-full lg:w-46 h-[6.125rem]lg:h-37 mb-8.5 lg:mb-0 lg:mr-6 z-50">
              <div className="block relative w-22 h-[6.125rem] mr-6 lg:mr-0">
                <Image src="/img/doc-idp.png" alt="idp document" layout="fill" objectFit="fill" />
              </div>
              <p className="w-46 sm:w-88 lg:w-46 lg:mt-3 font-inter font-normal lg:font-medium text-base lg:text-sm leading-[1.2rem] text-gray-900 text-left lg:text-center">
                International Driving Permit (IDP)
              </p>
            </div>
            <div className="flex flex-row lg:flex-col items-center w-full lg:w-46 h-[6.125rem] lg:h-37 mb-8.5 lg:mb-0 lg:mr-6 z-50">
              <div className="flex justify-center items-center relative w-22 h-[6.125rem] mr-6 lg:mr-0 object-contain">
                <div className="block relative w-[5.7rem] h-[3.7rem] mt-3.5 z-50">
                  <Image src="/img/driver-license.png" alt="driver license" layout="fill" objectFit="fill" />
                </div>
                <span className="block absolute w-22 h-22 top-2.5 left-0 bg-primary-500 rounded-full "></span>
              </div>

              <p className="w-46 sm:w-88 lg:w-46 lg:mt-3 font-inter font-normal text-base lg:text-sm leading-[1.2rem] text-gray-900 text-left lg:text-center">
                Valid driver’s license from your home country
              </p>
            </div>
            <div className="flex flex-row lg:flex-col items-center w-full lg:w-46 h-[6.125rem] lg:h-37 mb-15 lg:mb-0 z-50">
              <div className="block relative w-22 h-[5.7rem] mr-6 lg:mr-0 lg:mt-2">
                <Image src="/img/passport.png" alt="passport" layout="fill" objectFit="fill" />
              </div>
              <p className="w-46 sm:w-88 lg:w-46 lg:mt-3 font-inter font-normal text-base lg:text-sm leading-[1.2rem] text-gray-900 text-left lg:text-center">
                Passport
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="block absolute right-[1.875rem] bottom-8 lg:right-10 lg:top-[19.375rem] font-inter font-normal text-sm text-gray-900 text-left lg:text-right">
        *It may vary from countries you’re traveling
      </p>
      <Road classSVG="hidden lg:block w-full h-6 absolute top-[10.44rem] left-0 stroke-current text-primary-100" />
    </div>
  );
};
export default ThreeDocsForAbroad;
