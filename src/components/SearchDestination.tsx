import React, { FC, useState } from 'react';
import { SearchIcon } from '../svgs';
import WorldMap from '../svgs/WorldMap';
import uniqid from 'uniqid';
//@ts-ignore
import ReactCountryFlag from 'react-country-flag';

const SearchDestination: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [countryVal, setCountryVal] = useState<string>('');

  type countryListType = {
    code: string;
    country: string;
  };

  const countryList: countryListType[] = [
    {
      code: 'CL',
      country: 'Chile',
    },
    {
      code: 'CM',
      country: 'Cameroon',
    },
    {
      code: 'CN',
      country: 'China',
    },
    {
      code: 'CO',
      country: 'Colombia',
    },
    {
      code: 'CR',
      country: 'Costa Rica',
    },
    {
      code: 'CU',
      country: 'Cuba',
    },
    {
      code: 'CV',
      country: 'Cabo Verde',
    },
  ];

  const countrySearchHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCountryVal(event.target.value);
    setTimeout(() => setOpenMenu(true), 2000);
  };
  const selectCountryHandler = (value: string): void => {
    setCountryVal(value);
    setOpenMenu(false);
  };

  return (
    <div className="flex flex-col justify-center relative w-auto mx-5 sm:mx-12 my-18">
      <span className="w-auto lg:w-232 xl:w-280 h-px bg-gray-200 lg:mx-auto"></span>

      <div className="block absolute w-full h-[9.875rem] top-0 left-0 overflow-hidden -z-10">
        <WorldMap classSVG="w-80 lg:w-[58rem] xl:w-[65.9rem] h-[11.875rem] lg:h-[33rem] xl:h-[37.5rem] mx-auto mt-6 lg:mt-4 fill-current text-gray-200 -z-10" />
      </div>

      <div className="flex flex-col justify-center w-80 lg:w-[22.625rem] mx-auto my-6 z-70">
        <h4 className="block font-graphikMedium font-medium text-xl lg:text-2xl leading-6 lg:leading-8 text-center text-gray-800 mb-1 lg:mb-0 z-70">
          Where’s your destination?
        </h4>
        <p className="font-inter font-normal text-sm lg:text-base text-center text-gray-700 mb-5 lg:mb-4 z-70">
          Learn more about the country you’ll be traveling
        </p>
        <div className="relative w-74 mx-auto">
          <input
            className="form-input w-full h-10 pl-10 pr-3 py-2 border-1 border-gray-300 rounded-md font-inter font-normal text-base text-gray-900 cursor-pointer focus:border-primary-500 z-70"
            type="text"
            value={countryVal}
            onChange={countrySearchHandler}
            placeholder="France"
          />
          <SearchIcon classSVG="absolute w-5 h-5 top-2.5 left-3 stroke-current text-gray-400 z-70" />
          {openMenu && (
            <ul className="flex absolute flex-col w-full h-66 cursor-pointer bg-gray-50 shadow-lg rounded-md border-gray-300 border-1 border-solid top-11 overflow-y-auto z-100">
              {countryList.map((elem) => {
                return (
                  <li
                    key={uniqid()}
                    onClick={() => selectCountryHandler(elem.country)}
                    className="flex items-center w-full h-12 px-4 py-3 group hover:bg-primary-500"
                  >
                    <ReactCountryFlag
                      countryCode={elem.code}
                      svg
                      style={{
                        width: '1.25rem',
                        height: '0.938rem',
                      }}
                      title={elem.code}
                    />
                    <span className="ml-3 font-inter font-normal text-base text-gray-700 group-hover:text-gray-50">
                      {elem.country}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <span className="block w-auto lg:w-232 xl:w-280 h-px lg:mx-auto bg-gray-200"></span>
    </div>
  );
};
export default SearchDestination;
