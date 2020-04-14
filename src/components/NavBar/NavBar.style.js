import styled from "styled-components/macro";
import { colors } from "../constants";
import { Link } from "react-router-dom";

export const NavWrapper = styled.header`
  /* border-bottom: 1px solid ${colors.coral}; */
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  justify-content: center; 
  overflow: hidden;
  position: sticky;
  top: 0;
  background-color: ${colors.offwhite};
  /* height: 60px; */
  /* .mobile {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 40px;

  } */
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
  background: transparent;
  border: none;
  display: none;
  /* align-self: left; */
  /* align-content: center; */
  /* margin: 0px auto; */
  margin-top: 15px;

  @media screen and (max-width: 768px) {
    display: block;
    height: 40px;
  }

  :hover {
    cursor: pointer;
  }
`;
