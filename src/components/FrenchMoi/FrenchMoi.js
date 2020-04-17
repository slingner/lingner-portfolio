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
} from '../Work/Work.style';
import frenchmoi from './frenchmoi.png';

export default function FrenchMoi() {
  return (
    <ContentWrapper style={{ backgroundColor: colors.lightblue }}>
      <FrenchMoiLogo2 />
      <ProjectSubHeader>
        Learn French through spaced-repetition learning
      </ProjectSubHeader>
      <StyledP>
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
      <LinkWrap
        href="https://folkul.now.sh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to Scott Lingner's Folkul Application"
      >
        <Image
          src={frenchmoi}
          alt="Folkul-Gif"
          aria-label="Gif of Scott Lingner's Folkul Application => links to live site"
        />
      </LinkWrap>

      <TechWrapper>
        <ReactLogo style={{ color: colors.darkgrey }} />
        <CssLogo style={{ color: colors.darkgrey }} />
        <PostgresLogo2 />
        <NodeLogo style={{ color: colors.darkgrey }} />
      </TechWrapper>
    </ContentWrapper>
  );
}
