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
  EmailLink,
} from './Contact.style';
function Contact() {
  return (
    <ContactPageWrap id="contact">
      <ContactPageHeader>Say hi.</ContactPageHeader>
      <EmailLink
        href="mailto: slingner@gmail.com"
        rel="noreferrer noopener"
        target="_blank"
      >
        slingner@gmail.com
      </EmailLink>

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
          marginTop: '20px',
        }}
      >
        Scott Lingner
      </ContactPageSubHeader>
      <ContactPageSubHeader style={{ marginBottom: '5px' }}>
        San Francisco, California
      </ContactPageSubHeader>
    </ContactPageWrap>
  );
}

export default Contact;
