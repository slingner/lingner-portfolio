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
  padding: 10px;
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
  text-align: right;
  margin-right: 30px;
  @media (min-width: 600px) {
    /* margin-top: -320px; */
    font-size: 105px;
    text-align: right;
    margin-right: 80px;
  }
`;
export const ContactPageSubHeader = styled.h2`
  /* margin-top: 10px; */
  text-align: right;
  color: ${colors.white};
  font-size: 16px;
  margin-right: 30px;

  @media (min-width: 600px) {
    margin-right: 80px;
    text-align: right;
    margin-left: 0px;
  }
`;
