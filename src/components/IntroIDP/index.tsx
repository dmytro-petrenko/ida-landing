import React, { FC } from 'react';
import Image from 'next/image';

const IntroIDP: FC = () => {
  return (
    <div className="block w-full h-auto px-5 my-18">
      <div className="block lg:flex flex-row justify-center xl:w-300 xl:mx-auto">
        <div className="hidden lg:flex justify-between lg:w-144 xl:w-160 mr-8">
          <div className="hidden lg:block relative w-52 xl:w-64 h-[12.2rem] xl:h-60 mb-[9.625rem]">
            <Image src="/img/driving-the-car_sm.png" alt="driving the car" layout="fill" objectFit="fill" />
          </div>
          <div className="hidden lg:block relative w-76 xl:w-[22.875rem] h-[12.46] xl:h-60 mt-[9.625rem]">
            <Image src="/img/view-viza-doc_sm.png" alt="documents" layout="fill" objectFit="fill" />
          </div>
        </div>
        <div className="flex flex-col justify-center xl:justify-start w-full lg:w-104 xl:w-112">
          <h3 className="font-graphikSemi font-semibold text-2xl xl:text-3.5xl text-gray-900 text-left sm:text-center mb-4 xl:mb-6">
            IDP is essential when driving abroad
          </h3>
          <div className="block lg:hidden relative w-84 sm:w-150 h-[7.3rem] sm:h-52 mx-auto mb-6">
            <Image src="/img/driving-the-car.png" alt="driving the car" layout="fill" objectFit="fill" />
          </div>
          <p className="font-inter font-normal text-base text-gray-900 mb-3 xl:mb-6">
            International Driving Permit (IDP), regulated by the United Nations, certifies that you are the holder of a
            valid driver's license in your country of origin.
          </p>
          <div className="block lg:hidden relative w-84 sm:w-150 h-35 sm:h-[15.625rem] mx-auto mb-6">
            <Image src="/img/view-viza-doc.png" alt="documents" layout="fill" objectFit="fill" />
          </div>
          <p className="font-inter font-normal text-base text-gray-900 mb-6">
            Your IDP is a valid form of identification in more than 150 countries worldwide and contains your name,
            photo and driver information in the 12 most widely spoken languages in the world.
          </p>
          <button className="w-84 lg:w-64 h-12 lg:h-10 py-3 lg:py-2 mx-auto lg:mx-0 rounded-md border-1 border-gray-300 font-inter font-normal text-base text-gray-900 text-center shadow-btn active:shadow-btn-active active:outline-none active:bg-gray-50">
            Learn more about IDP
          </button>
        </div>
      </div>
    </div>
  );
};
export default IntroIDP;
