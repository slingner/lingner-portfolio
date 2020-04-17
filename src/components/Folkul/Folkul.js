import React from 'react';
import { FolkulLogo1 } from '../Work/Work.style';
import {
  ReactLogo,
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
  PostgresLogo1,
  StyledComponentsLogo1,
  StyledP,
} from '../Work/Work.style';
import dashboard from '../Work/Assets/DASHBOARD.gif';

export default function Folkul() {
  return (
    <ContentWrapper style={{ backgroundColor: colors.offwhite }}>
      <FolkulLogo1 />

      <ProjectSubHeader>A Thought-Sharing Social Network</ProjectSubHeader>
      <StyledP>
        Folkul is a place where you can privately gather your thoughts - this
        can be small ideas to the next greatest invention. You can connect to
        other users and then share this idea with them - getting criticism,
        feedback and overall collaboration.
      </StyledP>

      <TechWrapper>
        <LinkWrap
          href="https://github.com/kraigwilliams/motive-client"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="Github Link to Scott Lingner's Folkul App "
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
          src={dashboard}
          alt="Folkul-Gif"
          aria-label="Gif of Scott Lingner's Folkul Application => links to live site"
        />
      </LinkWrap>

      <TechWrapper>
        <ReactLogo />
        <StyledComponentsLogo1 />
        <PostgresLogo1 />
        <NodeLogo />
      </TechWrapper>
    </ContentWrapper>
  );
}
