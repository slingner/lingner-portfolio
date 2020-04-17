import React from 'react';
import { PageWrapper, PageHeader } from './Work.style';
import { colors } from '../constants';
import Folkul from '../Folkul/Folkul';
import Filter from '../Filter/Filter';
import FrenchMoi from '../FrenchMoi/FrenchMoi';
import About from '../About/About';

export default function Work() {
  return (
    <PageWrapper>
      <PageHeader>Projects</PageHeader>
      <Folkul />
      <Filter />
      <FrenchMoi />
      <PageHeader>About</PageHeader>
      <About />
    </PageWrapper>
  );
}
