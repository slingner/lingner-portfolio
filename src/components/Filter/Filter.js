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
// import dashboard from '../Work/Assets/DASHBOARD.gif';
import filter from './Assets/filter.png';

export default function Filter() {
  return (
    <ContentWrapper style={{ backgroundColor: colors.coral }}>
      <FilterLogo1 />
      <ProjectSubHeader>A Coffee Bean Exploration Application</ProjectSubHeader>
      <StyledP>
        A full-stack application giving you the opportunity to explore coffee
        beans that are responsibly sourced from crops around the world.{' '}
      </StyledP>
      <TechWrapper>
        <LinkWrap
          href="https://github.com/slingner/filter-client"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="Github Link to Scott Lingner's Filter Coffee Bean App "
        >
          <GithubButton style={{ color: colors.darkgrey }} />
        </LinkWrap>
        <LinkWrap
          href="https://github.com/slingner/filter-client"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Scott Lingner Github Repo of his Filter App Project "
        >
          <LiveLinkButton style={{ color: colors.darkgrey }} />
        </LinkWrap>
      </TechWrapper>
      <LinkWrap
        href="https://folkul.now.sh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to Scott Lingner's Folkul Application"
      >
        <Image
          src={filter}
          alt="Filter-Screenshot"
          aria-label="Screenshot of Scott Lingner's Filter Application"
        />
      </LinkWrap>

      {/* <p>
        Stack includes React.js, CSS, Node.js, Express.js, PostgreSQL, Enzyme,
        Mocha, Chai.
      </p> */}
      <TechWrapper>
        <ReactLogo />
        <CssLogo />
        <PostgresLogo1 />
        <NodeLogo />
      </TechWrapper>
    </ContentWrapper>
  );
}
