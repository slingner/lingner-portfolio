import React, { Component } from 'react';
import { PageWrapper } from '../constants';
import { colors } from '../constants';
import 'lazysizes';
import Bear from './notfoundbear.webp';

export default class NotFoundPage extends Component {
  render() {
    return (
      <PageWrapper
        textalign="center"
        style={{ padding: '50px', color: colors.darkgrey }}
        className="NotFoundPage"
      >
        <h2 style={{ color: '#cc422d' }}>404 - Page not found</h2>
        <a
          href="https://www.etsy.com/shop/RocketBoogieCo#_=_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-src={Bear}
            width="650"
            alt="Not Found Bear"
            className="lazyload"
            style={{ margin: '1px auto', marginTop: '10px' }}
          />
        </a>
        <p style={{ marginTop: '10px' }}>
          Try going back to your previous page .
        </p>
      </PageWrapper>
    );
  }
}
