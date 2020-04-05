import styled from 'styled-components';
import { colors } from '../constants';

export const AboutContent = styled.p`
  text-align: center;
  padding: 20px 50px 0px 50px;
  margin: auto;
  color: ${colors.darkgrey};
  font-size: 16px;


  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-self: center;
    margin: 0 150px 0 150px;
  } 
`;