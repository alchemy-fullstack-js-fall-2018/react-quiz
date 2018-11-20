import React from 'react';
import App from './App';
import render from 'react-test-renderer';

describe('App Component Test', () => {
  test('App snapshot', () => {
    expect(render
      .create(<App />)
      .toJSON()).toMatchSnapshot();
  });
});
