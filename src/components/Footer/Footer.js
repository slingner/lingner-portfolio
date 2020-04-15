/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components/macro';
import { colors } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  position: fixed;
  text-align: left;
  margin-left: 20px;
  bottom: 0;
  z-index: 20;
`;

const GitHub = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props}>
      <FontAwesomeIcon icon={['fab', 'github']} />
    </button>
  );
});

export const GithubButton = styled(GitHub)`
  background: transparent;
  border: none;
  font-size: 30px;
  color: ${colors.white};
  padding: 10px 15px 10px 15px;

  :hover {
    cursor: pointer;
    color: ${colors.blue};
  }

  :visited {
    color: ${colors.teal};
  }

  :focus {
    color: ${colors.blue};
  }
`;

const LinkedIn = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props}>
      <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
    </button>
  );
});

export const LinkedInButton = styled(LinkedIn)`
  background: transparent;
  border: none;
  font-size: 30px;
  color: ${colors.white};
  padding: 10px 15px 10px 15px;

  :hover {
    cursor: pointer;
    color: ${colors.blue};
  }

  :visited {
    color: ${colors.teal};
  }

  :focus {
    color: ${colors.blue};
  }
`;

const Email = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props}>
      <FontAwesomeIcon icon="envelope" />
    </button>
  );
});

export const EmailButton = styled(Email)`
  background: transparent;
  border: none;
  font-size: 30px;
  color: ${colors.white};
  padding: 10px 15px 10px 15px;

  :hover {
    cursor: pointer;
    color: ${colors.blue};
  }

  :visited {
    color: ${colors.teal};
  }

  :focus {
    color: ${colors.blue};
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
