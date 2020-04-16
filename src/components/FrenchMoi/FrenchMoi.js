import React from 'react';
import { FrenchMoiLogo2 } from '../Work/Work.style';
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
  ContentWrapper,
  ProjectSubHeader,
  Image,
  LinkWrap,
} from '../Work/Work.style';
import dashboard from '../Work/Assets/DASHBOARD.gif';

export default function FrenchMoi() {
  return (
    <ContentWrapper style={{ backgroundColor: colors.lightblue }}>
      <FrenchMoiLogo2 />
      <ProjectSubHeader>
        Learn French through spaced-repetition learning
      </ProjectSubHeader>
      <LinkWrap
        href="https://folkul.now.sh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to Scott Lingner's Folkul Application"
      >
        <Image
          src={dashboard}
          alt="Folkul-Gif"
          aria-label="Gif of Scott Lingner's Folkul Application => links to live site"
        />
      </LinkWrap>
      <p></p>
      <p>
        Front-end: React.js, CSS, media queries Server: PostgreSQL Hosting/SaaS:
        Heroku Development Environment: Zeit Now Testing: Cypress, Mocha, Chai
      </p>
      <TechWrapper>
        <ReactLogo />
        <CssLogo />
        <NodeLogo />
      </TechWrapper>

      <TechWrapper>
        <LinkWrap
          href="https://github.com/thinkful-ei-jaguar/FrenchMe-Client-Robert-Scott"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="Github Link to Scott Lingner's French Moi Spaced Repetition App "
        >
          <GithubButton style={{ color: colors.darkgrey }} />
        </LinkWrap>
        <LinkWrap
          href="https://folkul.now.sh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Live Link to Scott Lingner's Folkul App "
        >
          <LiveLinkButton style={{ color: colors.darkgrey }} />
        </LinkWrap>
      </TechWrapper>
    </ContentWrapper>
  );
}
