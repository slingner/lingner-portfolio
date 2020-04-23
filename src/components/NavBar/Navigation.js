/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/macro';
import { colors } from '../constants';
import { keyframes } from 'styled-components';
import { fadeOutUp } from 'react-animations';

const fadeOutUpAnimation = keyframes`${fadeOutUp}`;

const NavLinks = styled.ul`
  list-style: none;
  color: ${(props) => (props.color ? props.color : colors.white)};
  margin-right: 10%;
  margin-top: 5%;
  text-align: right;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};

  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const NavItem = styled.a`
  color: ${(props) => (props.color ? props.color : colors.white)};
  text-decoration: none;
  margin: 0px auto;
  font-size: 60px;
  font-family: 'Raleway', sans-serif;
  font-display: swap;

  :hover {
    cursor: pointer;
    color: ${colors.blue};
    animation: 0.5s ${fadeOutUpAnimation};
  }

  @media (max-width: 600px) {
    text-align: left;
    font-size: 60px;
  }

  @media (max-width: 374px) {
    text-align: left;
    font-size: 60px;
  }
`;

const Navigation = (props) => {
  return (
    <NavLinks direction={props.direction}>
      <li className="nav-links" color={props.color}>
        <NavItem href="#about" onClick={props.toggleNav} color={props.color}>
          ABOUT
        </NavItem>
      </li>

      <li className="nav-links" color={props.color}>
        <NavItem href="#work" onClick={props.toggleNav} color={props.color}>
          PROJECTS
        </NavItem>
      </li>

      <li className="nav-links" color={props.color}>
        <NavItem href="#contact" onClick={props.toggleNav} color={props.color}>
          CONTACT
        </NavItem>
      </li>
      <li className="nav-links" color={props.color}>
        <NavItem
          href="https://scott-lingner-portfolio.s3-us-west-1.amazonaws.com/ScottLingner_Resume.pdf"
          target="_blank"
          rel="nofollow noopener noreferrer"
          onClick={props.toggleNav}
          color={props.color}
          // style={{
          //   fontSize: '40px',
          //   padding: '8px',
          //   borderBottom: '1px solid white',
          // }}
        >
          RESUME
        </NavItem>
      </li>
    </NavLinks>
  );
};

export default Navigation;
