/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/components/app.jsx';

const $ = require('jquery');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

jest.mock('jquery');

beforeEach(() => jest.resetModules());

it('should return a review', () => $.get('http://localhost3000/api/reviews/1', (data) => {
  expect(data).toBeDefined();
  expect(data.id).toEqual(1);
}));
