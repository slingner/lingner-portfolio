import styled from 'styled-components/macro';
import { colors } from '../constants';

export const StyledDiv = styled.div`
  align-items: center;
  text-align: center;
  position: relative;
  background-color: transparent;
  height: 100vh;

  @media screen and (max-width: 600px) {
  }
  z-index: 17;

  #divfix {
    position: sticky;
    z-index: 3000;
  }
`;

export const TextOnImage = styled.div`
  font-family: 'Raleway', sans-serif;
  position: absolute;
  top: 67%;
  left: 30%;
  transform: translate(-50%, -50%);
  font-size: ${({ fontsize }) => (fontsize ? fontsize : '2em')};
  color: ${colors.darkgrey};
  font-weight: bolder;
  letter-spacing: 7px;

  @media (min-width: 500px) {
    top: 48%;
    left: 35%;
    font-size: ${({ fontsize }) => (fontsize ? fontsize : '4em')};
  }
`;

export const TextOnImage2 = styled.div`
  font-family: 'Raleway', sans-serif;
  position: absolute;
  top: 84%;
  left: 65%;
  transform: translate(-50%, -50%);
  font-size: ${({ fontsize }) => (fontsize ? fontsize : '2em')};
  color: ${colors.darkgrey};
  font-weight: bolder;
  letter-spacing: 7px;

  @media (min-width: 500px) {
    font-size: ${({ fontsize }) => (fontsize ? fontsize : '4em')};
    top: 75%;
    left: 65%;
  }
`;

export const SubText = styled.p`
  font-size: ${({ fontsize }) => (fontsize ? fontsize : '17px')};
  color: ${colors.darkgrey};
  max-width: 80%;
  margin: 20px auto;
  margin-bottom: 5%;

  @media (min-width: 500px) {
    font-size: ${({ fontsize }) => (fontsize ? fontsize : '22px')};
    margin-top: 5%;
    margin-bottom: 5%;
    max-width: 45%;
  }
`;

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50%;
  width: 93%;
  opacity: 0.3;

  @media (min-width: 600px) {
    margin-top: 10%;
    width: 70%;
    height: auto;
  }
`;
