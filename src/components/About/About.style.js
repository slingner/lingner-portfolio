import styled from 'styled-components/macro';
import { colors } from '../constants';

export const AboutPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.slategrey};
  height: 100%;
  @media (min-width: 900px) {
    flex-direction: row;
    /* width: 50%; */
    /* padding: 50%; */
    margin: auto;
    /* padding: 100px; */
  }
`;

export const AboutWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.slategrey};
  /* height: 100%; */
  @media (min-width: 900px) {
    flex-direction: row;
    width: 60%;
    /* padding: 50%; */
    margin: auto;
    /* padding: 100px; */
  }
`;

export const ResumeLink = styled.a`
  color: ${(props) => (props.color ? props.color : colors.white)};
  text-decoration: none;
  display: block;
  margin: 10px auto;
  margin-top: 40px;
  width: 188px;
  font-size: 30px;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  border: 1px solid white;
  padding: 12px;

  :hover {
    cursor: pointer;
    color: ${colors.teal};
  }

  @media (min-width: 600px) {
    margin-top: 40px;
    margin-left: 0;
  }
`;

export const AboutContent = styled.p`
  color: ${colors.white};
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  width: 88%;
  margin: auto;

  @media (min-width: 600px) {
    margin-top: 90px;
    padding-left: 0px;
    padding-right: 0px;
    text-align: left;
    width: 50%;
  }
`;

export const ScottPhoto = styled.img`
  border-radius: 100%;
  margin: auto;
  padding: 20px;

  @media (min-width: 600px) {
    margin-top: 70px;
    height: 300px;
  }
`;
