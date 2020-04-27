import styled from 'styled-components/macro';
import { colors } from '../constants';

export const AboutPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.slategrey};
  height: 100%;
  @media (min-width: 900px) {
    flex-direction: row;
    margin: auto;
  }
`;

export const AboutWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.slategrey};
  @media (min-width: 900px) {
    flex-direction: row;
    width: 68%;
    margin: auto;
  }
`;

export const ResumeLink = styled.a`
  color: ${(props) => (props.color ? props.color : colors.white)};
  text-decoration: none;
  display: block;
  margin: auto;
  margin-top: 40px;
  width: 188px;
  font-size: 30px;
  font-family: 'Raleway', sans-serif;
  font-display: swap;
  text-align: center;
  padding: 12px;

  :hover {
    cursor: pointer;
    color: ${colors.teal};
  }

  @media (min-width: 600px) {
    margin: 25px auto;
  }
`;

export const AboutContent = styled.p`
  color: rgb(35, 35, 35);
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  width: 88%;
  margin: auto;
  margin-bottom: 10%;

  .rbc {
    text-decoration: none;
    color: rgb(35, 35, 35);
    border-bottom: 1px solid rgb(35, 35, 35);
  }

  .rbc:hover {
    color: ${colors.white};
  }
  @media (min-width: 600px) {
    margin-top: 90px;
    padding-left: 10px;
    padding-right: 0px;
    text-align: left;
    width: 50%;
  }
`;

export const ScottPhoto = styled.img`
  margin: 8px auto;
  padding: 10px;
  height: 300px;

  @media (min-width: 600px) {
    margin-top: 70px;
    height: 480px;
    width: auto;
  }
`;
