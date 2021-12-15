import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/img/svg/logo-header.svg';
import { PhoneIcon, LocationMarkerIcon, EmailIcon, GlobalUnionIcon, BookIcon } from '../../../svgs';
//@ts-ignore
import ReactCountryFlag from 'react-country-flag';

const Footer: FC = () => {
  const countriesIDA = [
    {
      code: 'US',
      country: 'USA',
    },
    {
      code: 'CA',
      country: 'Canada',
    },
    {
      code: 'GE',
      country: 'Georgia',
    },
    {
      code: 'GR',
      country: 'Greece',
    },
    {
      code: 'ES',
      country: 'Spain',
    },
    {
      code: 'IT',
      country: 'Italy',
    },
    {
      code: 'GB',
      country: 'United Kingdom',
    },
  ];

  return (
    <footer className="block w-full h-auto px-5 py-8 md:px-10 lg:px-5 bg-gray-50">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between xl:w-300 lg:mb-16 xl:mx-auto">
        {/*FIRST BLOCK */}
        <div className="w-full lg:w-80 mb-12 lg:mb-0">
          <div className="w-56 h-10 mb-6">
            <Logo width="100%" height="100%" />
          </div>
          <div className="w-full h-auto mb-4">
            <PhoneIcon classSVG="inline-block w-4 h-4 mr-2 fill-current text-gray-300" />
            <p className="inline-block font-inter font-normal text-xs text-gray-500">+1-877-533-2804</p>
          </div>
          <div className="flex justify-start mb-4 w-full">
            <LocationMarkerIcon classSVG="w-4 h-4 mr-2 fill-current text-gray-300" />
            <p className="flex flex-col font-inter font-normal text-xs text-gray-500">
              <span>Toptravel PTE. LTD.</span>
              <span>12 EU TONG SEN STREET #08-169</span>
              <span>THE CENTRAL SINGAPORE 059819</span>
            </p>
          </div>
          <div className="w-full w-auto h-auto mb-4">
            <EmailIcon classSVG="inline-block w-4 mr-2 h-4 fill-current text-gray-300" />
            <p className="inline-block font-inter font-normal text-xs text-gray-500">
              hello@internationaldriversassociations.com
            </p>
          </div>
          <p className="font-inter font-normal text-xs text-gray-500 mb-6">Business registration code: 202100105C</p>
          <button className="px-4 py-2 rounded-md bg-primary-500 font-inter font-medium text-base text-gray-50 shadow-btn active:shadow-btn-active active:outline-none">
            Apply for IDP
          </button>
        </div>
        {/* SECOND BLOCK */}
        <div className="flex justify-between items-start mb-12 lg:mb-0">
          <div className="block w-full lg:w-40 mr-2.5">
            <h4 className="mb-6 font-inter font-medium text-sm leading-[1.188rem] text-primary-700">IDA</h4>
            <nav>
              {[
                'Pricing',
                'Countries',
                'Why do I need an IDP?',
                'About us',
                'FAQ',
                'Agents',
                'Affiliates',
                'Blog',
                'Travel Restrictions',
              ].map((anchor, idx) => {
                return (
                  <React.Fragment key={`${anchor} + ${idx}`}>
                    <Link href="#">
                      <a
                        v-for="item in items"
                        className="block mb-4 last:mb-0 font-inter font-normal text-sm text-gray-500 hover:text-primary-500"
                      >
                        {anchor}
                      </a>
                    </Link>
                  </React.Fragment>
                );
              })}
            </nav>
          </div>
          <div className="block w-full lg:w-40 ml-2.5">
            <h4 className="mb-6 font-inter font-medium text-sm leading-[1.188rem] text-primary-700">Customer care</h4>
            <nav>
              {[
                'Contact us',
                'Refund Policy',
                'Privacy Policy',
                'Legal Disclaimer',
                'Terms & Conditions',
                'GDPR Cookie Policy',
                'GDPR Privacy Policy',
                'Billing Statement',
                'Shopping Policy',
              ].map((anchor, idx) => {
                return (
                  <React.Fragment key={`${anchor} + ${idx}`}>
                    <Link href="#">
                      <a
                        v-for="item in items"
                        className="block mb-4 last:mb-0 font-inter font-normal text-sm text-gray-500 hover:text-primary-500"
                      >
                        {anchor}
                      </a>
                    </Link>
                  </React.Fragment>
                );
              })}
            </nav>
          </div>
        </div>
        {/* THIRD BLOCK */}
        <div className="w-full lg:w-80 mb-12 lg:mb-0">
          <h4 className="mb-6 font-inter font-medium text-sm leading-[1.188rem] text-primary-700">Travel with IDA</h4>

          <div className="grid grid-cols-2 gap-y-4 gap-x-5 w-full h-32">
            {countriesIDA.map((item, idx) => {
              return (
                <div key={`${item.code}+${idx}`} className="flex items-center">
                  <ReactCountryFlag
                    countryCode={item.code}
                    svg
                    style={{
                      width: '1.25rem',
                      height: '0.938rem',
                    }}
                    title={item.code}
                  />
                  <p className="ml-3 font-inter font-normal text-sm text-gray-500">{item.country}</p>
                </div>
              );
            })}
            <div className="flex items-center">
              <GlobalUnionIcon classSVG="w-5 h-[0.938rem]" />
              <p className="ml-3 font-inter font-normal text-sm text-gray-500">Other countries</p>
            </div>
          </div>
          <div className="w-full mt-6 group hover:text-primary-500">
            <BookIcon classSVG="inline-block w-5 h-5 fill-current text-gray-400 group-hover:text-primary-500" />
            <Link href="#">
              <a>
                <p className="inline-block ml-2 font-inter font-normal text-sm text-gray-500 group-hover:text-primary-500">
                  International Driving Guides
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-300 h-px bg-gray-300 xl:mx-auto"></div>
      <div className="flex flex-col lg:flex-row justify-between items-end xl:w-300 lg:h-auto mt-12 xl:mx-auto">
        <div className="lg:flex flex-col justify-end w-full lg:w-160 font-inter font-normal text-xs text-gray-500 mb-12 lg:mb-0">
          <p className="mb-4">
            Legal Disclaimer: International Drivers Association is in no way affiliated with or a representative of
            American Automobile Association, Inc (AAA) and makes no claim to be a Government Agency. You are purchasing
            a translation document which is not a replacement for a Driving License.
          </p>
          <p>&copy; 2021 Toptravel Pte. Ltd. All rights reserved.</p>
        </div>
        <div className="flex flex-col justify-center lg:justify-end items-end w-full lg:w-144 xl:w-[25.8rem]">
          <div className="flex justify-evenly lg:justify-between items-center w-full lg:w-[20.7rem]  mb-4">
            <div className="block relative w-[4.68rem] sm:w-[5.625rem] md:w-[8.45rem] lg:w-[5.625rem] h-10 sm:h-12 md:h-18 lg:h-12">
              <Image src="/img/fast-delivery.png" alt="fast delivery" layout="fill" objectFit="fill" />
            </div>
            <div className="block relative w-14 sm:w-18 md:w-27 lg:w-18 h-14 sm:h-18 md:h-27 lg:h-18">
              <Image src="/img/money-back.png" alt="money back" layout="fill" objectFit="fill" />
            </div>
            <div className="block relative w-[4.8rem] sm:w-30 md:w-[11.34rem] lg:w-30 h-7 sm:h-11 md:h-[4.125rem] lg:h-11">
              <Image src="/img/gdpr-compliant.png" alt="gdpr compliant" layout="fill" objectFit="fill" />
            </div>
          </div>
          <div className="flex justify-between items-center w-full h-4 sm:h-6 md:h-9 lg:h-6 px-[1.35rem] lg:px-0">
            <div className="block relative w-[1.6rem] sm:w-[2.4rem] md:w-[3.6rem] lg:w-[2.4rem] h-4 sm:h-6 md:h-9 lg:h-6">
              <Image src="/img/visa.png" alt="visa" layout="fill" objectFit="fill" />
            </div>
            <div className="block relative w-[1.6rem] sm:w-[2.4rem] md:w-[3.6rem] lg:w-[2.4rem] h-4 sm:h-6 md:h-9 lg:h-6">
              <Image src="/img/mastercard.png" alt="mastercard" layout="fill" objectFit="fill" />
            </div>
            <div className="block relative w-[1.6rem] sm:w-[2.4rem] md:w-[3.6rem] lg:w-[2.4rem] h-4 sm:h-6 md:h-9 lg:h-6">
              <Image src="/img/americ-express.png" alt="american express" layout="fill" objectFit="fill" />
            </div>
            <div className="block relative w-[1.6rem] sm:w-[2.4rem] md:w-[3.6rem] lg:w-[2.4rem] h-4 sm:h-6 md:h-9 lg:h-6">
              <Image src="/img/discover.png" alt="discover" layout="fill" objectFit="fill" />
            </div>
            <div className="block relative w-[3.6rem] sm:w-22 md:w-[8.2rem] lg:w-22 h-4 sm:h-6 md:h-9 lg:h-6">
              <Image src="/img/stripe.png" alt="stripe" layout="fill" objectFit="fill" />
            </div>
            <div className="block relative w-[2.44rem] sm:w-[3.65rem] md:w-22 lg:w-[3.65rem] h-4 sm:h-6 md:h-9 lg:h-6">
              <Image src="/img/paypal.png" alt="paypal" layout="fill" objectFit="fill" />
            </div>
            <div className="block relative w-[2.8rem] sm:w-[4.2rem] md:w-25 lg:w-[4.2rem] h-4 sm:h-6 md:h-9 lg:h-6">
              <Image src="/img/mcafee.png" alt="mcafee" layout="fill" objectFit="fill" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex"></div>
    </footer>
  );
};
export default Footer;
