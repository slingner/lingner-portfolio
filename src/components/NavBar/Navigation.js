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
  /* padding: 20px; */
  margin-right: 18%;
  margin-top: 20%;
  text-align: right;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
`;

const NavItem = styled(Link)`
  color: ${(props) => (props.color ? props.color : colors.white)};
  text-decoration: none;
  margin: 0px auto;
  font-size: 60px;
  font-family: 'Raleway', sans-serif;

  :hover {
    cursor: pointer;
    color: ${colors.blue};
    /* box-shadow: 4px 2px 5px 1px rgba(140, 140, 140, 0.85); */
  }

  @media (max-width: 374px) {
    text-align: left;
    font-size: 60px;
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
