import React, { FC, useState } from 'react';
import { CheckCircleIcon, RefreshIcon, XCircleIcon } from '../../svgs';

type WindowFifthProps = {
  windowHandler: () => void;
  startAgainHandler: () => void;
};

const WindowFifth: FC<WindowFifthProps> = ({ windowHandler, startAgainHandler }) => {
  const [isValid, setIsValid] = useState<boolean>(false);

  return (
    <div className="flex items-center lg:justify-center h-125 lg:h-75 msm:w-112 lg:w-184 px-5 mx-3 msm:mx-auto mt-6 lg:mt-0 bg-gray-50 rounded-lg shadow-xl z-50">
      <div>
        {isValid ? (
          <CheckCircleIcon classSVG="block w-6 h-6 mb-2 lg:mb-4 fill-current text-green-500 msm:mx-auto" />
        ) : (
          <XCircleIcon classSVG="block w-6 h-6 mb-2 lg:mb-4 fill-current text-red-500 msm:mx-auto" />
        )}

        <h4 className="w-full msm:w-80 lg:w-full font-inter font-medium text-gray-800 text-left msm:text-center text-lg leading-6 mb-8 lg:mb-7 msm:mx-auto">
          Yes, our International Driving Permit is valid for you.
        </h4>
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between msm:justify-center lg:w-109 px-5 font-inter text-sm mb-8 lg:mb-7 lg:mx-auto vsm:px-13 lg:px-0">
          <div className="block w-full msm:w-76 lg:w-48 mb-6 lg:mb-0 msm:text-center lg:text-left">
            <p className="text-gray-500 font-medium mb-1">Country issued</p>
            <p className="text-gray-900 font-normal">Germany</p>
          </div>
          <div className="block w-full msm:w-76 lg:w-48 msm:text-center lg:text-left">
            <p className="text-gray-500 font-medium mb-1">You’ll be driving in</p>
            <p className="text-gray-900 font-normal">Philippines</p>
          </div>
        </div>
        {isValid ? (
          <div>
            <div onClick={startAgainHandler} className="flex items-center justify-center mb-3">
              <RefreshIcon classSVG="inline-block w-5 h-5 fill-current text-primary-500" />
              <p className="inline font-inter font-medium text-base text-primary-500">Start again</p>
            </div>
            <button
              onClick={windowHandler}
              className="block w-full lg:w-119 h-12 rounded-md bg-primary-500 font-inter font-medium text-base text-center text-white shadow-btn active:shadow-btn-active active:outline-none"
            >
              Apply for IDP
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={startAgainHandler}
              className="flex items-center justify-center w-full lg:w-119 h-12 rounded-md bg-primary-500 font-inter font-medium text-base text-center text-white shadow-btn active:shadow-btn-active active:outline-none"
            >
              <RefreshIcon classSVG="inline-block w-5 h-5 mr-3 fill-current" />
              <span className="inline">Start again</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default WindowFifth;
