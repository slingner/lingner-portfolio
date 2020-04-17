/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components/macro';
import { colors } from '../constants';
import { ReactComponent as FokulLogo } from './Assets/FOLKUL_1.svg';
import { ReactComponent as FilterLogo } from './Assets/filter.svg';
import { ReactComponent as FrenchMoi } from './Assets/frenchmoi.svg';
import { ReactComponent as PostgresLogo } from './Assets/postgresql.svg';
import { ReactComponent as StyledComponentsLogo } from './Assets/styled-components.svg';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledP = styled.p`
  margin: auto;
  width: 60%;

  @media (min-width: 600px) {
    width: 40%;
    line-height: 24px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  /* background-color: ${({ bgcolor }) =>
    bgcolor ? bgcolor : colors.slategrey}; */
  text-align: center;
  > p {
    font-size: 16px;
    /* padding: 1.5%; */
  }
`;

export const PageHeader = styled.h1`
  /* font-size: fit-content; */
  align-items: center;
  letter-spacing: 4px;
  background-color: ${colors.darkergrey};
  color: ${colors.white};
  text-align: center;
  font-size: 60px;
  font-style: bolder;

  /* padding: 40px; */

  @media (min-width: 600px) {
    text-align: left;
    width: 80%;
    background-color: transparent;
    color: ${colors.darkergrey};
    /* height: auto; */
    font-size: 80px;
    padding-left: 65px;
    /* padding: 55px; */
    margin-bottom: -19px;
    z-index: 15;
  }
`;

export const ProjectSubHeader = styled.h3`
  font-size: 18px;
  color: ${colors.darkgrey};
  margin: auto;
  padding-bottom: 20px;
  width: 60%;

  @media (min-width: 600px) {
    width: 40%;
    height: auto;
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 95%;

  @media (min-width: 600px) {
    width: 50%;
    height: auto;
  }
`;

export const FolkulLogo1 = (props) => {
  return (
    <>
      <FokulLogo
        aria-label="Folkul Logo - Scott Lingner's App"
        className="logo"
        style={{
          width: '30%',
          alignSelf: 'center',
          fill: colors.darkgrey,
          paddingBottom: '40px',
          paddingTop: '35px',
        }}
      />
    </>
  );
};

export const FilterLogo1 = (props) => {
  return (
    <>
      <FilterLogo
        aria-label="Filter Logo -- Scott Lingner's App"
        className="logo"
        style={{
          width: '20%',
          alignSelf: 'center',
          fill: colors.darkgrey,
          paddingBottom: '20px',
          paddingTop: '35px',
        }}
      />
    </>
  );
};

export const FrenchMoiLogo2 = (props) => {
  return (
    <>
      <FrenchMoi
        aria-label="Filter Logo -- Scott Lingner's App"
        className="logo"
        style={{
          width: '45%',
          alignSelf: 'center',
          fill: colors.black,
          paddingBottom: '20px',
          paddingTop: '35px',
        }}
      />
    </>
  );
};

export const PostgresLogo1 = (props) => {
  return (
    <>
      <PostgresLogo
        aria-label="Postgres Logo"
        style={{
          width: '40px',
          // paddingLeft: '5px',
          // paddingRight: '5px',
          fill: colors.white,
        }}
      />
    </>
  );
};
export const PostgresLogo2 = (props) => {
  return (
    <>
      <PostgresLogo
        aria-label="Postgres Logo"
        style={{
          width: '40px',
          // paddingLeft: '5px',
          // paddingRight: '5px',
          fill: colors.darkgrey,
        }}
      />
    </>
  );
};

export const StyledComponentsLogo1 = (props) => {
  return (
    <>
      <StyledComponentsLogo
        aria-label="Styled Components Logo"
        style={{
          width: '80px',
          paddingLeft: '5px',
          paddingRight: '5px',
          fill: colors.white,
        }}
      />
    </>
  );
};

export const LinkWrap = styled.a``;
