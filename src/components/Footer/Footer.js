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
    margin-right: 80px;
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
  margin-left: 23px;
  margin-top: 5px;
`;

const Footer = () => (
  <StyledFooter id="contact">
    <StyledLine />
    <LinkWrap
      href="mailto: slingner@gmail.com"
      rel="noreferrer noopener"
      target="_blank"
    >
      <EmailButton />
    </LinkWrap>
    <LinkWrap
      href="https://angel.co/u/scott-lingner"
      rel="noreferrer noopener"
      target="_blank"
    >
      <AngelListButton />
    </LinkWrap>
    <LinkWrap
      href="https://www.linkedin.com/in/scott-lingner/"
      rel="noreferrer noopener"
      target="_blank"
    >
      <LinkedInButton />
    </LinkWrap>
    <LinkWrap
      href="https://github.com/slingner"
      rel="noreferrer noopener"
      target="_blank"
      style={{ marginBottom: '5px' }}
    >
      <GithubButton />
    </LinkWrap>

    <StyledLine />
  </StyledFooter>
);

export default Footer;
