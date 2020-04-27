/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components/macro';
import { colors } from '../constants';
import {
  GithubButton,
  EmailButton,
  LinkedInButton,
  AngelListButton,
} from '../Button/Button';

export const StyledFooter = styled.footer`
  display: none;

  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    text-align: center;
    margin-left: 20px;
    align-items: center;
    bottom: 0;
    z-index: 20;
  }
`;

export const LinkWrap = styled.a`
  list-style-type: none;
  color: ${colors.white};
  padding: 3px;
  font-size: 22px;
  text-align: center;
  padding-top: 20px;

  @media (min-width: 600px) {
    /* margin-right: 80px; */
    font-size: 32px;
  }

  :hover {
    cursor: pointer;
    color: ${colors.blue};
  }

  :visited {
    color: ${colors.slategrey};
  }

  :focus {
    color: ${colors.blue};
  }
`;

export const StyledLine = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
  width: 1px;
  padding: 2px;
  background-color: ${colors.white};
  /* margin-left: 23px; */
  margin-top: 5px;
`;

const Footer = () => (
  <StyledFooter>
    <StyledLine />
    <LinkWrap
      href="mailto: slingner@gmail.com"
      rel="noreferrer noopener"
      target="_blank"
      aria-label="Link To Scott Lingner's Email"
    >
      <EmailButton aria-label="Envelope Logo Link To Scott Lingner's Email" />
    </LinkWrap>
    <LinkWrap
      href="https://angel.co/u/scott-lingner"
      rel="noreferrer noopener"
      target="_blank"
      aria-label="Link To Scott Lingner's Angel List"
    >
      <AngelListButton aria-label="Link To Scott Lingner's Angel List" />
    </LinkWrap>
    <LinkWrap
      href="https://www.linkedin.com/in/scott-lingner/"
      rel="noreferrer noopener"
      target="_blank"
      aria-label="Link To Scott Lingner's LinkedIn"
    >
      <LinkedInButton aria-label="Link To Scott Lingner's LinkedIn" />
    </LinkWrap>
    <LinkWrap
      href="https://github.com/slingner"
      rel="noreferrer noopener"
      target="_blank"
      style={{ marginBottom: '5px' }}
      aria-label="Link To Scott Lingner's Github"
    >
      <GithubButton aria-label="Link To Scott Lingner's Github" />
    </LinkWrap>

    <StyledLine />
  </StyledFooter>
);

export default Footer;
