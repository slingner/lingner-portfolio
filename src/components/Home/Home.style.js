import styled from 'styled-components/macro';
import { colors } from '../constants';
import { keyframes } from 'styled-components';

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

export const splitTextUp = keyframes`
  0% {text-shadow: 0 0 black,,0 0 red, 0 0 orange,0 0 yellow,0 0 green,0 0 skyblue,0 0 blue,0 0 white;} 
  100% {text-shadow: -1px -1px black,-3px -3px red,-5px -5px orange,-7px -7px yellow,-9px -9px green,-11px -11px skyblue,-13px -13px blue,-15px -15px white;
}
`;
export const splitTextDown = keyframes`
  0% {text-shadow: 0 0 black,,0 0 red, 0 0 orange,0 0 yellow,0 0 green,0 0 skyblue,0 0 blue,0 0 white;} 
  100% {text-shadow: 1px 1px black,3px 3px red,5px 5px orange,7px 7px yellow,9px 9px green,11px 11px skyblue,13px 13px blue,15px 15px white;
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

  :hover {
    animation: ${splitTextDown} 2s inherit;
  }

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
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;

  @media (min-width: 500px) {
    font-size: ${({ fontsize }) => (fontsize ? fontsize : '22px')};
    margin-top: 5%;
    margin-bottom: 2%;
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
