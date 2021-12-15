import React, { FC } from 'react';
import { ChevronRight, GlobalIcon } from '../../../svgs';

const BtnChangeLangCurrency: FC = () => {
  return (
    <div className="flex flex-row justify-center items-center w-44 h-5 group cursor-pointer">
      <GlobalIcon classSVG="stroke-current text-gray-500 group-hover:text-primary-500 w-5 h-5 mr-2" />
      <p className="font-inter font-medium text-sm text-gray-700 group-hover:text-primary-500">
        English<span className="mx-2 text-gray-200 group-hover:text-primary-500">|</span>$(USD)
      </p>
      <ChevronRight classSVG="fill-current text-gray-500 group-hover:text-primary-500" />
    </div>
  );
};
export default BtnChangeLangCurrency;
