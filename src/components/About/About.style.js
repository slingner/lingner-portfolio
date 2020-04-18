import styled from 'styled-components/macro';
import { colors } from '../constants';

export const AboutPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.slategrey};
  height: 100%;
  @media (min-width: 900px) {
    flex-direction: row;
    padding: 100px;
  }
`;

// export const ContactButtonWrap = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin: auto;
//   padding-bottom: 20px;

//   @media (min-width: 900px) {
//     display: none;
//   }
// `;

export const AboutContent = styled.p`
  color: ${colors.white};
  font-size: 20px;
  padding: 20px;
  line-height: 28px;
  text-align: center;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 90px;
  margin: auto;

  @media (min-width: 600px) {
    padding-left: 0px;
    padding-right: 0px;
    text-align: left;
    width: 60%;
  }
`;

export const ScottPhoto = styled.img`
  border-radius: 100%;
  margin: auto;
  padding: 20px;
  height: 40%;

  @media (min-width: 600px) {
    height: 300px;
  }
`;
