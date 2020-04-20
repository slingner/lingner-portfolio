import styled from 'styled-components/macro';
import { colors } from '../constants';

export const ContactPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.slategrey};
  /* height: 70%; */
  text-align: center;
  justify-content: center;
  /* padding-bottom: 80px; */
  height: 100vh;

  @media (min-width: 600px) {
    margin: auto;
    flex-direction: column;
    height: 60vh;
    /* padding: 100px 100px; */
  }
`;

export const ContactConentWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.slategrey};
  text-align: center;
  /* height: 50%; */
  @media (min-width: 600px) {
    display: none;
  }
`;

export const ContactPageHeader = styled.h1`
  font-family: 'Raleway', sans-serif;
  text-align: right;
  color: ${colors.white};
  font-size: 85px;
  text-align: center;
  /* margin-right: 30px; */
  @media (min-width: 600px) {
    /* margin-top: -320px; */
    font-size: 105px;
    text-align: right;
    margin-right: 80px;
  }
`;
export const ContactPageSubHeader = styled.h2`
  /* margin-top: 10px; */
  text-align: center;
  color: ${colors.white};
  font-size: 16px;
  /* margin-right: 30px; */

  @media (min-width: 600px) {
    margin-right: 80px;
    text-align: right;
    margin-left: 0px;
  }
`;

export const EmailLink = styled.a`
  color: ${colors.white};
  margin-top: 15px;
  text-align: center;

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
  text-align: center;
  border: 1px solid white;
  padding: 8px;

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
