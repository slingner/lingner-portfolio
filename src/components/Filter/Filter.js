import React from 'react';
import { ReactLogo, CssLogo, NodeLogo, TechWrapper } from '../Button/Button';
import {
  FilterLogo1,
  ContentWrapper,
  ProjectSubHeader,
  LinkWrap,
  PostgresLogo1,
  StyledP,
} from '../Work/Work.style';

export default function Filter() {
  return (
    <ContentWrapper style={{ backgroundColor: '#c77669' }}>
      <LinkWrap
        href='https://filter-app.now.sh/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label="Link to Scott Lingner's Filter App"
      >
        <FilterLogo1 />
      </LinkWrap>
      <ProjectSubHeader>A Coffee Bean Exploration Application</ProjectSubHeader>
      <StyledP style={{ color: 'rgb(35,35,35)' }}>
        A user-focused application giving you the opportunity to explore coffee
        beans that are responsibly sourced from crops around the world.{' '}
      </StyledP>
      {/* <LinkWrap
        href='https://filter-app.now.sh/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label="Link to Scott Lingner's Filter App"
      >
        <img
          src={FilterSvg}
          alt='Scott Lingner Filter App Screenshot'
          style={{ height: 'auto', width: '80%', margin: 'auto' }}
        />
      </LinkWrap> */}
      <TechWrapper>
        <LinkWrap
          href='https://github.com/slingner/filter-client'
          rel='noreferrer noopener'
          target='_blank'
          aria-label="Github Link to Scott Lingner's Filter Coffee Bean App"
        >
          <p
            className='linktext'
            style={{
              color: 'rgb(35,35,35)',
              border: '1px solid rgb(35,35,35)',
            }}
          >
            Github
          </p>
        </LinkWrap>
        <LinkWrap
          href='https://filter-app.now.sh/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label="Link to Scott Lingner's Filter App"
        >
          <p
            aria-label="Link to Scott Lingner's Filter App"
            className='linktext'
            style={{
              color: 'rgb(35,35,35)',
              border: '1px solid rgb(35,35,35)',
            }}
          >
            Live
          </p>
        </LinkWrap>
      </TechWrapper>

      <TechWrapper>
        <ReactLogo aria-label='ReactLogo' />
        <CssLogo aria-label='CssLogo' />
        <PostgresLogo1 aria-label='PostgresLogo' />
        <NodeLogo aria-label='NodeLogo' />
      </TechWrapper>
    </ContentWrapper>
  );
}
