import React, { FC } from 'react';
import Image from 'next/image';

const Donation: FC = () => {
  return (
    <section className="flex flex-col xl:flex-row justify-center my-18">
      <div className="block relative w-94 vsm:w-[28.125rem] msm:w-135 sm:w-160 xl:w-[37.8rem] h-56 vsm:h-[16.8rem] msm:h-[20.16rem] sm:h-[23.9rem] xl:h-90 mx-auto xl:mx-0 md:rounded-t-xl xl:rounded-tr-none xl:rounded-l-xl overflow-hidden">
        <Image src="/img/banner-image.png" alt="kids" layout="fill" objectFit="fill" />
      </div>
      <div className="block w-94 vsm:w-[28.125rem] msm:w-135 sm:w-160 xl:w-[37.2rem] h-auto px-5 py-12 mx-auto xl:mx-0  bg-primary-800 md:rounded-b-xl xl:rounded-bl-none xl:rounded-r-xl">
        <h4 className="w-80 md:w-136 mb-3 font-graphikSemi font-semibold text-white text-left text-3.5xl">
          We support school kids in the Philippines with laptop donations
        </h4>
        <p className="w-auto msm:w-112 font-inter font-normal text-white text-left text-base">
          Due to Covid-19, kids in the Philippines are doing home schooling without computers. We donate laptops to a
          school for better learning environment for them.
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-8">
          <button className="w-36 h-12 mb-8 lg:mb-0 bg-white rounded-md font-inter font-normal text-gray-700 text-center text-base shadow-btn active:shadow-btn-active active:outline-none">
            Learn more
          </button>
          <div className="flex justify-between items-center">
            <p className="w-63 lg:m-4 font-inter font-normal text-white text-xs text-left lg:text-right">
              In partnership with IIT CEBU (Intellisense institute of technology Inc Cebu)
            </p>
            <div className="block relative w-17 h-[4.18rem]">
              <Image src="/img/logo-institute.png" alt="institite logo" layout="fill" objectFit="fill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Donation;
