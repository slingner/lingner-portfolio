import styled from 'styled-components/macro';
import { colors } from '../constants';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.div`
  justify-content: center;
  height: ${({ open }) => (open ? '100%' : '0')};
  width: ${({ open }) => (open ? '100%' : '0')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 18;
  background: none;

  .mobile {
    background-color: ${({ open }) => (open ? colors.darkgrey : 'none')};
  }

  /* @media screen and (max-width: 768px) {
    width: 0;
    height: 0;
  } */
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
  border: none;
  display: none;
  background: transparent;
  padding: 15px;
  margin: 5px;

  @media screen and (max-width: 768px) {
    display: inline-block;
    height: 40px;
  }

  :hover {
    cursor: pointer;
  }
`;
