import React, { FC, useState } from 'react';
import Image from 'next/image';
import WindowFirst from './WindowFirst';
import WindowSecond from './WindowSecond';
import WindowThird from './WindowThird';
import WindowFourth from './WindowFourth';
import WindowFifth from './WindowFifth';

const Quiz: FC = () => {
  const [windowNum, setWindowNun] = useState<number>(1);
  const nextWindowHandle = (): void => {
    if (windowNum < 5) {
      setWindowNun(windowNum + 1);
    } else {
      setWindowNun(1);
    }
  };
  const handleStart = (): void => {
    setWindowNun(1);
  };

  return (
    <section className="flex justify-center lg:justify-between lg:items-center relative h-153 lg:h-91 msm:w-auto xl:w-300 mx-5 xl:mx-auto pt-8 lg:pt-0 bg-gray-100 rounded-xl">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:justify-items-center lg:ml-10 w-full">
        {windowNum < 3 ? (
          <div className="block w-72 vsm:w-80 msm:w-112 mx-2 msm:mx-auto lg:mx-0 mb-6 lg:mb-0 px-3 lg:px-0">
            <h3 className="font-graphikSemi font-semibold lg:font-graphicMedium lg:font-medium text-2xl text-left text-gray-900">
              Do I need an International Driving Permit?
            </h3>
            <p className="mt-2 font-inter font-normal text-base lg:text-lg text-left text-gray-700">
              Take a quiz and check your eligibility
            </p>
          </div>
        ) : (
          <div className="hidden lg:block w-72 vsm:w-80 msm:w-112 lg:w-0 mx-2 lg:mx-0 lg:px-0"></div>
        )}
        {windowNum === 1 && <WindowFirst windowHandler={nextWindowHandle} />}
        {windowNum === 2 && <WindowSecond windowHandler={nextWindowHandle} />}
        {windowNum === 3 && <WindowThird windowHandler={nextWindowHandle} />}
        {windowNum === 4 && <WindowFourth windowHandler={nextWindowHandle} />}
        {windowNum === 5 && <WindowFifth startAgainHandler={handleStart} windowHandler={nextWindowHandle} />}
      </div>

      <div className="block lg:hidden absolute w-61 sm:w-112 h-30 sm:h-52 bottom-0 right-0">
        <Image src="/img/road-turn-left.png" alt="car turn" layout="fill" objectFit="fill" />
      </div>
      <div className="hidden lg:block absolute w-66 h-full top-0 left-96 xl:left-128">
        <Image src="/img/winding-road.png" alt="winding road" layout="fill" objectFit="fill" />
      </div>
      <div className="hidden lg:block absolute w-27.2 h-54 bottom-0 right-0">
        <Image src="/img/road-turn.png" alt="road" layout="fill" objectFit="fill" />
      </div>
    </section>
  );
};
export default Quiz;
