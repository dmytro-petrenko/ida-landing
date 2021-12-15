import React, { FC, useState } from 'react';
import { ChevronDown } from '../../../svgs';
//@ts-ignore
import ReactCountryFlag from 'react-country-flag';

type LangObjType = {
  language: string;
  value: string;
  code: string;
};

const BtnSelectLang: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [lang, setLang] = useState<LangObjType | undefined>({
    language: 'English',
    value: 'en',
    code: 'US',
  });

  const optionsLang: LangObjType[] = [
    {
      language: 'English',
      value: 'en',
      code: 'US',
    },
    {
      language: 'Español',
      value: 'es',
      code: 'ES',
    },
    {
      language: 'Français',
      value: 'fr',
      code: 'FR',
    },
    {
      language: 'Português',
      value: 'pt',
      code: 'PT',
    },
    {
      language: 'Italiano',
      value: 'it',
      code: 'it',
    },
    {
      language: 'Руский',
      value: 'ru',
      code: 'US',
    },
    {
      language: 'Українська',
      value: 'ua',
      code: 'UA',
    },
  ];

  const openMenuHandler = (): void => {
    setIsOpenMenu(!isOpenMenu);
  };

  const selectLangHandler = (value: string): void => {
    const langData: LangObjType | undefined = optionsLang.find((item) => item.value === value);
    setLang(langData);
    setIsOpenMenu(false);
  };

  return (
    <div className="block relative">
      <div onClick={openMenuHandler} className="flex flex-row items-center h-14 w-12">
        <div className="block w-5 sm:w-10 h-3.75 sm:h-7.5 align-baseline">
          <ReactCountryFlag
            countryCode={lang!.code}
            svg
            style={{
              width: '100%',
              height: '100%',
              verticalAlign: 'top',
            }}
            title={lang!.code}
          />
        </div>
        <ChevronDown
          classSVG={`w-2.5 sm:w-4 h-1.5 sm:h-[0.6rem] mx-2 fill-current text-gray-500 ${isOpenMenu ? 'transform rotate-180' : ''}`}
        />
      </div>
      {isOpenMenu && (
        <ul className="flex absolute justify-start items-center self-center flex-col w-72 h-68 border-gray-300 bg-gray-50 shadow-lg rounded-md border-1 border-solid top-14 right-2 overflow-y-auto z-100">
          {optionsLang.map((option, idx) => {
            return (
              <li
                className="flex items-center w-full h-12 px-4 py-3 group hover:bg-primary-500 cursor-pointer"
                key={`${option.value} + ${idx}`}
                onClick={() => selectLangHandler(option.value)}
              >
                <ReactCountryFlag
                  countryCode={option.code}
                  svg
                  style={{
                    width: '1.25rem',
                    height: '0.938rem',
                  }}
                  title={option.code}
                />
                <span className="ml-3 font-inter font-normal text-base text-gray-700 group-hover:text-gray-50">
                  {option.language}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default BtnSelectLang;
