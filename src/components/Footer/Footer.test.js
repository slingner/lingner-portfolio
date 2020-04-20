import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './Footer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe(`<Footer />`, () => {
  //Smoke Testing
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Footer />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  //Snapshot Testing
  it('renders Footer by default', () => {
    const wrapper = shallow(
      <Router>
        <Footer />
      </Router>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
