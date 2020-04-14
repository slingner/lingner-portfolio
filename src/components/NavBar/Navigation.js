import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../constants';

const NavLinks = styled.ul`
  list-style: none;
  color: ${props => props.color ? props.color : colors.white};
  align-items: center;
  justify-content:flex-end;
  margin-right: 0px;
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'column'};
  padding: 0;

`;

const NavItem = styled(Link)`
  color: ${props => props.color ? props.color : colors.darkgrey};
  text-decoration: none;
  margin-right: 0px;
  font-size: 16px;
  padding: 15px;
  margin-left: ${props => props ? props.marginLeft : '0px'};
  
  :hover{
    cursor: pointer;
    color: ${colors.blue}
  }
`;

const Navigation = (props) => {
  return (
    <NavLinks direction={props.direction}>

        <li className='nav-links' color={props.color}>
          <NavItem to='/about' color={props.color}>
            About
          </NavItem>
        </li>

        <li className='nav-links' color={props.color}>
          <NavItem to='/work' color={props.color}>
            Work
          </NavItem>
        </li>

        <li className='nav-links' color={props.color}>
          <NavItem to='/contact' color={props.color}>
            Contact
          </NavItem>
        </li>
        
      </NavLinks>
  );
};

export default Navigation;