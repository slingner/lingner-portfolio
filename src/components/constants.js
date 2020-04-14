import styled from "styled-components/macro";
export const colors = {
  coral: "#EB9C82",
  teal: "#B9E3C6",
  offwhite: "#C4C4C4",
  white: "#ffffff",
  black: "#303838",
  darkgrey: "#424B54",
  darkergrey: "#303838",
  slategrey: "#829191",
  lightblue: "#7AD8E9",
  blue: "#198A9E",
};

export const PageWrapper = styled.div`
  /* background-color: ${({ bgColor }) =>
    bgColor ? bgColor : colors.darkgrey}; */
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-align: ${({ textalign }) => (textalign ? textalign : "")};
  min-height: 100vh;

  @media (min-width: 700px) {
    padding: ${({ padding }) => (padding ? padding : "0px")};

  } 
`;
