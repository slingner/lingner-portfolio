import React from 'react';
import { NavWrapper } from './NavBar.style';
import renderer from 'react-test-renderer';

describe(`<NavBar />`, () => {
  it('renders UI as expected', () => {
    const tree = renderer.create(<NavWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
