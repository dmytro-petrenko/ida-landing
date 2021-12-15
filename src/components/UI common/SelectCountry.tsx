import React, { FC, useState } from 'react';
import { ChevronDown } from '../../svgs';
//@ts-ignore
import ReactCountryFlag from 'react-country-flag';

interface SelectCountryProps {
  ID?: string;
}

const SelectCountry: FC<SelectCountryProps> = ({ ID }) => {
  type OptionType = {
    country: string;
    value: string;
    code: string;
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<OptionType | undefined>({
    country: 'Germany',
    value: 'germany',
    code: 'DE',
  });

  const optionsCountry: OptionType[] = [
    {
      country: 'Australia',
      value: 'australia',
      code: 'AU',
    },
    {
      country: 'Germany',
      value: 'germany',
      code: 'DE',
    },
    {
      country: 'France',
      value: 'france',
      code: 'FR',
    },
    {
      country: 'Portugal',
      value: 'portugal',
      code: 'PT',
    },
    {
      country: 'Russian Federation',
      value: 'russia',
      code: 'RU',
    },
    {
      country: 'United States',
      value: 'usa',
      code: 'US',
    },
  ];

  const menuHandler = (): void => {
    setIsOpen(!isOpen);
  };

  const selectCountryHandler = (value: string): void => {
    const countryData: OptionType | undefined = optionsCountry.find((item) => item.value === value);
    setSelectedCountry(countryData);
    menuHandler();
  };

  return (
    <div className="block relative w-full">
      <div className="block relative w-full cursor-pointer">
        <input
          id={ID}
          className="pl-10 form-input w-full h-10 border-gray-300 rounded-md font-inter font-normal text-base text-gray-900 cursor-pointer"
          type="select"
          value={selectedCountry!.country}
          onClick={menuHandler}
          readOnly
        />
        <ReactCountryFlag
          className="block absolute w-5 h-3.75 left-3 top-3.12"
          countryCode={selectedCountry!.code}
          svg
          style={{
            width: '1.25rem',
            height: '0.938rem',
          }}
          title={selectedCountry!.code}
        />
        <ChevronDown
          classSVG={`w-2.5 h-1.5 absolute fill-current text-gray-400 top-4 right-4 cursor-pointer ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
        
      </div>

      {isOpen && (
        <ul className="flex absolute flex-col w-full h-64 cursor-pointer bg-gray-50 shadow-lg rounded-md border-gray-300 border-1 border-solid top-11 overflow-y-auto z-100">
          {optionsCountry.map((item, idx) => {
            return (
              <li
                className="flex items-center w-full h-12 px-4 py-3 group hover:bg-primary-500"
                key={`${item.value} + ${idx}`}
                onClick={() => selectCountryHandler(item.value)}
              >
                <ReactCountryFlag
                  countryCode={item.code}
                  svg
                  style={{
                    width: '1.25rem',
                    height: '0.938rem',
                  }}
                  title={item.code}
                />
                <span className="ml-3 font-inter font-normal text-base text-gray-700 group-hover:text-gray-50">
                  {item.country}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default SelectCountry;
