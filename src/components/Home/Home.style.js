import styled from 'styled-components/macro';
import { colors } from '../constants';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  text-align: center;
  position: relative;
  /* background-color: ${colors.teal}; */
  @media screen and (max-width: 600px) {
  }
  z-index: 17;
`;

export const TextOnImage = styled.div`
  font-family: 'Raleway', sans-serif;
  position: absolute;
  top: 60%;
  left: 30%;
  transform: translate(-50%, -50%);
  font-size: ${({ fontsize }) => (fontsize ? fontsize : '40px')};
  color: ${colors.darkgrey};
  font-weight: bolder;
  letter-spacing: 7px;
`;

export const SubTextOnImage = styled.div`
  font-family: 'Raleway', sans-serif;
  position: absolute;
  top: 80%;
  left: 65%;
  transform: translate(-50%, -50%);
  font-size: ${({ fontsize }) => (fontsize ? fontsize : '40px')};
  color: ${colors.darkgrey};
  font-weight: bolder;
  letter-spacing: 7px;
`;

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
  width: 93%;
  opacity: 0.3;

  @media (min-width: 600px) {
    width: 70%;
    height: auto;
  }
`;
