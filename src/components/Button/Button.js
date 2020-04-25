import React from 'react';
import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';
import { colors } from '../constants';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = React.forwardRef(({ className, ...props }, ref) => {
  return <button className={cx('Button', className)} ref={ref} {...props} />;
});

export const AngleDownButton = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <button className={cx('Button', className)} ref={ref} {...props}>
        <FontAwesomeIcon aria-label="Angle Down Button" icon="angle-down" />
      </button>
    );
  }
);

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
  40% {transform: translateY(-10px);} 
  60% {transform: translateY(-5px);} 
}
`;

export const AngleDown = styled(AngleDownButton)`
  background: transparent;
  color: ${({ color }) => (color ? color : colors.slategrey)};
  border: none;
  margin-top: 22%;
  font-size: 1.2em;
  z-index: 11;
  animation: ${bounce} 2s linear infinite;
  :hover {
    cursor: pointer;
    color: ${colors.white};
  }

  @media (min-width: 600px) {
    margin-top: 1%;
  }
`;

export const TechWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0px auto;
  padding: 8px;
  align-items: center;
`;

const React1 = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props}>
      <FontAwesomeIcon aria-label="React Logo" icon={['fab', 'react']} />
    </button>
  );
});

export const ReactLogo = styled(React1)`
  background: transparent;
  border: none;
  font-size: 30px;
  padding: 2;
  color: ${colors.white};
`;

const CSS3 = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props}>
      <FontAwesomeIcon aria-label="Css Logo" icon={['fab', 'css3']} />
    </button>
  );
});

export const CssLogo = styled(CSS3)`
  background: transparent;
  border: none;
  font-size: 30px;
  padding: 2;
  color: ${colors.white};
`;

const Node = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props}>
      <FontAwesomeIcon aria-label="Node.js Logo" icon={['fab', 'node-js']} />
    </button>
  );
});

export const NodeLogo = styled(Node)`
  background: transparent;
  border: none;
  font-size: 34px;
  padding: 2;
  color: ${colors.white};
`;

const LiveLink = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props}>
      <FontAwesomeIcon aria-label="Live Link Globe Logo" icon="globe" />
    </button>
  );
});

export const LiveLinkButton = styled(LiveLink)`
  background: transparent;
  border: none;
  font-size: 30px;
  padding: 2;
  color: ${colors.white};

  :hover {
    cursor: pointer;
  }
`;

const GitHub = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props}>
      <FontAwesomeIcon aria-label="Github Logo" icon={['fab', 'github']} />
    </button>
  );
});

export const GithubButton = styled(GitHub)`
  background: transparent;
  border: none;
  font-size: 30px;
  color: ${colors.white};

  :hover {
    cursor: pointer;
    color: ${colors.blue};
  }

  :visited {
    color: ${colors.teal};
  }

  :focus {
    color: ${colors.blue};
  }
`;

const LinkedIn = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props}>
      <FontAwesomeIcon
        aria-label="LinkedIn Logo"
        icon={['fab', 'linkedin-in']}
      />
    </button>
  );
});

export const LinkedInButton = styled(LinkedIn)`
  background: transparent;
  border: none;
  font-size: 30px;
  padding: 0;
  color: ${colors.white};

  :hover {
    cursor: pointer;
    color: ${colors.blue};
  }

  :visited {
    color: ${colors.teal};
  }

  :focus {
    color: ${colors.blue};
  }
`;

const Email = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props}>
      <FontAwesomeIcon aria-label="Envelope Email Logo" icon="envelope" />
    </button>
  );
});

export const EmailButton = styled(Email)`
  background: transparent;
  border: none;
  font-size: 30px;

  color: ${colors.white};

  :hover {
    cursor: pointer;
    color: ${colors.blue};
  }

  :visited {
    color: ${colors.teal};
  }

  :focus {
    color: ${colors.blue};
  }
`;

const AngelList = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props}>
      <FontAwesomeIcon
        aria-label="AngelList Logo"
        icon={['fab', 'angellist']}
      />
    </button>
  );
});

export const AngelListButton = styled(AngelList)`
  background: transparent;
  border: none;
  font-size: 30px;
  color: ${colors.white};

  :hover {
    cursor: pointer;
    color: ${colors.blue};
  }

  :visited {
    color: ${colors.teal};
  }

  :focus {
    color: ${colors.blue};
  }
`;
