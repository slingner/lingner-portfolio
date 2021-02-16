/* eslint-disable react/prop-types */
import React from 'react';
import { PageWrapper, PageHeader } from './Work.style';
import Prenda from '../Prenda/Prenda';
import Folkul from '../Folkul/Folkul';
import Filter from '../Filter/Filter';
import FrenchMoi from '../FrenchMoi/FrenchMoi';
import About from '../About/About';

export default function Work() {
  return (
    <PageWrapper>
      <PageHeader id='work'>Work</PageHeader>
      <Prenda />
      <Folkul />
      <Filter />
      <FrenchMoi />
      <About />
    </PageWrapper>
  );
}
