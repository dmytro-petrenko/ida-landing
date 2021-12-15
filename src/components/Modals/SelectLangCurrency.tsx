import React, { FC } from 'react';
import SelectCountry from '../UI common/SelectCountry';
import SelectCurrency from '../UI common/SelectCurrency';
import { CloseIcon } from '../../svgs';

interface SelectLangCurrencyProps {
  isOpenModal: boolean;
  controlModal: () => void;
}

const SelectLangCurrency: FC<SelectLangCurrencyProps> = ({ isOpenModal, controlModal }) => {
  return (
    <React.Fragment>
      <div
        className={`fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-900 z-[115] transition duration-500 easy-in-out ${
          isOpenModal ? 'bg-opacity-25' : 'bg-opacity-0 hidden'
        }`}
        onClick={controlModal}
      >
        <div
          className={`w-84 h-87 p-6 bg-gray-50 rounded-md z-[125] ${isOpenModal ? 'bg-opacity-100' : 'bg-opacity-0 hidden'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-row justify-between mb-10 object-contain ">
            <h3 className="font-graphikMedium font-medium text-base leading-5">Preference setting</h3>
            <div className="block w-5 h-5" onClick={controlModal}>
              <CloseIcon classSVG="fill-current text-gray-700" />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="country" className="font-inter fon-medium text-sm text-gray-700">
              Select language
            </label>
            <SelectCountry ID="country" />
          </div>
          <div className="mb-10">
            <label htmlFor="country" className="font-inter fon-medium text-sm text-gray-700">
              Select currency
            </label>
            <SelectCurrency />
          </div>
          <button className="w-full h-12 p-3 bg-primary-500 rounded-md font-inter font-medium text-base text-gray-50 text-center shadow-btn active:shadow-btn-active active:outline-none">
            Apply
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SelectLangCurrency;
