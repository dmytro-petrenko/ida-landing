import React, { FC, useState } from 'react';
import { EmailIcon } from '../../svgs';

type WindowThirdProps = {
  windowHandler: () => void;
};

const WindowThird: FC<WindowThirdProps> = ({ windowHandler }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };
  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };
  return (
    <div className="flex flex-col justify-center lg:block h-125 lg:h-75 msm:w-112 lg:w-184 mx-3 msm:mx-auto mb-14 mt-6 lg:my-8 rounded-lg bg-gray-50 shadow-xl py-8 lg:py-[2.625rem] px-5 lg:px-8 z-50">
      <div className="mb-4 lg:mb-6">
        <h4 className="font-inter font-medium text-sm text-gray-600">Question 3 of 3</h4>
      </div>

      <form className="flex flex-col lg:flex-row lg:justify-between lg:mb-6">
        <div className="block mb-4 lg:mb-0 object-contain">
          <label className="block font-inter text-sm font-medium text-gray-700 mb-1" htmlFor="name">
            Your name
          </label>
          <input
            className="block form-input w-full lg:w-80 h-10 border-gray-300 rounded-md font-inter font-normal text-base text-gray-900 cursor-pointer"
            id="name"
            type="text"
            value={name}
            onChange={nameHandler}
          />
        </div>
        <div className="block relative mb-4 lg:mb-0 object-contain">
          <label className="block font-inter text-sm font-medium text-gray-700 mb-1" htmlFor="email">
            Your email
          </label>
          <input
            className="block form-input w-full lg:w-80 h-10 pl-10 border-gray-300 rounded-md font-inter font-normal text-base text-gray-900 cursor-pointer"
            id="email"
            type="email"
            value={email}
            onChange={emailHandler}
          />
          <EmailIcon classSVG="absolute w-4 h-3 fill-current text-gray-400 top-9.5 left-3.5" />
        </div>
      </form>

      <p className="w-full mb-4 lg:mb-6 font-inter text-sm text-left font-normal text-gray-600">
        We’ll keep you updated with the latest information about travel restrictions.
      </p>
      {name.length !== 0 && email.length !== 0 ? (
        <button
          onClick={() => windowHandler()}
          className="w-full msm:w-32 h-10 rounded-md font-inter font-medium text-white text-base z-30 outline-none bg-primary-500 shadow-btn active:shadow-btn-active active:outline-none"
        >
          Next
        </button>
      ) : (
        <button
          disabled
          className="w-full msm:w-32 h-10 rounded-md font-inter font-medium text-white text-base z-30 outline-none bg-gray-300 disabled:opacity-100"
        >
          Next
        </button>
      )}
    </div>
  );
};
export default WindowThird;
