/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/macro';
import { colors } from '../constants';
import Navigation from './Navigation';

const MobileNav = styled.nav`
  display: flex;
  /* flex-direction: column; */
  background-color: ${colors.darkgrey};
  z-index: 15;
  height: 100%;
  text-align: center;
  color: white;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileNavBar = (props) => {
  return (
    <MobileNav displayMobileNavBar={props.displayMobileNavBar}>
      <p style={{ margin: '20px', textAlign: 'left' }}>SCOTT LINGNER</p>

      <Navigation
        toggleNav={props.toggleNav}
        direction="column"
        color={colors.white}
      />
    </MobileNav>
  );
};

export default MobileNavBar;
