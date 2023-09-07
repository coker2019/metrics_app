import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import HomePage from '../components/HomePage';

it('It should render the homepage components correctly', () => {
  const home = render(
    <Router>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </Router>,
  );
  expect(home).toMatchSnapshot();
});
