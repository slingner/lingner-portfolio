import styled from 'styled-components';
import { colors } from '../constants';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.header`
  /* background-color: ${colors.darkgrey}; */
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  justify-content: space-between;
  overflow: hidden;

  .mobile {
    display: flex;
    flex-direction: row;
    align-self: center;
    height: 40px;
    width: fit-content;
    justify-items: right;
  }
`;

export const Logo = styled(Link)`
  font-size: 20px;
  color: ${colors.white};
  text-decoration: none;
  font-weight: bolder;
  align-self: center;
  margin-top: 7px;
  
  :hover{
    cursor: pointer;
    fill: ${colors.teal}
  }
`;

export const ScottLogo = styled.img`
  width: 40%;


  @media (min-width: 600px) {
    width: 24%;
    height: auto;
  } 

`;


export const MenuLink = styled(Link)`
  font-size: 16px;
  color: ${colors.white};
  text-decoration: none;
  margin-left: 25px;
  align-self: center;
  

  :hover{
    cursor: pointer;
    color: ${colors.coral}
  }
`;

export const MobileButton = styled.div`
  background: transparent;
  border: none;
  display: none;
  /* justify-content: flex-end; */
  /* align-content: center; */
  margin: auto;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: flex-end;
    
  }

  :hover {
    cursor: pointer;
  }
`;