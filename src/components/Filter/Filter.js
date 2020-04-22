import React from 'react';
import {
  ReactLogo,
  CssLogo,
  NodeLogo,
  TechWrapper,
  LiveLinkButton,
} from '../Button/Button';
import { GithubButton } from '../Button/Button';
import { colors } from '../constants';
import {
  FilterLogo1,
  ContentWrapper,
  ProjectSubHeader,
  Image,
  LinkWrap,
  PostgresLogo1,
  StyledP,
} from '../Work/Work.style';
import filter from './Assets/filter.png';

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
          {/* <GithubButton style={{ color: colors.darkgrey }} /> */}
          <p className="linktext">Github</p>
        </LinkWrap>
        <LinkWrap
          href="https://filter-app.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Scott Lingner's Filter App"
        >
          {/* <LiveLinkButton style={{ color: colors.darkgrey }} /> */}
          <p className="linktext">Live</p>
        </LinkWrap>
      </TechWrapper>
      {/* <LinkWrap
        href="https://filter-app.now.sh/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to Scott Lingner's Filter Application"
      >
        <Image
          src={filter}
          alt="Filter-Screenshot"
          aria-label="Screenshot of Scott Lingner's Filter Application => links to live App"
        />
      </LinkWrap> */}

      <TechWrapper>
        <ReactLogo />
        <CssLogo />
        <PostgresLogo1 />
        <NodeLogo />
      </TechWrapper>
    </ContentWrapper>
  );
}
