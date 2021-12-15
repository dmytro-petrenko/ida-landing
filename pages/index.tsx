import type { NextPage } from 'next';
import React, { useState } from 'react';
// import Head from 'next/head'
import Layout from '../src/components/Layout';
import MainBanner from '../src/components/MainBanner';
import Facility from '../src/components/Facility';
import Quiz from '../src/components/Quiz';
import IntroIDP from '../src/components/IntroIDP';
import SelectLangCurrency from '../src/components/Modals/SelectLangCurrency';
import ThreeDocsForAbroad from '../src/components/ThreeDocsForAbroad';
import IdpInCountries from '../src/components/IdpInCountries';
import GetIdp from '../src/components/GetIdp';
import SearchDestination from '../src/components/SearchDestination';
import TrustPilotInfo from '../src/components/TrustPilotInfo';
import Faq from '../src/components/Faq';
import Donation from '../src/components/Donation';

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const modalLangCurrHandler = (): void => {
    setOpenModal(true);
    console.log('Open modal!');
  };
  const closeModal = (): void => {
    setOpenModal(false);
  };

  return (
    <div>
      <Layout modalLangCurrHandler={modalLangCurrHandler}>
        <MainBanner />
        <Facility />
        <Quiz />
        <IntroIDP />
        <ThreeDocsForAbroad />
        <IdpInCountries />
        <GetIdp />
        <SearchDestination />
        <TrustPilotInfo />
        <Faq />
        <Donation />
      </Layout>
      <SelectLangCurrency isOpenModal={openModal} controlModal={closeModal} />
    </div>
  );
};

export default Home;
