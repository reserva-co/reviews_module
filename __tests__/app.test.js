/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/components/app.jsx';

const $ = require('jquery');

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('ReviewDiv');
  ReactDOM.render(<App />, div);
});

it('should render correctly with no props', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});

it('calls `componentDidMount` before rendering', () => {
  const onDidMount = jest.fn();
  App.prototype.componentDidMount = onDidMount;
  mount(<App />);
  expect(onDidMount).toHaveBeenCalled();
});

it('getTotalStars sets score in state', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  instance.getTotalStars();
  expect(wrapper.state('totalScore')).toBe(NaN);
});

it('getAccuracyStars sets score in state', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  instance.getAccuracyStars();
  expect(wrapper.state('accuracy')).toBe(NaN);
});

it('getCommunicationStars sets score in state', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  instance.getCommunicationStars();
  expect(wrapper.state('communication')).toBe(NaN);
});

it('getCleanlinessStars sets score in state', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  instance.getCleanlinessStars();
  expect(wrapper.state('cleanliness')).toBe(NaN);
});

it('getLocationStars sets score in state', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  instance.getLocationStars();
  expect(wrapper.state('location')).toBe(NaN);
});

it('getCheckInStars sets score in state', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  instance.getCheckInStars();
  expect(wrapper.state('checkIn')).toBe(NaN);
});

it('getValueStars sets score in state', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  instance.getValueStars();
  expect(wrapper.state('value')).toBe(NaN);
});

jest.mock('jquery');

beforeEach(() => jest.resetModules());

it('should return a review', () => $.get('http://localhost3000/api/reviews/1', (data) => {
  expect(data).toBeDefined();
  expect(data.id).toEqual(1);
}));
