import React from 'react';
import { colors } from '../constants';
import {
  ContentWrapper,
  ProjectSubHeader,
  LinkWrap,
  StyledP,
  PrendaImage,
} from '../Work/Work.style';
import Prenda from './prenda.png';

export default function Folkul() {
  return (
    <ContentWrapper style={{ backgroundColor: '#eee' }}>
      <LinkWrap
        href='https://prendaschool.com'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Live Link to Prenda Inc'
      >
        <PrendaImage src={Prenda} alt='prenda logo' />
      </LinkWrap>
      <ProjectSubHeader>School Reimagined</ProjectSubHeader>
      <StyledP style={{ color: colors.darkergrey }}>
        As a software developer for Prenda, I design and improve products that
        help guide and support learners.
      </StyledP>
    </ContentWrapper>
  );
}
