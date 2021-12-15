import React, { FC } from 'react';
import { DashedSpin } from '../../svgs';

type WindowFourthProps = {
  windowHandler: () => void;
};

const WindowFourth: FC<WindowFourthProps> = ({ windowHandler }) => {
  const handleWindow = (): void => {
    setTimeout(() => {
      windowHandler();
    }, 2500);
  };
  handleWindow();

  return (
    <div className="flex flex-col justify-center items-center w-full msm:w-112 lg:w-184 h-125 lg:h-75 mb-14 mt-6 lg:my-8 lg:mx-auto rounded-lg bg-gray-50 shadow-xl py-8 px-5 z-50">
      <div className="block w-[75vw] h-auto">
        <DashedSpin classSVG="fill-current text-primary-500 w-16 h-16 mx-auto animate-spin-slow" />

        <p className="mt-2.5 font-inter forn-normal text-center text-gray-600 text-sm">Please wait...</p>
      </div>
    </div>
  );
};
export default WindowFourth;
