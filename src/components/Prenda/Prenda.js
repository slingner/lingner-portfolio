import React from 'react';
import { colors } from '../constants';
import {
  ContentWrapper,
  ProjectSubHeader,
  LinkWrap,
  StyledP,
  Image,
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
        <Image src={Prenda} alt='prenda logo' />
      </LinkWrap>
      <ProjectSubHeader>Empowering Learners</ProjectSubHeader>
      <StyledP style={{ color: colors.darkergrey }}>
        As a Software Developer for Prenda, I build products that inspire and
        motivate.
      </StyledP>
    </ContentWrapper>
  );
}
