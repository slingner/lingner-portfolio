import React from 'react';
import { FolkulLogo1 } from '../Work/Work.style';
import { ReactLogo, NodeLogo, TechWrapper } from '../Button/Button';
import { colors } from '../constants';
import {
  ContentWrapper,
  ProjectSubHeader,
  LinkWrap,
  PostgresLogo2,
  StyledComponentsLogo1,
  StyledP,
} from '../Work/Work.style';

export default function Folkul() {
  return (
    <ContentWrapper style={{ backgroundColor: '#7cbabf' }}>
      <LinkWrap
        href="https://folkul.now.sh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Live Link to Scott Lingner's Folkul App "
      >
        <FolkulLogo1 />
      </LinkWrap>
      <ProjectSubHeader>A Thought-Sharing Social Network</ProjectSubHeader>
      <StyledP style={{ fontSize: '20px', color: colors.darkgrey }}>
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
          <p className="linktext">Github</p>
        </LinkWrap>
        <LinkWrap
          href="https://folkul.now.sh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Live Link to Scott Lingner's Folkul App "
        >
          {/* <LiveLinkButton style={{ color: colors.darkgrey }} /> */}
          <p className="linktext">Live</p>
        </LinkWrap>
      </TechWrapper>

      <TechWrapper>
        <ReactLogo />
        <StyledComponentsLogo1 />
        <PostgresLogo2 />
        <NodeLogo />
      </TechWrapper>
    </ContentWrapper>
  );
}
