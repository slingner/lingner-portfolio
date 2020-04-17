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

  &:focus {
    outline: none;
  }

  div {
    filter: invert(0.7);
    /* clip-path: fill-box(95%); */
    /* box-shadow: 2px 3px 5px 0px rgba(240, 240, 240, 0.2); */
    mix-blend-mode: color-dodge;
    /* padding: 10px; */
    width: 1.5rem;
    height: 0.5em;
    background-color: ${colors.white};
    border-radius: 1px;
    transition: all 0.3s linear;
    /* position: fixed; */
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      background: ${({ open }) => (open ? colors.white : colors.white)};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      background: ${({ open }) => (open ? colors.white : colors.white)};
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
