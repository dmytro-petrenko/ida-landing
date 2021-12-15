import React, { FC } from 'react';
import SelectCountry from '../UI common/SelectCountry';

type WindowSecondProps = {
  windowHandler: () => void;
};

const WindowSecond: FC<WindowSecondProps> = ({ windowHandler }) => {
  return (
    <div className="block msm:w-112 mx-3 msm:mx-auto xl:ml-32 mb-12.5 lg:mb-0 rounded-lg bg-gray-50 shadow-xl py-8 px-5 lg:px-8 py-8 z-50">
      <div className="mb-6">
        <h4 className="font-inter font-medium text-sm text-gray-600 mb-2">Question 2 of 3</h4>
        <p className="font-inter font-medium text-base text-gray-800">
          In which country did you get your driver’s license issued?
        </p>
      </div>
      <SelectCountry />
      <button
        onClick={windowHandler}
        className="w-full msm:w-32 h-10 mt-6 bg-primary-500 rounded-md font-inter font-medium text-white text-base shadow-btn active:shadow-btn-active active:outline-none z-30"
      >
        Next
      </button>
    </div>
  );
};
export default WindowSecond;
