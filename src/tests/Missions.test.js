import React from 'react';
import {
  fireEvent, render, getByText,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import providerWrapper from '../services/testWrapper';
import store from '../redux/configureStore';

describe('Missions page ', () => {
  test('renders missions', async () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByText(tree.container, 'Missions')).toBeInTheDocument();
  });

  test('navigate to missions', async () => {
    const { getByText } = providerWrapper(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { store },
    );
    fireEvent.click(getByText('Missions'));
    expect(getByText('Description')).toBeInTheDocument();
  });

  test('join mission', async () => {
    const { getByText } = providerWrapper(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { store },
    );
    fireEvent.click(getByText('Missions'));
    setTimeout(() => {
      fireEvent.click(getByText('Join Mission'));
      expect(getByText('Leave Mission')).toBeInTheDocument();
    }, 1000);
  });

  test('Active member', async () => {
    const { getByText } = providerWrapper(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { store },
    );
    fireEvent.click(getByText('Missions'));
    setTimeout(() => {
      fireEvent.click(getByText('Join Mission'));
      expect(getByText('Active Member')).toBeInTheDocument();
    }, 1000);
  });
});
