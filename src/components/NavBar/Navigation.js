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
    font-size: 40px;
  }
`;

const Navigation = (props) => {
  return (
    <NavLinks direction={props.direction}>
      <li className='nav-links' color={props.color}>
        <NavItem
          aria-label='About Link'
          href='#about'
          onClick={props.toggleNav}
          color={props.color}
        >
          ABOUT
        </NavItem>
      </li>

      <li className='nav-links' color={props.color}>
        <NavItem
          href='#work'
          aria-label='Projects Link'
          onClick={props.toggleNav}
          color={props.color}
        >
          WORK
        </NavItem>
      </li>

      <li className='nav-links' color={props.color}>
        <NavItem
          aria-label='Contact Link'
          href='#contact'
          onClick={props.toggleNav}
          color={props.color}
        >
          CONTACT
        </NavItem>
      </li>
      <li className='nav-links' color={props.color}>
        <NavItem
          href='https://www.notion.so/Scott-Lingner-Resume-579ea972f8164e11a28af799a0d16a02'
          target='_blank'
          rel='nofollow noopener noreferrer'
          onClick={props.toggleNav}
          color={props.color}
          aria-label='Resume Link'
        >
          RESUME
        </NavItem>
      </li>
    </NavLinks>
  );
};

export default Navigation;
