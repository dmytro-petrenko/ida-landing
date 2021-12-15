import React, { FC } from 'react';
import { StarIcon, CashPayIcon, ShieldLockIcon, CustomerSupIcon } from '../../svgs/index';

const Facility: FC = () => {
  return (
    <ul className="flex justify-between vsm:justify-around flex-wrap mt-5 mb-10 mx-5 vsm:mx-auto w-auto xl:w-300">
      <li className="flex flex-col lg:flex-row justify-center items-center mb-9 sm:mb-0 lg:mb-0 w-39.5 lg:w-42 h-18 lg:h-11 font-inter text-sm lg:text-base">
        <StarIcon classSVG="fill-current text-primary-500 w-5 lg:w-6 h-5 lg:h-6 mx-auto lg:mr-4 text-primary-500 mb-3 lg:my-auto" />
        <div className="block text-center lg:text-left">
          <p className="text-gray-900 font-medium">Rated Excellent</p>
          <p className="text-gray-600 font-normal">on Trustpilot</p>
        </div>
      </li>
      <li className="flex flex-col lg:flex-row justify-center lg:items-center mb-9 sm:mb-0 w-39.5 lg:w-42 h-18 lg:h-11 font-inter text-sm lg:text-base">
        <CashPayIcon classSVG="fill-current text-primary-500 w-5 lg:w-6 h-5 lg:h-6 mx-auto lg:mr-4 text-primary-500 mb-3 lg:my-auto" />
        <div className="block text-center lg:text-left">
          <p className="text-gray-900 font-medium">30-day Returns</p>
          <p className="text-gray-600 font-normal">100% guarantee</p>
        </div>
      </li>
      <li className="flex flex-col lg:flex-row justify-center w-39.5 lg:w-42 h-18 lg:h-11 font-inter text-sm lg:text-base">
        <ShieldLockIcon classSVG="fill-current text-primary-500 w-5 lg:w-6 h-5 lg:h-6 mx-auto lg:mr-4 text-primary-500 mb-3 lg:my-auto" />
        <div className="block text-center lg:text-left">
          <p className="text-gray-900 font-medium">Top Security</p>
          <p className="text-gray-600 font-normal">Safe checkout</p>
        </div>
      </li>
      <li className="flex flex-col lg:flex-row justify-center w-39.5 lg:w-42 h-18 lg:h-11 font-inter text-sm lg:text-base">
        <CustomerSupIcon classSVG="fill-current text-primary-500 w-5 lg:w-6 h-5 lg:h-6 mx-auto lg:mr-4 text-primary-500 mb-3 lg:my-auto" />
        <div className="block text-center lg:text-left">
          <p className="text-gray-900 font-medium">24/7 Live Chat</p>
          <p className="text-gray-600 font-normal">Customer care</p>
        </div>
      </li>
    </ul>
  );
};
export default Facility;
