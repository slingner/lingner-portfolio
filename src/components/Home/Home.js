import React from 'react';
// import { PageWrapper } from '../constants';
// import About from '../About/About';
// import Work from '../Work/Work';
import { Image, StyledDiv, TextOnImage, SubTextOnImage } from './Home.style';
import Logo from './scottlogo.png';

function Home() {
  return (
    <StyledDiv>
      <Image src={Logo} className="img" alt="dashboard-view" />
      <TextOnImage> Scott </TextOnImage>
      <SubTextOnImage> Lingner </SubTextOnImage>
    </StyledDiv>
  );
}

export default Home;
