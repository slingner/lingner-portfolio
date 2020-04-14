import styled from "styled-components/macro";
import { colors } from "../constants";

export const AboutPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.offwhite};
  height: 100vh;
  padding: 100px;
  @media (min-width: 900px) {
    flex-direction: row;
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

  /* @media (min-width: 600px) {
    height: 50%;
  } */
`;
