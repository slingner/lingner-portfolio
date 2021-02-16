import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Prenda from './Prenda';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe(`<Prenda />`, () => {
  //Smoke Testing
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Prenda />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  //Snapshot Testing
  it('renders Folkul by default', () => {
    const wrapper = shallow(
      <Router>
        <Prenda />
      </Router>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
