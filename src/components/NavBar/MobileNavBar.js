/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/macro';
import { colors } from '../constants';
import Navigation from './Navigation';

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkgrey};
  height: 100vh;
  text-align: center;
  color: white;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledLine = styled.div`
  height: 1px;
  width: 10px;
`;

const MobileNavBar = (props) => {
  return (
    <MobileNav
      onClick={props.toggleNav}
      displayMobileNavBar={props.displayMobileNavBar}
      classNames="fade"
    >
      <p style={{ margin: '20px', textAlign: 'left' }}>SCOTT LINGNER</p>

      <Navigation direction="column" color={colors.white} />
    </MobileNav>
  );
};

export default MobileNavBar;
