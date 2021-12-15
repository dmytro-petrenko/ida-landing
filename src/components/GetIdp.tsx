import React, { FC } from 'react';
import Image from 'next/image';

const GetIdp: FC = () => {
  type listForIdpType = {
    number: string;
    title: string;
    text: string;
  };
  const listForIdp: listForIdpType[] = [
    {
      number: '01',
      title: 'Fill in the forms',
      text: 'Get your driver’s license and delivery address ready',
    },
    {
      number: '02',
      title: 'Verify your ID',
      text: 'Upload photos following our guidlines',
    },
    {
      number: '03',
      title: 'Get approved',
      text: 'Wait for confirmation and you’re ready to go!',
    },
  ];

  return (
    <div className="block relative w-auto xl:w-300 lg:h-[28.875rem] px-5 lg:px-10 pt-8 lg:pt-12 mx-5 xl:mx-auto bg-gray-100 rounded-xl">
      <div className="block lg:flex lg:justify-between w-auto">
        <h4 className="mb-8 font-graphikSemi font-semibold text-2xl text-gray-900 text-center">How to get your IDP</h4>
        <div className="block w-73 lg:w-88 vsm:mx-auto lg:mx-0 lg:mr-12 xl:mr-24 object-contain">
          <div className="flex flex-col">
            {listForIdp.map((item, idx) => {
              return (
                <div key={`${item}+${idx}`} className="flex justify-start items-start mb-10">
                  <span className="block w-10 h-10 p-2.5 mr-5 font-graphikMedium font-medium text-base lg:text-xl leading-5 lg:leading-6 text-primary-500 text-center">
                    {item.number}
                  </span>

                  <div className="w-58 lg:w-73 font-inter text-gray-900 text-left">
                    <p className="mb-2 font-medium text-lg leading-6 ">{item.title}</p>
                    <p className="font-normal text-sm lg:text-base">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="block w-74 lg:w-full h-12 bg-primary-500 py-3 rounded-md font-inter font-medium text-base text-white text-center shadow-btn active:shadow-btn-active active:outline-none">
            Apply now
          </button>
        </div>
      </div>
      <div className="block relative lg:absolute lg:bottom-0 lg:left-48 xl:left-[18.5rem] w-40 msm:w-56 md:w-72 lg:w-54 h-61 msm:h-[21.35rem] md:h-[27.6rem] lg:h-[20.625rem] mt-12.5 lg:mt-0 mx-auto z-50">
        <Image src="/img/mockup-phone.png" alt="viza documents" layout="fill" objectFit="fill" />
      </div>
      <div className="block lg:hidden absolute w-77 vsm:w-92 msm:w-112 sm:w-136 md:w-[44.2rem] h-50 vsm:h-56 msm:h-64 sm:h-80 md:h-104 bottom-0 right-0">
        <Image src="/img/car-turn.png" alt="viza documents" layout="fill" objectFit="fill" />
      </div>
      <div className="hidden lg:block absolute w-[23.5rem] h-[28.875rem] bottom-0 top-0 left-24 xl:left-52">
        <Image src="/img/double-turn.png" alt="viza documents" layout="fill" objectFit="fill" />
      </div>
    </div>
  );
};
export default GetIdp;
