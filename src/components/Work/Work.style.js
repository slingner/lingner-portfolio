/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components/macro';
import { colors } from '../constants';
import { ReactComponent as FokulLogo } from './Assets/FOLKUL_1.svg';
import { ReactComponent as FilterLogo } from './Assets/filter.svg';
import { ReactComponent as FrenchMoi } from './Assets/frenchmoi.svg';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  /* background-color: ${({ bgcolor }) =>
    bgcolor ? bgcolor : colors.offwhite}; */

  /* @media screen and (min-width: 768px) {
    text-align: left;
  } */

  :hover {
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;
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
  /* color: ${colors.darkergrey}; */
  text-align: center;
  font-size: 4em;
`;

export const ProjectHeader = styled.h2`
  font-size: 3em;
  color: ${colors.offwhite};

  @media screen and (max-width: 768px) {
  }

  :hover {
  }
`;
export const ProjectSubHeader = styled.h3`
  font-size: 18px;
  color: ${colors.darkgrey};
  margin-bottom: 2%;

  @media screen and (max-width: 768px) {
  }

  :hover {
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 90%;

  @media (min-width: 600px) {
    width: 90%;
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
          width: '60%',
          alignSelf: 'center',
          fill: colors.darkgrey,
          paddingBottom: '40px',
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
          width: '40%',
          alignSelf: 'center',
          fill: colors.coral,
          paddingBottom: '20px',
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
          width: '88%',
          alignSelf: 'center',
          fill: colors.black,
          paddingBottom: '20px',
        }}
      />
    </>
  );
};

export const LinkWrap = styled.a``;
