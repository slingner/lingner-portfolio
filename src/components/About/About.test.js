import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import About from './About';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe(`<About />`, () => {
  //Smoke Testing
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <About />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  //Snapshot Testing
  it('renders About by default', () => {
    const wrapper = shallow(
      <Router>
        <About />
      </Router>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
