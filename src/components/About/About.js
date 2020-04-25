import React from 'react';
import { AboutContent } from './About.style';
import scott from './scott.png';
import { ScottPhoto, AboutPageWrap, AboutWrap } from './About.style';

export default function About() {
  return (
    <AboutPageWrap>
      <AboutWrap>
        <ScottPhoto src={scott} alt="scott-lingner-photo" />
        <AboutContent>
          My mission as a developer is to help companies grow with impactful and
          efficient applications.
          <br />
          <br />I am a collaborative developer with a strong background in
          building interactive web applications from the ground up. I have a
          creative problem-solving and agile mindset from 8 years of experience
          in the photography and advertising industry.
          <br />
          <br />
          In my spare time, I illustrate paper goods under{' '}
          <a
            href="https://www.etsy.com/shop/RocketBoogieCo#_=_"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="rbc"
          >
            Rocket Boogie Co.
          </a>
          <br />
          <br />
          I’m always open to discussing development work or collaborative
          opportunities.
          <br />
        </AboutContent>
      </AboutWrap>
    </AboutPageWrap>
  );
}
