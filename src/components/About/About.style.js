import styled from 'styled-components/macro';
import { colors } from '../constants';

export const AboutPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.offwhite};
  height: 100%;
  @media (min-width: 900px) {
    flex-direction: row;
    padding: 100px;
  }
`;

export const ContactButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  padding-bottom: 20px;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const AboutContent = styled.p`
  color: ${colors.darkgrey};
  font-size: 20px;
  padding: 20px;
  line-height: 28px;
  text-align: center;
  padding: 50px;
  margin: auto;

  @media (min-width: 900px) {
    text-align: left;
  }
`;

export const ScottPhoto = styled.img`
  border-radius: 100%;
  margin: auto;
  padding: 40px;
  height: 40%;

  @media (min-width: 600px) {
    height: 40%;
  }
`;
