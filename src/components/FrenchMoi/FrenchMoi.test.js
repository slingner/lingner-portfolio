import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import FrenchMoi from './FrenchMoi';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe(`<FrenchMoi />`, () => {
  //Smoke Testing
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <FrenchMoi />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  //Snapshot Testing
  it('renders FrenchMoi by default', () => {
    const wrapper = shallow(
      <Router>
        <FrenchMoi />
      </Router>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
