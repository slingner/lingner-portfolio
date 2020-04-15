/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { colors } from '../constants';

const NavLinks = styled.ul`
  list-style: none;
  color: ${(props) => (props.color ? props.color : colors.white)};
  /* align-items: flex-end; */
  /* justify-content: flex-end; */
  /* margin: auto; */
  margin-right: 30px;
  margin-top: 80px;
  text-align: right;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
`;

const NavItem = styled(Link)`
  color: ${(props) => (props.color ? props.color : colors.darkgrey)};
  text-decoration: none;
  margin: 0px auto;
  font-size: 40px;
  font-family: 'Raleway', sans-serif;
  margin-left: ${(props) => (props ? props.marginLeft : '0px')};

  :hover {
    cursor: pointer;
    color: ${colors.blue};
    /* box-shadow: 4px 2px 5px 1px rgba(140, 140, 140, 0.85); */
  }
`;

const Navigation = (props) => {
  return (
    <NavLinks direction={props.direction}>
      <li className="nav-links" color={props.color}>
        <NavItem onClick={props.toggleNav} to="/about" color={props.color}>
          ABOUT
        </NavItem>
      </li>

      <li className="nav-links" color={props.color}>
        <NavItem onClick={props.toggleNav} to="/work" color={props.color}>
          WORK
        </NavItem>
      </li>

      <li className="nav-links" color={props.color}>
        <NavItem onClick={props.toggleNav} to="/contact" color={props.color}>
          CONTACT
        </NavItem>
      </li>
    </NavLinks>
  );
};

export default Navigation;
