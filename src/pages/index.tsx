import dynamic from 'next/dynamic';
import React, {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Education from '../components/Sections/Education';
import ExperienceTimeline from '../components/Sections/ExperienceTimeline';
import Footer from '../components/Sections/Footer';
import Projects from '../components/Sections/Projects';
import TechSkills from '../components/Sections/TechSkills';
import {homePageMeta} from '../data/data';

// Dynamic imports for client-only components
const Navigation = dynamic(() => import('../components/Sections/Navigation'), {ssr: false});
const DashboardHero = dynamic(() => import('../components/Sections/DashboardHero'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Navigation />
      <DashboardHero />
      <About />
      <TechSkills />
      <ExperienceTimeline />
      <Education />
      <Projects />
      <Footer />
    </Page>
  );
});
Home.displayName = 'Home';

export default Home;
