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
import FolkulPng from './folkul.png';

export default function Folkul() {
  return (
    <ContentWrapper style={{ backgroundColor: '#7cbabf' }}>
      <LinkWrap
        href="https://folkul.now.sh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Live Link to Scott Lingner's Folkul App "
      >
        <FolkulLogo1 aria-label="Logo and Link to Scott Lingner's Folkul App" />
      </LinkWrap>
      <ProjectSubHeader>A Thought-Sharing Social Network</ProjectSubHeader>
      <StyledP style={{ color: colors.darkergrey }}>
        Folkul is a place where you can privately gather your thoughts - this
        can be small ideas to the next greatest invention. You can connect to
        other users and then share this idea with them - getting criticism,
        feedback and overall collaboration.
      </StyledP>
      <img
        src={FolkulPng}
        alt="Scott Lingner Filter App Screenshot"
        style={{ height: 'auto', width: '60%', margin: 'auto' }}
      />
      <TechWrapper>
        <LinkWrap
          href="https://github.com/kraigwilliams/motive-client"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="Github Link to Scott Lingner's Folkul App "
        >
          <p
            aria-label="Github Text and Link to Scott Lingner's Folkul App"
            className="linktext"
          >
            Github
          </p>
        </LinkWrap>
        <LinkWrap
          href="https://folkul.now.sh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Live Link to Scott Lingner's Folkul App"
        >
          <p
            aria-label="Live Link and text to Scott Lingner's Folkul App"
            className="linktext"
          >
            Live
          </p>
        </LinkWrap>
      </TechWrapper>

      <TechWrapper>
        <ReactLogo aria-label="React Logo" />
        <StyledComponentsLogo1 aria-label="Styled Components Logo" />
        <PostgresLogo2 aria-label="PostgreSQL Logo" />
        <NodeLogo aria-label="Node.js Logo" />
      </TechWrapper>
    </ContentWrapper>
  );
}
