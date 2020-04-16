import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* position: absolute; */
  width: 2rem;
  height: 2.2em;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-left: 10px;

  &:focus {
    outline: none;
  }

  div {
    /* padding: 10px; */
    width: 1.5rem;
    height: 0.5em;
    background-color: ${colors.darkgrey};
    border-radius: 1px;
    transition: all 0.3s linear;
    /* position: fixed; */
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      background: ${({ open }) => (open ? colors.white : colors.darkgrey)};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      background: ${({ open }) => (open ? colors.white : colors.darkgrey)};
    }
  }
`;

const Burger = (props) => {
  return (
    <StyledBurger open={props.open}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
