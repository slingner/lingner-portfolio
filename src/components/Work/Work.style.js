import styled from "styled-components";
import { colors } from "../constants";
import { Link } from "react-router-dom";

export const PageHeader = styled.h1`
  font-size: 30px;
  color: ${colors.darkergrey};

  @media screen and (max-width: 768px) {
  }

  :hover {
  }
`;

export const SubHeader = styled.h2`
  font-size: 20px;
  color: ${colors.coral};

  @media screen and (max-width: 768px) {
  }

  :hover {
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
  }

  :hover {
  }
`;

export const ContentWrapper = styled.div`
  max-width: 30%;

  > p {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
  }

  :hover {
  }
`;

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  border: 1px solid grey;
  border-radius: 5px;
  height: 100%;
  height: auto;

  @media (min-width: 600px) {
    width: 70%;
    height: auto;
  }
`;
