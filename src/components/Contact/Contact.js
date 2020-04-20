import React from 'react';
import { LinkWrap } from '../Footer/Footer';
import {
  GithubButton,
  LinkedInButton,
  AngelListButton,
} from '../Button/Button';
import {
  ContactPageWrap,
  ContactPageSubHeader,
  ContactConentWrap,
  ContactPageHeader,
} from './Contact.style';
import { NavItem } from '../NavBar/Navigation';

function Contact() {
  return (
    <ContactPageWrap id="contact">
      <ContactPageHeader>Say hi.</ContactPageHeader>
      <LinkWrap
        href="mailto: slingner@gmail.com"
        rel="noreferrer noopener"
        target="_blank"
      >
        slingner@gmail.com
      </LinkWrap>

      <NavItem
        href="https://scott-lingner-portfolio.s3-us-west-1.amazonaws.com/ScottLingner_Resume.pdf"
        target="_blank"
        rel="nofollow noopener noreferrer"
        style={{
          fontSize: '30px',
          border: '1px solid white',
          padding: '5px',
          marginRight: '84px',
          marginTop: '10px',
        }}
      >
        RESUME
      </NavItem>
      <ContactConentWrap>
        <LinkWrap
          href="https://angel.co/u/scott-lingner"
          rel="noreferrer noopener"
          target="_blank"
        >
          <AngelListButton
            style={{
              fontSize: '50px',
              padding: '20px',
            }}
          />
        </LinkWrap>

        <LinkWrap
          href="https://www.linkedin.com/in/scott-lingner/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <LinkedInButton
            style={{
              fontSize: '50px',
              padding: '20px',
            }}
          />
        </LinkWrap>

        <LinkWrap
          href="https://github.com/slingner"
          rel="noreferrer noopener"
          target="_blank"
        >
          <GithubButton
            style={{
              fontSize: '50px',
              padding: '20px',
            }}
          />
        </LinkWrap>
      </ContactConentWrap>
      <ContactPageSubHeader
        style={{
          fontSize: '22px',
          letterSpacing: '3px',
          marginTop: '50px',
        }}
      >
        Scott Lingner
      </ContactPageSubHeader>
      <ContactPageSubHeader style={{ marginBottom: '15px' }}>
        San Francisco, California
      </ContactPageSubHeader>
    </ContactPageWrap>
  );
}

export default Contact;
