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
  PostgresLogo2,
  StyledP,
  PageHeader,
} from '../Work/Work.style';
import frenchmoi from './frenchmoi.png';

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
      <FrenchMoiLogo2 />

      <ProjectSubHeader style={{ color: colors.white }}>
        Learn French through spaced-repetition learning
      </ProjectSubHeader>

      <StyledP style={{ color: colors.white }}>
        French Moi is an app that utilizes spaced-repetition to help users
        memorize French words. The user will have the option to login or signup,
        and then will be directed to a dashboard displaying their total correct
        answers, a list of French words to memorize, as well as the overall
        number count for correct and incorrect answers.
      </StyledP>

      <TechWrapper>
        <LinkWrap
          href="https://github.com/thinkful-ei-jaguar/FrenchMe-Client-Robert-Scott"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="Github Link to Scott Lingner's French Moi Spaced Repetition App "
        >
          <GithubButton style={{ color: colors.white }} />
        </LinkWrap>

        <LinkWrap
          href="https://frenchmoi.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Live Link to Scott Lingner's French Moi Spaced-Repetition App "
        >
          <LiveLinkButton style={{ color: colors.white }} />
        </LinkWrap>
      </TechWrapper>

      <LinkWrap
        href="https://frenchmoi.now.sh/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to Scott Lingner's French Moi Spaced-Repetition Application"
      >
        <Image
          src={frenchmoi}
          alt="FrenchMoi-Screenshot"
          aria-label="Screenshot of Scott Lingner's French Moi Application => links to live site"
        />
      </LinkWrap>

      <TechWrapper>
        <ReactLogo style={{ color: colors.white }} />
        <CssLogo style={{ color: colors.white }} />
        <PostgresLogo2 />
        <NodeLogo style={{ color: colors.white }} />
      </TechWrapper>

      <PageHeader id="about" style={{ color: colors.white }}>
        About
      </PageHeader>
    </ContentWrapper>
  );
}
