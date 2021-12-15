import React, { FC, useState } from 'react';
import { ChevronDown } from '../../svgs';

interface AccordionProps {
  question: string;
  answer: string[];
}

const Accordion: FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const accordHandler = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="block object-contain">
      <span className="block w-full h-px bg-gray-200 my-6"></span>
      <div className="flex justify-between items-center cursor-pointer" onClick={accordHandler}>
        <span className="w-72 sm:w-auto font-inter font-medium text-gray-900 text-left text-base">{question}</span>
        <ChevronDown
          classSVG={`w-3 h-3 fill-current ${isOpen ? 'text-gray-700 transform rotate-180' : 'text-gray-300'}`}
        />
      </div>
      {isOpen && (
        <div className="block mt-4 font-inter font-normal text-gray-500 text-base text-left">
          {answer.map((item, idx) => (
            <p v-for="item in items" className="mr-12 mb-6 last:mb-0" key={idx}>
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
export default Accordion;
