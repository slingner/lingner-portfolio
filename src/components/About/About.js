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
          My mission as a developer is to help companies grow with beautiful,
          efficient, and impactful online applications.
          <br />
          <br />
          My 8+ years background in the photography and advertising industry as
          a photographer and stylist translates to web development as I am
          passionate about creating compelling narratives and customer-focused
          products.
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
