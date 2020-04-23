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
  color: ${colors.white};
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  width: 88%;
  margin: auto;

  .rbc {
    text-decoration: none;
    color: white;
    border-bottom: 1px solid white;
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
  margin: 15px auto;
  padding: 10px;
  height: 18em;
  width: auto;

  @media (min-width: 600px) {
    margin-top: 70px;
    height: 25em;
    width: auto;
  }
`;
