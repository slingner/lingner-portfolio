/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';


export const StyledFooter = styled.footer`
  position: absolute;
  text-align: center;
  left:0;
  bottom:0;
  right:0;
`;

const GitHub = React.forwardRef(({ className, ...props }, ref) => {
  return (
  
      <button className={cx('Button', className)} ref={ref} {...props}>
 
          <FontAwesomeIcon icon={['fab', 'github']} />

      </button>
  );
});

export const GithubButton = styled(GitHub)`
  background: transparent;
  border: none;
  font-size: 30px;
  color: black;
  padding: 10px 15px 10px 15px;

  :hover{
    cursor: pointer;
    color: ${colors.blue}
  }

  :visited {
    color: ${colors.coral}
  }

  :focus {
    color: ${colors.coral}
  }
`;

const LinkedIn = React.forwardRef(({ className, ...props }, ref) => {
  return (
  
      <button className={cx('Button', className)} ref={ref} {...props}>
 
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} />

      </button>
  );
});

export const LinkedInButton = styled(LinkedIn)`
  background: transparent;
  border: none;
  font-size: 30px;
  color: black;
  padding: 10px 15px 10px 15px;

  :hover{
    cursor: pointer;
    color: ${colors.blue}
  }

  :visited {
    color: ${colors.coral}
  }

  :focus {
    color: ${colors.coral}
  }
`;

const Email = React.forwardRef(({ className, ...props }, ref) => {
  return (
  
      <button className={cx('Button', className)} ref={ref} {...props}>
          <FontAwesomeIcon icon='envelope' />
      </button>
  );
});

export const EmailButton = styled(Email)`
  background: transparent;
  border: none;
  font-size: 30px;
  color: black;
  padding: 10px 15px 10px 15px;

  :hover{
    cursor: pointer;
    color: ${colors.blue}
  }

  :visited {
    color: ${colors.coral}
  }

  :focus {
    color: ${colors.coral}
  }
`;


export const LinkWrap = styled.a`
  color: black;
  :hover{
    cursor: pointer;
    color: ${colors.blue}
  }

  :visited {
    color: ${colors.black}
  }

  :focus {
    color: ${colors.coral}
  }
`;

const Footer = () => (
   <StyledFooter>
     <LinkWrap href='https://github.com/slingner' rel='noreferrer noopener' target="_blank" >
      <GithubButton />
    </LinkWrap>

    <LinkWrap href='https://www.linkedin.com/in/scott-lingner/' rel='noreferrer noopener' target="_blank" >
      <LinkedInButton />
    </LinkWrap>

    <LinkWrap href="mailto: slingner@gmail.com" rel='noreferrer noopener' target="_blank" >
      <EmailButton />
    </LinkWrap>
  </StyledFooter> 
);

export default Footer;