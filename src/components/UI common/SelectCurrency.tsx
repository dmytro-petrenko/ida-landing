import React, { FC, useState } from 'react';
import { ChevronDown } from '../../svgs';
//@ts-ignore
import ReactCountryFlag from 'react-country-flag';

interface SelectCurrency {
  ID?: string;
}

const SelectCurrency: FC<SelectCurrency> = ({ ID }) => {
  type OptionCurrencyType = {
    currency: string;
    description: string;
    value: string;
    countryCode: string;
    symbol: string;
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCurr, setSelectedCurr] = useState<OptionCurrencyType | undefined>({
    currency: 'EUR',
    description: 'Euro',
    value: 'eur',
    countryCode: 'EU',
    symbol: '€',
  });

  const OptionCurrency: OptionCurrencyType[] = [
    {
      currency: 'USD',
      description: 'USA Dollar',
      value: 'usd',
      countryCode: 'US',
      symbol: '$',
    },
    {
      currency: 'EUR',
      description: 'Euro',
      value: 'eur',
      countryCode: 'EU',
      symbol: '€',
    },
    {
      currency: 'GBP',
      description: 'Pound Sterling',
      value: 'gbp',
      countryCode: 'GP',
      symbol: '£',
    },
    {
      currency: 'CAD',
      description: 'Canadian Dollar',
      value: 'cad',
      countryCode: 'CA',
      symbol: 'CA$',
    },
    {
      currency: 'JPY',
      description: 'Japanese Yen',
      value: 'jpy',
      countryCode: 'JP',
      symbol: '¥',
    },
    {
      currency: 'AED',
      description: 'UAE Dirham',
      value: 'aed',
      countryCode: 'AE',
      symbol: 'د.إ',
    },
  ];

  const menuHandler = (): void => {
    setIsOpen(!isOpen);
  };
  const selectCurrHandler = (value: string): void => {
    const currencyData: OptionCurrencyType | undefined = OptionCurrency.find((item) => item.value === value);
    setSelectedCurr(currencyData);
    menuHandler();
  };

  return (
    <div className="block relative w-full">
      <div>
        <input
          id={ID}
          className="pl-10 form-input w-full h-10 border-gray-300 rounded-md font-inter font-normal text-base text-gray-900 cursor-pointer"
          type="select"
          value={`${selectedCurr!.currency}, ${selectedCurr!.description} (${selectedCurr!.symbol})`}
          onClick={menuHandler}
          readOnly
        />
        <ReactCountryFlag
          className="block absolute left-3 top-3.12"
          countryCode={selectedCurr!.countryCode}
          svg
          style={{
            width: '1.25rem',
            height: '0.938rem',
          }}
          title={selectedCurr!.countryCode}
        />
        <ChevronDown
          classSVG={`w-2.5 h-1.5 absolute fill-current text-gray-400 top-4 right-4 cursor-pointer ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </div>
      {isOpen && (
        <ul className="flex absolute flex-col w-72 h-67 bg-gray-50 rounded-md border-gray-400 border-1 border-solid cursor-pointer shadow-lg top-11 overflow-y-auto z-100">
          {OptionCurrency.map((option, idx) => {
            return (
              <li
                key={`${option.value} + ${idx}`}
                className="flex justify-between items-center w-full h-12 px-4 py-3 font-inter font-nromal text-base text-gray-700 group hover:bg-primary-500"
                onClick={() => selectCurrHandler(option.value)}
              >
                <span>
                  <ReactCountryFlag
                    countryCode={option.countryCode}
                    svg
                    style={{
                      width: '1.25rem',
                      height: '0.938rem',
                    }}
                    title={option.countryCode}
                  />
                  <span className="ml-3 font-inter font-weight text-base text-gray-700 group-hover:text-gray-50">
                    {option.currency}, {option.description}
                  </span>
                </span>
                <span className="font-inter font-weight text-base text-gray-700 group-hover:text-gray-50">
                  {option.symbol}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default SelectCurrency;
