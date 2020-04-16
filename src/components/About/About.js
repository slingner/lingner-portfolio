import React from 'react';
import { AboutContent } from './About.style';
import scott from './scott.jpg';
import { ScottPhoto, AboutPageWrap, ContactButtonWrap } from './About.style';
import { LinkWrap } from '../Footer/Footer';
import { LinkedInButton, GithubButton, EmailButton } from '../Button/Button';

export default function About() {
  return (
    <AboutPageWrap>
      <ScottPhoto src={scott} alt="scott-lingner-photo" />

      <AboutContent>
        Through my eight years experience working in the photography and
        advertising industry as a photographer and prop stylist, I have a solid
        comprehension of how to create customer-focused and modern digital
        products. Through the collaboration and communication of every team
        member in the photography studio, we were able to create strong imagery
        with a beautiful design aesthetic.
        <br />
        <br />
        My passion for technology and creativity brought me to my career in web
        development, where I look forward to continuing work within a team that
        creates meaningful and insightful products. I strive to bring balance,
        functionality, and flow in my development. My mission as a developer is
        to create beautiful, efficient, and impactful online applications.
      </AboutContent>
      <ContactButtonWrap>
        <LinkWrap
          href="https://github.com/slingner"
          rel="noreferrer noopener"
          target="_blank"
        >
          <GithubButton />
        </LinkWrap>

        <LinkWrap
          href="https://www.linkedin.com/in/scott-lingner/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <LinkedInButton />
        </LinkWrap>

        <LinkWrap
          href="mailto: slingner@gmail.com"
          rel="noreferrer noopener"
          target="_blank"
        >
          <EmailButton />
        </LinkWrap>
      </ContactButtonWrap>
    </AboutPageWrap>
  );
}
