/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react';
import { AngleDown } from '../Button/Button';
import {
  Image,
  StyledDiv,
  TextOnImage,
  TextOnImage2,
  SubText,
} from './Home.style';
import Logo from './scottlogo.png';
import { colors } from '../constants';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';

const useScroll = () => {
  const htmlElRef = useRef(null);
  const executeScroll = () => window.scrollTo(0, htmlElRef.current.offsetTop);

  return [executeScroll, htmlElRef];
};

export default function Home() {
  const [executeScroll, htmlElRef] = useScroll();

  return (
    <main>
      <StyledDiv>
        <div id="divfix">
          <Image src={Logo} className="img" alt="dashboard-view" />
          <TextOnImage> Scott </TextOnImage>
          <TextOnImage2> Lingner </TextOnImage2>
        </div>
        <SubText>
          I'm a San Francisco based software engineer focused on creating
          efficient and impactful applications.
        </SubText>

        <AngleDown
          aria-label="Click to scroll down the page"
          className="bounce"
          style={{ color: colors.darkgrey }}
          onClick={executeScroll}
        />
      </StyledDiv>
      <div ref={htmlElRef}>
        <Work id="work" />
      </div>
      <Contact />
    </main>
  );
}
