import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';
import { colors } from '../constants';

const DesktopNav = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  /* background: ${colors.darkgrey}; */
  color: ${colors.darkgrey};
  font-size: 40px;
  /* z-index: 30; */
  .nav-links{
    margin-left: 20px;

    
  @media screen and (max-width: 768px) {
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    }
  }
  
  .ul {
    display:flex;
    flex-direction: row;
    
  }
`;

const DesktopNavBar = (props) => {
  return (
    <DesktopNav>
      <Navigation />
    </DesktopNav>
  );
};

export default DesktopNavBar;
