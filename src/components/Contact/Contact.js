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
  ResumeLink,
} from './Contact.style';
function Contact() {
  return (
    <ContactPageWrap id='contact'>
      <ContactPageHeader>Say hi.</ContactPageHeader>
      <EmailLink
        href='mailto: slingner@gmail.com'
        rel='noreferrer noopener'
        target='_blank'
        aria-label="Link To Scott Lingner's email"
      >
        slingner@gmail.com
      </EmailLink>

      <ResumeLink
        href='https://www.notion.so/Scott-Lingner-Resume-579ea972f8164e11a28af799a0d16a02'
        target='_blank'
        rel='nofollow noopener noreferrer'
        aria-label="Link To Scott Lingner's Resume"
      >
        RESUME
      </ResumeLink>
      {/* <ResumeLink
        href='https://coverstory.page/profile/slingner'
        target='_blank'
        rel='nofollow noopener noreferrer'
        aria-label="Link To Scott Lingner's Video Cover Letter"
      >
        VIDEO COVER
      </ResumeLink> */}

      <ContactConentWrap>
        <LinkWrap
          href='https://angel.co/u/scott-lingner'
          rel='noreferrer noopener'
          target='_blank'
        >
          <AngelListButton
            style={{
              fontSize: '50px',
              padding: '20px',
            }}
            aria-label="Link To Scott Lingner's AngelList Page"
          />
        </LinkWrap>

        <LinkWrap
          href='https://www.linkedin.com/in/scott-lingner/'
          rel='noreferrer noopener'
          target='_blank'
        >
          <LinkedInButton
            style={{
              fontSize: '50px',
              padding: '20px',
            }}
            aria-label="Link To Scott Lingner's LinkedIn Page"
          />
        </LinkWrap>

        <LinkWrap
          href='https://github.com/slingner'
          rel='noreferrer noopener'
          target='_blank'
        >
          <GithubButton
            style={{
              fontSize: '50px',
              padding: '20px',
            }}
            aria-label="Link To Scott Lingner's Github Page"
          />
        </LinkWrap>
      </ContactConentWrap>
      <ContactPageSubHeader
        style={{
          fontSize: '22px',
          marginTop: '20px',
        }}
        aria-label='Scott Lingner'
      >
        Scott Lingner
      </ContactPageSubHeader>
      <ContactPageSubHeader
        aria-label='San Francisco, California'
        style={{ marginBottom: '5px' }}
      >
        San Francisco, California
      </ContactPageSubHeader>
    </ContactPageWrap>
  );
}

export default Contact;
