import React, { FC } from 'react';
//@ts-ignore
import ReactCountryFlag from 'react-country-flag';

const IdpInCountries: FC = () => {
  type countryRulsType = {
    countryCodes: string[];
    text: string;
  };

  const countryRuls: countryRulsType[] = [
    {
      countryCodes: ['KP', 'KR', 'CN'],
      text: 'Our International Driver’s Permit is NOT VALID in Mainland China, South Korea and North Korea.',
    },
    {
      countryCodes: ['US'],
      text: 'Our IDP is NOT AVAILABLE for U.S Citizens.',
    },
    {
      countryCodes: ['JP'],
      text: 'Special considerations apply for Japan. See FAQs for details.',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center w-auto xl:w-300 h-auto mx-auto my-18">
      {countryRuls.map((item, idx, { length }) => {
        return (
          <div
            key={`${item.text}+${idx}`}
            className="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center w-80 lg:w-auto mx-auto"
          >
            <div className="block lg:inline-block w-auto lg:w-56 xl:w-64">
              <div className="flex flex-row justify-center lg:justify-start w-auto h-[0.938rem] mx-auto ">
                {item.countryCodes.map((code, i) => {
                  return (
                    <React.Fragment key={`${code}+${i}`}>
                      <ReactCountryFlag
                        v-for="item in items"
                        className="block mr-2 last:mr-0"
                        countryCode={code}
                        svg
                        style={{
                          width: '1.25rem',
                          height: '0.938rem',
                        }}
                        title={code}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
              <p className="block w-full mt-3 font-inter font-normal text-base text-gray-800 text-left sm:text-center lg:text-left">
                {item.text}
              </p>
            </div>
            {idx + 1 !== length ? (
              <div className="block lg:inline-block w-22 lg:w-px h-px lg:h-22 bg-gray-300 my-10 lg:my-[1.1rem] mx-auto lg:mx-0 lg:mx-16 lx:mx-22"></div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
export default IdpInCountries;
