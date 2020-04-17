import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';
import { colors } from '../constants';

const DesktopNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: ${colors.darkgrey};
  color: ${colors.black};
  z-index: 300px;

  .nav-links {
    margin-left: 10px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const DesktopNavBar = (props) => {
  return (
    <DesktopNav>
      <Navigation direction="row" marginLeft="25px" />
    </DesktopNav>
  );
};

export default DesktopNavBar;
