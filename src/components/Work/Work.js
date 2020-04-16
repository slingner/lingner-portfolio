import React from 'react';
import { PageWrapper, PageHeader } from './Work.style';
import { colors } from '../constants';
import Folkul from '../Folkul/Folkul';
import Filter from '../Filter/Filter';
import FrenchMoi from '../FrenchMoi/FrenchMoi';
import About from '../About/About';

function Work() {
  return (
    <PageWrapper>
      <PageHeader
        style={{
          backgroundColor: colors.darkgrey,
          color: colors.white,
          padding: '40px',
        }}
      >
        Projects
      </PageHeader>
      <Folkul />
      <Filter />
      <FrenchMoi />
      <About />
    </PageWrapper>
  );
}

export default Work;
