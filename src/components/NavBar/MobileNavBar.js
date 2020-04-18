/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/macro';
import { colors } from '../constants';
import Navigation from './Navigation';

const MobileNav = styled.nav`
  display: block;
  background-color: ${colors.darkgrey};
  height: 100%;
  width: 100%;
  text-align: center;
  color: white;
`;

const MobileNavBar = (props) => {
  return (
    <MobileNav displayMobileNavBar={props.displayMobileNavBar}>
      <p
        style={{
          padding: '20px',
          textAlign: 'left',
          borderBottom: '1px solid white',
          // borderWidth: '10px',
        }}
      >
        SCOTT LINGNER
      </p>

      <Navigation
        toggleNav={props.toggleNav}
        direction="column"
        color={colors.white}
      />
    </MobileNav>
  );
};

export default MobileNavBar;
