import styled from 'styled-components/macro';
import { colors } from '../constants';

export const ContactPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.slategrey};
  text-align: center;
  justify-content: center;
  height: 100%;
  padding-bottom: 30px;

  @media (min-width: 600px) {
    margin: auto;
    flex-direction: column;
    height: 100%;
  }
`;

export const ContactConentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${colors.slategrey};
  text-align: center;
  height: 100%;
  @media (min-width: 600px) {
    display: none;
  }
`;

export const ContactPageHeader = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-display: swap;
  text-align: right;
  color: ${colors.white};
  font-size: 65px;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 85px;
    text-align: right;
    margin-right: 80px;
  }

  @media (max-width: 420px) {
    margin-top: 5%;
  }
`;
export const ContactPageSubHeader = styled.h2`
  text-align: center;
  font-size: 16px;
  color: rgb(35, 35, 35);

  @media (min-width: 600px) {
    margin-right: 80px;
    text-align: right;
    margin-left: 0px;
  }
`;

export const EmailLink = styled.a`
  color: ${colors.white};
  margin-top: 28px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 28px;

  :hover {
    cursor: pointer;
    color: ${colors.teal};
  }

  @media (min-width: 600px) {
    text-align: right;
    margin-right: 80px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const ResumeLink = styled.a`
  color: ${(props) => (props.color ? props.color : colors.white)};
  text-decoration: none;

  margin: 15px auto;
  font-size: 30px;
  font-family: 'Raleway', sans-serif;
  font-display: swap;
  text-align: center;
  padding: 2px;

  :hover {
    cursor: pointer;
    color: ${colors.teal};
  }

  @media (min-width: 600px) {
    text-align: right;
    margin-right: 84px;
    margin-top: 10px;
  }
`;
