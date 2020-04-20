import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from './Home';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe(`<Home />`, () => {
  //Smoke Testing
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Home />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  //Snapshot Testing
  it('renders Home by default', () => {
    const wrapper = shallow(
      <Router>
        <Home />
      </Router>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
