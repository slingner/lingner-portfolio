import React from 'react';
import { AboutContent } from './About.style';
import scott from './scott.jpg';
import {
  ScottPhoto,
  AboutPageWrap,
  AboutWrap,
  ResumeLink,
} from './About.style';

export default function About() {
  return (
    <AboutPageWrap>
      <AboutWrap>
        <ScottPhoto src={scott} alt="scott-lingner-photo" />
        <AboutContent>
          My mission as a developer is to help companies grow with impactful and
          efficient applications.
          <br />
          <br />I am a project-oriented developer with a strong background in
          building interactive web applications from the ground up. I have a
          detail-oriented mindset from my 8+ years of experience in the
          photography and advertising industry.
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
          <ResumeLink
            href="https://scott-lingner-portfolio.s3-us-west-1.amazonaws.com/ScottLingner_Resume.pdf"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            RÉSUMÉ
          </ResumeLink>
        </AboutContent>
      </AboutWrap>
    </AboutPageWrap>
  );
}
