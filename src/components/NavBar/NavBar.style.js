import styled from 'styled-components/macro';
import { colors } from '../constants';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.header`
  /* border-bottom: 1px solid ${colors.coral}; */
  /* display: flex;
  flex-direction: column; */
  justify-content: center; 
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: white;
  
  .mobile {
    background-color: white;
  }
  /* height: 60px; */
 
`;

export const Logo = styled(Link)`
  font-size: 30px;
  color: ${colors.darkergrey};
  text-decoration: none;
  font-weight: bolder;
  align-self: center;
  margin-top: 7px;

  :hover {
    cursor: pointer;
    color: ${colors.coral};
  }
`;

export const ScottLogo = styled.img`
  width: 45%;

  @media (min-width: 600px) {
    width: 19%;
    height: auto;
  }
`;

export const MenuLink = styled(Link)`
  font-size: 16px;
  color: ${colors.white};
  text-decoration: none;
  margin-left: 25px;
  align-items: flex-end;

  :hover {
    cursor: pointer;
    color: ${colors.coral};
  }
`;

export const MobileButton = styled.div`
  /* background: ${colors.darkgrey}; */
  border: none;
  display: none;
  background-color: white;
  /* align-content: center; */
  /* margin: 0px auto; */
  padding: 15px;
  margin: 10px;

  @media screen and (max-width: 768px) {
    display: inline-block;
    height: 40px;
  }

  :hover {
    cursor: pointer;
  }
`;
