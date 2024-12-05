import dynamic from 'next/dynamic';
import React, {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Contact from '../components/Sections/Contact';
import Education from '../components/Sections/Education';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Summary from '../components/Sections/Summary';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <Summary />
      <Resume />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </Page>
  );
});
Home.displayName = 'Home';

export default Home;
