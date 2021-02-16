import React from 'react';
import { FrenchMoiLogo2 } from '../Work/Work.style';
import { ReactLogo, CssLogo, NodeLogo, TechWrapper } from '../Button/Button';
import { colors } from '../constants';
import {
  ContentWrapper,
  ProjectSubHeader,
  LinkWrap,
  PostgresLogo2,
  StyledP,
  PageHeader,
} from '../Work/Work.style';

export default function FrenchMoi() {
  return (
    <ContentWrapper
      style={{
        backgroundColor: '#3a5e8c',
        paddingBottom: '0px',
        marginBottom: '-.5px',
        fill: colors.white,
      }}
    >
      <LinkWrap
        href='https://frenchmoi.now.sh/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label="Live Link to Scott Lingner's French Moi Spaced Repetition App "
      >
        <FrenchMoiLogo2 aria-label="Logo of Scott Lingner's French Moi App" />
      </LinkWrap>

      <ProjectSubHeader style={{ color: colors.white }}>
        A French Language Learning Platform
      </ProjectSubHeader>

      <StyledP style={{ color: colors.white }}>
        French Moi is an app that utilizes spaced repetition to help users
        memorize French words.
      </StyledP>

      <TechWrapper>
        <LinkWrap
          href='https://github.com/thinkful-ei-jaguar/FrenchMe-Client-Robert-Scott'
          rel='noreferrer noopener'
          target='_blank'
          aria-label="Github Link to Scott Lingner's French Moi Spaced Repetition App "
        >
          <p
            className='linktext'
            aria-label="Link To Scott Lingner's Github For French Moi App"
            style={{ color: colors.white, border: '1px solid white' }}
          >
            Github
          </p>
        </LinkWrap>

        <LinkWrap
          href='https://frenchmoi.now.sh/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label="Live Link to Scott Lingner's French Moi Spaced Repetition App"
        >
          {' '}
          <p
            className='linktext'
            aria-label="Link To Scott Lingner's French Moi Live App"
            style={{ color: colors.white, border: '1px solid white' }}
          >
            Live
          </p>
        </LinkWrap>
      </TechWrapper>

      <TechWrapper>
        <ReactLogo aria-label='React logo' style={{ color: colors.white }} />
        <CssLogo aria-label='Css Logo' style={{ color: colors.white }} />
        <PostgresLogo2 aria-label='PostgreSQL' />
        <NodeLogo aria-label='Node.js Logo' style={{ color: colors.white }} />
      </TechWrapper>

      <PageHeader id='about' style={{ color: colors.white }}>
        About
      </PageHeader>
    </ContentWrapper>
  );
}
