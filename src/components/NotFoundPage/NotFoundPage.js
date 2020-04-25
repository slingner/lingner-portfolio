import React, { Component } from 'react';
import { PageWrapper } from '../constants';
import { colors } from '../constants';
import Bear from './notfoundbear.jpg';

export default class NotFoundPage extends Component {
  render() {
    return (
      <PageWrapper
        textalign="center"
        style={{
          padding: '50px',
          color: colors.darkgrey,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="NotFoundPage"
      >
        <h2 style={{ color: '#cc422d' }}>404 - Page not found</h2>
        <a
          href="https://www.etsy.com/shop/RocketBoogieCo#_=_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Bear}
            alt="Not Found Bear"
            style={{
              margin: 'auto',
              width: '480px',
            }}
          />
        </a>
        <p style={{ marginTop: '10px' }}>
          Try going back to your previous page .
        </p>
      </PageWrapper>
    );
  }
}
