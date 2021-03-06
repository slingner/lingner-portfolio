/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components/macro';
import { colors } from '../constants';

import { ReactComponent as FokulLogo } from './Assets/FOLKUL_1.svg';
import { ReactComponent as FilterLogo } from './Assets/filter.svg';
import { ReactComponent as FrenchMoi } from './Assets/frenchmoi.svg';
import { ReactComponent as PostgresLogo } from './Assets/postgresql.svg';
import { ReactComponent as StyledComponentsLogo } from './Assets/styled-components.svg';
import { keyframes } from 'styled-components';
import { flipOutX } from 'react-animations';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledP = styled.p`
  margin: auto;
  width: 88%;
  font-size: 20px;
  line-height: 28px;

  @media (min-width: 600px) {
    width: 38%;
    font-size: 28px;
  }

  @media all and (device-width: 768px) and (device-height: 1024px) and (orientation: portrait) {
    width: 60%;
  }

  @media all and (device-width: 1024px) and (device-height: 768px) and (orientation: landscape) {
    width: 60%;
  }

  @media all and (device-width: 1024px) and (device-height: 1366px) and (orientation: portrait) {
    width: 60%;
  }
  @media all and (device-width: 1366px) and (device-height: 1024px) and (orientation: landscape) {
    width: 60%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  text-align: center;
  > p {
    font-size: 21px;
  }
`;

export const PageHeader = styled.h1`
  font-family: 'Raleway', sans-serif;
  align-items: center;
  letter-spacing: 4px;
  background-color: transparent;
  color: ${colors.darkergrey};
  text-align: center;
  font-size: 60px;
  font-style: bolder;
  margin-bottom: -14px;
  padding-top: 20px;
  z-index: 15;

  @media (min-width: 600px) {
    text-align: left;
    width: 80%;
    background-color: transparent;
    color: ${colors.darkergrey};
    font-size: 80px;
    padding-left: 65px;
    margin-bottom: -19px;
    z-index: 15;
  }
`;

export const ProjectSubHeader = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: ${colors.darkergrey};
  margin: auto;
  padding-bottom: 20px;
  width: 85%;

  @media (min-width: 600px) {
    width: 40%;
    height: auto;
    font-size: 25px;
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

export const PrendaImage = styled.img`
  border-radius: 5px;
  width: 65%;

  @media (min-width: 600px) {
    width: 30%;
    height: auto;
  }
`;

export const FolkulLogo1 = (props) => {
  return (
    <>
      <FokulLogo
        aria-label="Folkul Logo - Scott Lingner's App"
        className='logo'
        style={{
          width: '40%',
          alignSelf: 'center',
          fill: colors.darkgrey,
          paddingBottom: '1%',
          paddingTop: '4%',
          maxHeight: '200px',
          minHeight: '100px',
        }}
      />
    </>
  );
};

export const FilterLogo1 = (props) => {
  return (
    <FilterLogo
      aria-label="Filter Logo -- Scott Lingner's App"
      className='logo'
      style={{
        width: '30%',
        alignSelf: 'center',
        fill: colors.darkgrey,
        paddingTop: '4%',
        paddingBottom: '1%',
        maxHeight: '250px',
        minHeight: '100px',
      }}
    />
  );
};

export const FrenchMoiLogo2 = (props) => {
  return (
    <>
      <FrenchMoi
        aria-label="Filter Logo -- Scott Lingner's App"
        style={{
          width: '45%',
          alignSelf: 'center',
          fill: '#e3ccdc',
          paddingBottom: '1%',
          paddingTop: '4%',
          maxHeight: '200px',
          minHeight: '100px',
        }}
      />
    </>
  );
};

export const PostgresLogo1 = (props) => {
  return (
    <>
      <PostgresLogo
        aria-label='Postgres Logo'
        style={{
          width: '40px',
          fill: colors.white,
          padding: '2',
        }}
      />
    </>
  );
};
export const PostgresLogo2 = (props) => {
  return (
    <>
      <PostgresLogo
        aria-label='Postgres Logo'
        style={{
          width: '40px',
          fill: colors.white,
          padding: '2',
        }}
      />
    </>
  );
};

export const StyledComponentsLogo1 = (props) => {
  return (
    <>
      <StyledComponentsLogo
        aria-label='Styled Components Logo'
        style={{
          width: '65px',
          paddingLeft: '5px',
          paddingRight: '5px',
          fill: colors.white,
        }}
      />
    </>
  );
};

const flipOutXAnimation = keyframes`${flipOutX}`;

export const LinkWrap = styled.a`
  text-decoration: none;
  .linktext {
    color: ${colors.darkergrey};
    padding: 6px 6px;
    border: 1px solid ${colors.darkergrey};
    width: 130px;
    margin: 5px 5px;

    :hover {
      animation: 0.5s ${flipOutXAnimation};
    }
  }
`;
