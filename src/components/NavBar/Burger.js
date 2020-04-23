import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 14px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    filter: invert(0.6);
    mix-blend-mode: color-dodge;
    width: 30px;
    height: 6px;
    background-color: ${colors.white};
    border-radius: 1px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      background: ${({ open }) => (open ? colors.black : colors.white)};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      background: ${({ open }) => (open ? colors.black : colors.white)};
    }
  }
`;

const Burger = (props) => {
  return (
    <StyledBurger aria-label="burger menu button" open={props.open}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
