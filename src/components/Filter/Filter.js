import React from 'react';
import { ReactLogo, CssLogo, NodeLogo, TechWrapper } from '../Button/Button';

import { colors } from '../constants';
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
        href="https://filter-app.now.sh/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to Scott Lingner's Filter App"
      >
        <FilterLogo1 />
      </LinkWrap>
      <ProjectSubHeader>A Coffee Bean Exploration Application</ProjectSubHeader>
      <StyledP style={{ fontSize: '20px', color: colors.darkgrey }}>
        A user-focused application giving you the opportunity to explore coffee
        beans that are responsibly sourced from crops around the world.{' '}
      </StyledP>
      <TechWrapper>
        <LinkWrap
          href="https://github.com/slingner/filter-client"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="Github Link to Scott Lingner's Filter Coffee Bean App "
        >
          <p className="linktext">Github</p>
        </LinkWrap>
        <LinkWrap
          href="https://filter-app.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Scott Lingner's Filter App"
        >
          <p className="linktext">Live</p>
        </LinkWrap>
      </TechWrapper>

      <TechWrapper>
        <ReactLogo />
        <CssLogo />
        <PostgresLogo1 />
        <NodeLogo />
      </TechWrapper>
    </ContentWrapper>
  );
}
