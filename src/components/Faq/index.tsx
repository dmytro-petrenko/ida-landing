import React, { FC } from 'react';
import Link from 'next/link';
import Accordion from './Accordion';
import { accordionData } from './AccordionData';
import { ArrowRight } from '../../svgs';

const Faq: FC = () => {
  return (
    <div className="block w-auto sm:w-150 lg:w-184 mx-5 sm:mx-auto py-4">
      <h4 className="font-graphikSemi font-semibold text-2xl text-gray-900 msm:text-center mb-6">
        Frequently asked questions
      </h4>
      {accordionData.map((item, idx) => {
        return (
          <React.Fragment key={`${item}+${idx}`}>
            <Accordion question={item.question} answer={item.answer} />
          </React.Fragment>
        );
      })}
      <Link href="#">
        <a className="hidden sm:flex justify-center items-center sm:w-60 sm:h-12 border-1 border-gray-300 rounded-md mt-14 mx-auto shadow-btn active:shadow-btn-active">
          <span className="font-inter font-medium text-base text-gray-700">View full FAQ</span>
          <ArrowRight classSVG="ml-3 stroke-current text-gray-500" />
        </a>
      </Link>
    </div>
  );
};
export default Faq;
