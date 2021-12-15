import React, { FC } from 'react';
import { TrustPilotLogo, StarIcon } from '../svgs';

const TrustPilotInfo: FC = () => {
  return (
    <div className="block w-auto mx-5">
      <div>
        <h3 className="font-graphikSemi font-semibold text-gray-900 text-left text-text-2xl mb-4">
          Trusted by thousands of drivers since 2018
        </h3>
        {/*Slider */}
        <div className="w-full h-auto rounded-md border-1 border-gray-300">
          <div className="flex flex-col justify-center">
            <TrustPilotLogo classSVG="block w-20 h-4.5 mx-auto" />
            <div className="flex flex-row justify-center">
              <StarIcon classSVG="w-6 h-6 mx-px fill-current text-green-500" />
              <StarIcon classSVG="w-6 h-6 mx-px fill-current text-green-500" />
              <StarIcon classSVG="w-6 h-6 mx-px fill-current text-green-500" />
              <StarIcon classSVG="w-6 h-6 mx-px fill-current text-green-500" />
              <StarIcon classSVG="w-6 h-6 mx-px fill-current text-green-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="block w-full border-1 border-gray-300 rounded-md "></div>
    </div>
  );
};
export default TrustPilotInfo;
