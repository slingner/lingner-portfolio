/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components/macro';
import { colors } from '../constants';
import { GithubButton, EmailButton, LinkedInButton } from '../Button/Button';

export const StyledFooter = styled.footer`
  display: none;

  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    text-align: left;
    margin-left: 20px;
    bottom: 0;
    z-index: 20;
  }
`;

export const LinkWrap = styled.a`
  color: black;
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
  background-color: ${colors.white};
  margin-left: 28px;
`;

const Footer = () => (
  <StyledFooter>
    <StyledLine />
    <LinkWrap
      href="https://github.com/slingner"
      rel="noreferrer noopener"
      target="_blank"
    >
      <GithubButton />
    </LinkWrap>

    <LinkWrap
      href="https://www.linkedin.com/in/scott-lingner/"
      rel="noreferrer noopener"
      target="_blank"
    >
      <LinkedInButton />
    </LinkWrap>

    <LinkWrap
      href="mailto: slingner@gmail.com"
      rel="noreferrer noopener"
      target="_blank"
    >
      <EmailButton />
    </LinkWrap>
    <StyledLine />
  </StyledFooter>
);

export default Footer;
